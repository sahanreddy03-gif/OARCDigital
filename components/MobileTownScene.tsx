"use client";

/**
 * MobileTownScene — Three.js WebGL miniature town for the mobile hero.
 *
 * Safety guarantees:
 *  • Three.js is imported only when the viewport is ≤767 px (mq gate).
 *  • A generation token invalidates any import that resolves after a teardown.
 *  • All canvas event handlers are stored and removed on teardown.
 *  • The RAF loop starts ONLY when the document is visible; visibilitychange
 *    is the sole resume path.
 *  • Teardown clears all building timers and disposes renderer resources.
 *  • mq crossing mobile→desktop tears the scene down; desktop→mobile reboots it.
 */

import { useEffect, useRef } from "react";
import type * as THREE_T from "three";

type V3  = THREE_T.Vector3;
type Grp = THREE_T.Group;
type MSM = THREE_T.MeshStandardMaterial;

interface BizData {
  body:  number; w: number; d: number; hero?: boolean;
  floors:   Grp[];  top:   number; count: number;
  pulse:    number; lift:  number;
  growTo?:  Grp;    reset?: number;
  resetT?:  ReturnType<typeof setTimeout>;
  win?: MSM; signMat?: MSM; bodyC?: number; group?: Grp;
}

type Person = {
  mesh: Grp; biz: BizData;
  start: V3; end: V3;
  t: number; spd: number;
  hopY: number; vy: number; ox: number; oz: number;
};

