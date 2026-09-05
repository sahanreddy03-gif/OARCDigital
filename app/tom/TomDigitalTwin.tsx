"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type TomDigitalTwinProps = {
  room: string;
  stations: string[];
  focus: string;
};

export default function TomDigitalTwin({ room, stations, focus }: TomDigitalTwinProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const probeCanvas = document.createElement("canvas");
    const probeContext =
      probeCanvas.getContext("webgl2", { failIfMajorPerformanceCaveat: true }) ??
      probeCanvas.getContext("webgl", { failIfMajorPerformanceCaveat: true });
    if (!probeContext) {
      mount.classList.add("tom-digital-twin--fallback");
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0b0c0d");

    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(5.2, 4.2, 6.6);
    camera.lookAt(0, 0.9, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      mount.classList.add("tom-digital-twin--fallback");
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);

    const digitalTwin = new THREE.Group();
    digitalTwin.rotation.y = -0.28;
    scene.add(digitalTwin);

    scene.add(new THREE.HemisphereLight("#f5f5f3", "#0b0c0d", 1.25));
    const roomLight = new THREE.PointLight("#8fd6ae", 2.1, 12);
    roomLight.position.set(-3, 4, 2);
    scene.add(roomLight);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(9, 7),
      new THREE.MeshStandardMaterial({ color: "#111516", roughness: 0.78, metalness: 0.18 }),
    );
    floor.rotation.x = -Math.PI / 2;
    digitalTwin.add(floor);

    const grid = new THREE.GridHelper(9, 18, "#8fd6ae", "#273332");
    grid.position.y = 0.015;
    (grid.material as THREE.Material).opacity = 0.34;
    (grid.material as THREE.Material).transparent = true;
    digitalTwin.add(grid);

    const wallMaterial = new THREE.MeshStandardMaterial({ color: "#161c1c", roughness: 0.92 });
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(9, 3.4, 0.12), wallMaterial);
    backWall.position.set(0, 1.7, -2.7);
    digitalTwin.add(backWall);
    const sideWall = new THREE.Mesh(new THREE.BoxGeometry(0.12, 3.4, 5.5), wallMaterial);
    sideWall.position.set(-4.4, 1.7, 0);
    digitalTwin.add(sideWall);

    const deskMaterial = new THREE.MeshStandardMaterial({ color: "#252d2b", roughness: 0.42, metalness: 0.35 });
    const desk = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.18, 1.3), deskMaterial);
    desk.position.set(0, 0.96, 0.15);
    digitalTwin.add(desk);
    for (const x of [-1.55, 1.55]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1, 0.12), deskMaterial);
      leg.position.set(x, 0.47, 0.15);
      digitalTwin.add(leg);
    }

    const screenMaterial = new THREE.MeshStandardMaterial({
      color: "#c9fff0",
      emissive: "#3e8f76",
      emissiveIntensity: 0.85,
      roughness: 0.3,
      metalness: 0.1,
    });
    const screen = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.86, 0.08), screenMaterial);
    screen.position.set(0, 1.58, -0.12);
    screen.rotation.x = -0.08;
    digitalTwin.add(screen);
    const screenFrame = new THREE.Mesh(
      new THREE.BoxGeometry(1.58, 1.02, 0.06),
      new THREE.MeshStandardMaterial({ color: "#070909", roughness: 0.3, metalness: 0.5 }),
    );
    screenFrame.position.set(0, 1.58, -0.18);
    screenFrame.rotation.x = -0.08;
    digitalTwin.add(screenFrame);

    const operatorPosition = new THREE.Vector3(0, 1.3, 0.92);
    const operator = new THREE.Mesh(
      new THREE.SphereGeometry(0.13, 24, 24),
      new THREE.MeshStandardMaterial({
        color: "#ff4a1a",
        emissive: "#ff4a1a",
        emissiveIntensity: 5,
        roughness: 0.15,
      }),
    );
    operator.position.copy(operatorPosition);
    digitalTwin.add(operator);
    const operatorLight = new THREE.PointLight("#ff4a1a", 4, 4);
    operatorLight.position.copy(operatorPosition);
    digitalTwin.add(operatorLight);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.34, 0.008, 8, 64),
      new THREE.MeshBasicMaterial({ color: "#ff4a1a", transparent: true, opacity: 0.85 }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.copy(operatorPosition);
    digitalTwin.add(ring);

    const stationPositions = [
      new THREE.Vector3(-2.65, 0.72, -1.25),
      new THREE.Vector3(2.5, 0.72, -1.25),
      new THREE.Vector3(-2.65, 0.72, 1.45),
      new THREE.Vector3(2.5, 0.72, 1.45),
    ];
    const agentMeshes: THREE.Mesh[] = [];
    const filaments: THREE.Line[] = [];
    stationPositions.forEach((position, index) => {
      const station = new THREE.Mesh(
        new THREE.BoxGeometry(1.05, 0.12, 0.75),
        new THREE.MeshStandardMaterial({ color: "#202a28", roughness: 0.45, metalness: 0.3 }),
      );
      station.position.copy(position);
      digitalTwin.add(station);

      const agent = new THREE.Mesh(
        new THREE.SphereGeometry(0.075, 16, 16),
        new THREE.MeshStandardMaterial({
          color: "#8fd6ae",
          emissive: "#8fd6ae",
          emissiveIntensity: 3.2,
          roughness: 0.2,
        }),
      );
      agent.position.set(position.x, position.y + 0.22, position.z);
      digitalTwin.add(agent);
      agentMeshes.push(agent);

      const filamentMaterial = new THREE.LineBasicMaterial({
        color: index % 2 === 0 ? "#ff4a1a" : "#8fd6ae",
        transparent: true,
        opacity: 0.8,
      });
      const filament = new THREE.Line(new THREE.BufferGeometry(), filamentMaterial);
      digitalTwin.add(filament);
      filaments.push(filament);
    });

    const resize = () => {
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const animate = (time: number) => {
      frame = requestAnimationFrame(animate);
      const seconds = time * 0.001;
      const pulse = reducedMotion ? 1 : 1 + Math.sin(seconds * 2.2) * 0.16;
      operator.scale.setScalar(pulse);
      operatorLight.intensity = 3.5 + Math.sin(seconds * 2.2) * 0.65;
      ring.scale.setScalar(1 + Math.sin(seconds * 1.6) * 0.14);
      if (!reducedMotion) digitalTwin.rotation.y = -0.28 + Math.sin(seconds * 0.18) * 0.07;

      agentMeshes.forEach((agent, index) => {
        const station = stationPositions[index];
        const lift = reducedMotion ? 0 : Math.sin(seconds * 1.8 + index) * 0.04;
        agent.position.y = station.y + 0.22 + lift;
        const points = [
          operatorPosition,
          new THREE.Vector3(
            (operatorPosition.x + agent.position.x) / 2,
            1.65 + Math.sin(seconds * 1.3 + index) * 0.12,
            (operatorPosition.z + agent.position.z) / 2,
          ),
          agent.position,
        ];
        const positionArray = new Float32Array(points.flatMap((point) => [point.x, point.y, point.z]));
        filaments[index].geometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3));
        filaments[index].geometry.computeBoundingSphere();
      });

      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="tom-digital-twin" ref={mountRef} aria-label={`3D operator room for ${room}`}>
      <div className="tom-digital-twin__hud">
        <span>LIVE DIGITAL TWIN</span>
        <b>{room}</b>
        <small>{focus}</small>
      </div>
      <div className="tom-digital-twin__stations" aria-hidden="true">
        {stations.slice(0, 4).map((station, index) => <span key={`${station}-${index}`}>{station}</span>)}
      </div>
    </div>
  );
}