export default function MobileTownScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const elRaw  = containerRef.current;
    const cvsRaw = canvasRef.current;
    if (!elRaw || !cvsRaw) return;

    // Cast: narrowed above; TypeScript doesn't carry narrowing into closures.
    const el:  HTMLDivElement    = elRaw;
    const cvs: HTMLCanvasElement = cvsRaw;

    let effectAlive     = true;
    let teardownScene:  (() => void) | null = null;
    // Generation counter — incremented on every boot attempt.
    // The import callback compares its captured value against the current one
    // so a teardown that happens before the promise resolves invalidates it.
    let gen = 0;

    /* ────────────────────────────────────────────────────────────────
       bootScene — idempotent (returns early if already running).
       Must be called only when effectAlive === true.
    ──────────────────────────────────────────────────────────────── */
    function bootScene() {
      if (!effectAlive || teardownScene) return;

      const myGen = ++gen; // snapshot; we check it after the async import

      import("three").then((THREE) => {
        // If another boot/teardown cycle happened while we were importing, bail.
        if (!effectAlive || myGen !== gen) return;

        /* ── Renderer ─────────────────────────────────────────────── */
        let renderer: THREE_T.WebGLRenderer;
        try {
          renderer = new THREE.WebGLRenderer({ canvas: cvs, antialias: true, alpha: false });
        } catch { return; }

        const DPR = Math.min(devicePixelRatio || 1, 3);
        renderer.setPixelRatio(DPR);
        renderer.setClearColor(0x050505, 1);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
        if ("outputColorSpace" in renderer) {
          (renderer as any).outputColorSpace =
            (THREE as any).SRGBColorSpace ?? (THREE as any).sRGBEncoding;
        } else {
          (renderer as any).outputEncoding = (THREE as any).sRGBEncoding;
        }
        renderer.toneMapping         = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.08;

        /* ── Scene & Camera ───────────────────────────────────────── */
        const scene = new THREE.Scene();
        scene.fog   = new THREE.FogExp2(0x050505, 0.11);
        const cam   = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
        cam.position.set(0.5, 1.45, 5.7);
        cam.lookAt(0, 0.95, 0);

        /* ── Lighting ─────────────────────────────────────────────── */
        scene.add(new THREE.HemisphereLight(0x2a3242, 0x0a0908, 0.42));
        const key = new THREE.DirectionalLight(0xffe7c6, 1.3);
        key.position.set(3, 7, 4); key.castShadow = true;
        key.shadow.mapSize.set(4096, 4096);
        key.shadow.bias = -0.0004; key.shadow.radius = 4;
        const ks = key.shadow.camera as THREE_T.OrthographicCamera;
        ks.near = 1; ks.far = 26; ks.left = -7; ks.right = 7; ks.top = 7; ks.bottom = -7;
        scene.add(key);
        const goldRim = new THREE.DirectionalLight(0xffb060, 0.6);
        goldRim.position.set(-4, 2.5, -5); scene.add(goldRim);
        const fill = new THREE.DirectionalLight(0x1a2030, 0.3);
        fill.position.set(-6, 3, 2); scene.add(fill);

        /* ── World ────────────────────────────────────────────────── */
        const world = new THREE.Group(); scene.add(world);

        const mat = (c: number, rgh = 0.62, met = 0.02): MSM =>
          new THREE.MeshStandardMaterial({ color: c, roughness: rgh, metalness: met });
        const goldMat = (): MSM =>
          new THREE.MeshStandardMaterial({ color: 0xC9A15E, roughness: 0.32, metalness: 0.72 });
        const em = (c: number, i = 1.15): MSM =>
          new THREE.MeshStandardMaterial({ color: c, emissive: new THREE.Color(c), emissiveIntensity: i, roughness: 0.4 });

        const road = new THREE.Mesh(new THREE.BoxGeometry(10, 0.3, 2.6),
          new THREE.MeshStandardMaterial({ color: 0x0b0a09, roughness: 0.28, metalness: 0.38 }));
        road.position.y = -0.15; road.receiveShadow = true; world.add(road);
        const walk = new THREE.Mesh(new THREE.BoxGeometry(10, 0.34, 1.2),
          new THREE.MeshStandardMaterial({ color: 0x121110, roughness: 0.5, metalness: 0.15 }));
        walk.position.set(0, -0.13, 0.78); walk.receiveShadow = true; world.add(walk);

        // Gold chart ticks
        (() => {
          const pos: number[] = [];
          pos.push(-4.6, 0.02, -0.55, 4.6, 0.02, -0.55);
          for (let i = -9; i <= 9; i++) {
            const x = (i / 9) * 4.4;
            pos.push(x, 0.02, -0.55, x, 0.09, -0.55);
          }
          const g = new THREE.BufferGeometry();
          g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
          world.add(new THREE.LineSegments(g,
            new THREE.LineBasicMaterial({ color: 0xC9A15E, transparent: true, opacity: 0.30 })));
        })();

        // Ascending growth line
        (() => {
          const pts: THREE_T.Vector3[] = [];
          for (let i = 0; i <= 40; i++) {
            const x = -4.4 + (i / 40) * 8.8;
            const y = 0.15 + Math.pow(i / 40, 1.4) * 1.7 + Math.sin(i * 0.6) * 0.05;
            pts.push(new THREE.Vector3(x, y, -1.15));
          }
          world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
            new THREE.LineBasicMaterial({ color: 0xC9A15E, transparent: true, opacity: 0.42 })));
        })();

        // Lamp posts
        function lamp(x: number) {
          const g    = new THREE.Group();
          const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.028, 0.72, 8), goldMat());
          pole.position.y = 0.36; pole.castShadow = true; g.add(pole);
          const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), em(0xF3D08A, 1.8));
          bulb.position.y = 0.74; g.add(bulb);
          const pl = new THREE.PointLight(0xffd18f, 1.4, 3.4, 2);
          pl.position.set(0, 0.74, 0); g.add(pl);
          g.position.set(x, 0, 0.55); world.add(g);
        }
        lamp(-2.3); lamp(2.3);

        /* ── Buildings ────────────────────────────────────────────── */
        const Fh = 0.5, MAXF = 5;
        const picks: THREE_T.Mesh[] = [];

        function floorMesh(w: number, d: number, body: number, ground: boolean, o: BizData): Grp {
          const g   = new THREE.Group();
          const box = new THREE.Mesh(new THREE.BoxGeometry(w, Fh, d), mat(body));
          box.position.y = Fh / 2; box.castShadow = true; box.receiveShadow = true; g.add(box);
          if (ground) {
            const gw = new THREE.Mesh(new THREE.BoxGeometry(w * 0.74, Fh * 0.6, 0.04), em(0xF0C67A, 1.2));
            gw.position.set(0, Fh * 0.42, d / 2 + 0.02); g.add(gw);
            o.win = gw.material as MSM;
            const door = new THREE.Mesh(new THREE.BoxGeometry(w * 0.22, Fh * 0.72, 0.05), mat(0x171310, 0.9));
            door.position.set(w * 0.3, Fh * 0.36, d / 2 + 0.02); g.add(door);
            const ledge = new THREE.Mesh(new THREE.BoxGeometry(w * 0.98, 0.05, 0.14), goldMat());
            ledge.position.set(0, Fh * 0.74, d / 2 + 0.06); ledge.castShadow = true; g.add(ledge);
            const sign = new THREE.Mesh(new THREE.BoxGeometry(w * 0.5, Fh * 0.14, 0.05),
              em(o.hero ? 0xF3D08A : 0xEAD3A0, 1.0));
            sign.position.set(0, Fh * 0.96, d / 2 + 0.02); g.add(sign);
            o.signMat = sign.material as MSM;
          } else {
            ([-1, 1] as const).forEach((k) => {
              const win = new THREE.Mesh(new THREE.BoxGeometry(w * 0.22, Fh * 0.4, 0.04), em(0xF0C67A, 1.0));
              win.position.set(k * w * 0.26, Fh * 0.5, d / 2 + 0.02); g.add(win);
            });
          }
          return g;
        }

        function building(o: BizData): Grp {
          const g = new THREE.Group(); g.userData = o;
          o.floors = []; o.top = 0; o.count = 0; o.pulse = 0; o.lift = 0;
          const body = o.hero ? 0xCBA262 : o.body;
          const gf   = floorMesh(o.w, o.d, body, true, o);
          g.add(gf); o.floors.push(gf); o.top = Fh; o.bodyC = body;
          if (o.hero) {
            (gf.children[0] as THREE_T.Mesh).material =
              new THREE.MeshStandardMaterial({ color: 0xC9A15E, roughness: 0.4, metalness: 0.52 });
          }
          const hit = new THREE.Mesh(new THREE.BoxGeometry(o.w, 3, o.d),
            new THREE.MeshBasicMaterial({ visible: false }));
          hit.position.y = 1.4; hit.userData.biz = o; g.add(hit); picks.push(hit);
          o.group = g; return g;
        }

        const BIZ: BizData[] = [
          { body: 0xE6DECC, w: 0.9,  d: 0.78, floors: [], top: 0, count: 0, pulse: 0, lift: 0 },
          { body: 0xDDD4C0, w: 0.86, d: 0.76, floors: [], top: 0, count: 0, pulse: 0, lift: 0 },
          { body: 0xEAE2D0, w: 0.98, d: 0.82, hero: true, floors: [], top: 0, count: 0, pulse: 0, lift: 0 },
          { body: 0xE0D7C4, w: 0.9,  d: 0.78, floors: [], top: 0, count: 0, pulse: 0, lift: 0 },
          { body: 0xE6DDCB, w: 0.9,  d: 0.78, floors: [], top: 0, count: 0, pulse: 0, lift: 0 },
        ];
        const bizes: BizData[] = [];
        BIZ.forEach((o, i) => {
          const g = building(o); g.position.set((i - 2) * 1.04, 0, 0);
          world.add(g); bizes.push(o);
        });

        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

        function grow(o: BizData, force = false) {
          o.count++;
          if ((o.count % 2 === 0 || force) && o.floors.length < MAXF) {
            const w = o.w * (1 - o.floors.length * 0.045);
            const d = o.d * (1 - o.floors.length * 0.045);
            const f = floorMesh(w, d, o.bodyC!, false, o);
            f.position.y = o.top; f.scale.y = 0.001; f.userData.a = 0;
            o.group!.add(f); o.floors.push(f); o.top += Fh; o.growTo = f;
          }
          o.pulse = 1;
          if (o.floors.length >= MAXF && !o.resetT) {
            o.resetT = setTimeout(() => { o.reset = 1; }, 4200);
          }
        }

        /* ── People ───────────────────────────────────────────────── */
        const people: Person[] = [];
        const makePerson = (): Grp => {
          const g = new THREE.Group();
          const b = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.085, 0.22, 10), mat(0xDED5C2, 0.55));
          b.position.y = 0.11; b.castShadow = true;
          const h = new THREE.Mesh(new THREE.SphereGeometry(0.062, 14, 12), mat(0xE9DECA, 0.5));
          h.position.y = 0.28; h.castShadow = true;
          g.add(b); g.add(h); world.add(g); return g;
        };
        const easeSm = (t: number) => t * t * (3 - 2 * t);
        const respawn = (p: Person) => {
          const o   = bizes[Math.floor(Math.random() * bizes.length)];
          p.biz     = o;
          const bx  = o.group!.position.x;
          const side = Math.random() < 0.5 ? -1 : 1;
          p.start   = new THREE.Vector3(bx + side * (1.4 + Math.random()), 0, 0.98);
          p.end     = new THREE.Vector3(bx + (Math.random() - 0.5) * 0.3, 0, o.d / 2 + 0.12);
          p.t = 0; p.spd = 0.13 + Math.random() * 0.1;
          p.hopY = 0; p.vy = 0; p.ox = 0; p.oz = 0;
        };
        for (let i = 0; i < 18; i++) {
          const p: Person = {
            mesh: makePerson(), biz: bizes[0], t: 0, spd: 0.13,
            start: new THREE.Vector3(), end: new THREE.Vector3(),
            hopY: 0, vy: 0, ox: 0, oz: 0,
          };
          respawn(p); p.t = Math.random(); people.push(p);
        }

        /* ── Bloom post-processing ────────────────────────────────── */
        const mkRT = () => new THREE.WebGLRenderTarget(2, 2, {
          minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
          format: THREE.RGBAFormat, type: THREE.UnsignedByteType,
        });
        const rtS = mkRT(), rtA = mkRT(), rtB = mkRT(), rtC = mkRT();
        const fsScene  = new THREE.Scene();
        const fsCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const quad     = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
        fsScene.add(quad);
        const fsV = "varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.0,1.0);}";
        const blur = new THREE.ShaderMaterial({
          uniforms: { tDiffuse: { value: null }, dir: { value: new THREE.Vector2() } },
          vertexShader: fsV,
          fragmentShader: `precision highp float;
varying vec2 vUv;uniform sampler2D tDiffuse;uniform vec2 dir;
void main(){vec4 s=vec4(0.0);
s+=texture2D(tDiffuse,vUv-dir*5.0)*0.04;s+=texture2D(tDiffuse,vUv-dir*4.0)*0.06;
s+=texture2D(tDiffuse,vUv-dir*3.0)*0.09;s+=texture2D(tDiffuse,vUv-dir*2.0)*0.12;
s+=texture2D(tDiffuse,vUv-dir)*0.15;s+=texture2D(tDiffuse,vUv)*0.17;
s+=texture2D(tDiffuse,vUv+dir)*0.15;s+=texture2D(tDiffuse,vUv+dir*2.0)*0.12;
s+=texture2D(tDiffuse,vUv+dir*3.0)*0.09;s+=texture2D(tDiffuse,vUv+dir*4.0)*0.06;
s+=texture2D(tDiffuse,vUv+dir*5.0)*0.04;gl_FragColor=s;}`,
        });
        const comp = new THREE.ShaderMaterial({
          uniforms: { tScene: { value: null }, tBloom: { value: null }, uT: { value: 0 } },
          vertexShader: fsV,
          fragmentShader: `precision highp float;
varying vec2 vUv;uniform sampler2D tScene,tBloom;uniform float uT;
void main(){vec3 c=texture2D(tScene,vUv).rgb;vec3 b=texture2D(tBloom,vUv).rgb;
vec3 col=c+b*0.9;vec2 d=vUv-0.5;col*=smoothstep(1.3,0.28,length(d));
float g=fract(sin(dot(vUv*(uT+1.0),vec2(12.9898,78.233)))*43758.5453);
col+=(g-0.5)*0.022;gl_FragColor=vec4(col,1.0);}`,
        });
        const pass = (m: THREE_T.ShaderMaterial, tg: THREE_T.WebGLRenderTarget | null) => {
          quad.material = m as any;
          renderer.setRenderTarget(tg);
          renderer.render(fsScene, fsCamera);
        };

        /* ── Resize ───────────────────────────────────────────────── */
        const resize = () => {
          const w = el.clientWidth, h = el.clientHeight;
          if (w < 1 || h < 1) return;
          renderer.setSize(w, h);
          cam.aspect = w / h; cam.updateProjectionMatrix();
          const pw = Math.floor(w * DPR), ph = Math.floor(h * DPR);
          rtS.setSize(pw, ph);
          const hw = Math.max(2, pw >> 1), hh = Math.max(2, ph >> 1);
          rtA.setSize(hw, hh); rtB.setSize(hw, hh); rtC.setSize(hw, hh);
          const halfH = Math.tan((cam.fov * Math.PI) / 360) * cam.position.z;
          const halfW = halfH * (w / h);
          world.scale.setScalar(Math.max(0.5, Math.min(1.05, (2 * halfW * 0.92) / 5.6)));
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(el);

        /* ── Interaction — named handlers so they can be removed ──── */
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
        const ray   = new THREE.Raycaster();
        const ndc   = new THREE.Vector2();
        const ptr   = new THREE.Vector3(999, 0, 999);
        let ptrT    = 0;

        const hitTest = (cx: number, cy: number) => {
          const rc = cvs.getBoundingClientRect();
          if (cy < rc.top - 20 || cy > rc.bottom + 20) return null;
          ndc.x = ((cx - rc.left) / rc.width) * 2 - 1;
          ndc.y = -((cy - rc.top)  / rc.height) * 2 + 1;
          ray.setFromCamera(ndc, cam);
          const hb = ray.intersectObjects(picks, false);
          if (hb.length) return { biz: hb[0].object.userData.biz as BizData };
          const pt = new THREE.Vector3();
          if (ray.ray.intersectPlane(plane, pt)) { world.worldToLocal(pt); return { pt }; }
          return null;
        };
        const mv  = (cx: number, cy: number) => {
          const w = hitTest(cx, cy);
          if (w?.pt) { ptr.copy(w.pt); ptrT = performance.now(); }
        };
        const tap = (cx: number, cy: number) => {
          const w = hitTest(cx, cy);
          if (w?.biz) { grow(w.biz, true); grow(w.biz, true); w.biz.lift = 0.1; }
        };

        // Store named handler refs for removal in teardown
        const onMouseMove  = (e: MouseEvent)     => mv(e.clientX, e.clientY);
        const onClick      = (e: MouseEvent)     => tap(e.clientX, e.clientY);
        const onTouchMove  = (e: TouchEvent)     => {
          const t = e.targetTouches[0]; mv(t.clientX, t.clientY);
        };
        const onTouchEnd   = (e: TouchEvent)     => {
          const t = e.changedTouches[0]; tap(t.clientX, t.clientY);
        };
        cvs.addEventListener("mousemove", onMouseMove);
        cvs.addEventListener("click",     onClick);
        cvs.addEventListener("touchmove", onTouchMove, { passive: true });
        cvs.addEventListener("touchend",  onTouchEnd,  { passive: true });

        /* ── RAF loop ─────────────────────────────────────────────── */
        let raf   = 0;
        const clock = new THREE.Clock();

        const frame = () => {
          raf = requestAnimationFrame(frame);
          const dt     = Math.min(clock.getDelta(), 0.05);
          const t      = clock.elapsedTime;
          const active = performance.now() - ptrT < 250;

          world.rotation.y = Math.sin(t * 0.18) * 0.06;
          world.position.y = Math.sin(t * 0.7)  * 0.02;

          for (let i = 0; i < people.length; i++) {
            const p = people[i];
            p.t += p.spd * dt;
            if (p.t >= 1) { grow(p.biz); respawn(p); continue; }
            const e  = easeSm(p.t);
            const bx = p.start.x + (p.end.x - p.start.x) * e;
            const bz = p.start.z + (p.end.z - p.start.z) * e;
            const by = Math.abs(Math.sin(p.t * 22)) * 0.025;
            if (active) {
              const dx = bx + p.ox - ptr.x, dz = bz + p.oz - ptr.z;
              const d  = Math.sqrt(dx * dx + dz * dz);
              if (d < 0.5) {
                if (p.hopY < 0.02) p.vy = 1.2;
                const f = (0.5 - d) * 0.4, n = 1 / (d + 1e-3);
                p.ox += dx * n * f; p.oz += dz * n * f;
              }
            }
            p.vy -= 6 * dt; p.hopY += p.vy * dt;
            if (p.hopY < 0) { p.hopY = 0; p.vy = 0; }
            p.ox *= 0.88; p.oz *= 0.88;
            p.mesh.position.set(bx + p.ox, by + p.hopY, bz + p.oz);
            p.mesh.rotation.y = Math.atan2(p.end.x - p.start.x, p.end.z - p.start.z);
            const sc = Math.min(1, p.t * 6) * Math.min(1, (1 - p.t) * 5 + 0.12);
            p.mesh.scale.setScalar(sc);
          }

          for (let i = 0; i < bizes.length; i++) {
            const o = bizes[i];
            o.group!.position.y = o.lift; o.lift *= 0.88;
            if (o.growTo) {
              const f = o.growTo;
              f.userData.a = Math.min(1, f.userData.a + dt * 2.2);
              f.scale.y    = easeOut(f.userData.a);
              if (f.userData.a >= 1) o.growTo = undefined;
            }
            if (o.pulse > 0) {
              o.pulse = Math.max(0, o.pulse - dt * 1.4);
              const k = 1 + o.pulse * 1.4;
              if (o.win)     o.win.emissiveIntensity     = 1.2 * k;
              if (o.signMat) o.signMat.emissiveIntensity = 1.0 * k;
            }
            if (o.reset) {
              o.reset = 0; o.resetT = undefined;
              for (let q = o.floors.length - 1; q >= 1; q--) {
                const flr = o.floors[q];
                o.group!.remove(flr);
                // Dispose GPU resources immediately — removed nodes are
                // unreachable by scene.traverse() later.
                flr.traverse((child) => {
                  const m = child as THREE_T.Mesh;
                  if (m.geometry) m.geometry.dispose();
                  if (m.material) {
                    (Array.isArray(m.material) ? m.material : [m.material])
                      .forEach((mat) => mat.dispose());
                  }
                });
              }
              o.floors.length = 1; o.top = Fh; o.count = 0;
            }
          }

          renderer.setRenderTarget(rtS); renderer.clear(); renderer.render(scene, cam);
          blur.uniforms.tDiffuse.value = rtS.texture;
          blur.uniforms.dir.value.set(1 / rtA.width, 0);    pass(blur, rtA);
          blur.uniforms.tDiffuse.value = rtA.texture;
          blur.uniforms.dir.value.set(0, 1 / rtB.height);   pass(blur, rtB);
          blur.uniforms.tDiffuse.value = rtB.texture;
          blur.uniforms.dir.value.set(2.2 / rtA.width, 0);  pass(blur, rtA);
          blur.uniforms.tDiffuse.value = rtA.texture;
          blur.uniforms.dir.value.set(0, 2.2 / rtC.height); pass(blur, rtC);
          comp.uniforms.tScene.value = rtS.texture;
          comp.uniforms.tBloom.value = rtC.texture;
          comp.uniforms.uT.value     = t;
          renderer.setRenderTarget(null); pass(comp, null);
        };

        /* Start RAF only when visible; visibilitychange is the sole resume path */
        const startLoop = () => {
          if (!raf) {
            clock.getDelta(); // flush any stale dt accumulated while hidden
            frame();
          }
        };

        const onVisibility = () => {
          if (document.hidden) {
            cancelAnimationFrame(raf); raf = 0;
          } else {
            startLoop();
          }
        };
        document.addEventListener("visibilitychange", onVisibility);

        // Boot: start immediately if visible, otherwise wait for visibility event
        if (!document.hidden) {
          startLoop();
        }
        // (If hidden on boot, onVisibility will fire when the tab becomes visible)

        /* ── Teardown for this scene instance ─────────────────────── */
        teardownScene = () => {
          // Cancel animation loop
          cancelAnimationFrame(raf); raf = 0;
          // Remove all listeners
          document.removeEventListener("visibilitychange", onVisibility);
          cvs.removeEventListener("mousemove", onMouseMove);
          cvs.removeEventListener("click",     onClick);
          cvs.removeEventListener("touchmove", onTouchMove);
          cvs.removeEventListener("touchend",  onTouchEnd);
          ro.disconnect();
          // Clear pending building timers
          bizes.forEach((o) => {
            if (o.resetT) { clearTimeout(o.resetT); o.resetT = undefined; }
          });
          // Recursively dispose all scene-graph geometries and materials
          scene.traverse((obj) => {
            if ((obj as THREE_T.Mesh).isMesh || (obj as any).isLine || (obj as any).isLineSegments) {
              const mesh = obj as THREE_T.Mesh;
              mesh.geometry?.dispose();
              const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              mats.forEach((m) => m?.dispose());
            }
          });
          // Dispose post-processing full-screen quad geometry + materials
          quad.geometry?.dispose();
          // Dispose render targets, shader materials, renderer
          renderer.dispose();
          [rtS, rtA, rtB, rtC].forEach((rt) => rt.dispose());
          blur.dispose();
          comp.dispose();
          teardownScene = null;
        };
      });
    }

    /* ── mq lifecycle: boot on mobile, teardown on desktop ────────── */
    const mq = window.matchMedia("(max-width: 767px)");
    if (mq.matches) bootScene();

    const onMqChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        bootScene();        // crossed back to mobile — (re)initialize
      } else {
        gen++;              // invalidate any in-flight import
        teardownScene?.();  // dispose current scene if running
      }
    };
    mq.addEventListener("change", onMqChange);

    return () => {
      effectAlive = false;
      mq.removeEventListener("change", onMqChange);
      gen++;             // invalidate any pending import promise
      teardownScene?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      style={{
        background:  "radial-gradient(140% 160% at 50% 26%, #100d0a, #050505 72%)",
        touchAction: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
      {/* Fade to black — blends cleanly into the content below */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         "auto 0 0 0",
          height:        "28%",
          pointerEvents: "none",
          background:    "linear-gradient(to bottom, transparent, #050505)",
        }}
      />
    </div>
  );
}
