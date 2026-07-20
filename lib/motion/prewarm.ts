/**
 * The hidden job — the intro doubles as the site's loading screen.
 *
 * While Beat 00's first two hits play, this preloads the hero-critical
 * assets and pre-warms the GPU so the hero lands fully ready and the first
 * scroll never stutters. Hit 3 is gated on `preloadHeroAssets()` (with a
 * hard timeout so a slow network can never trap the visitor in the dark).
 */

const HERO_IMAGES = [
  // LCP hero background (also <link rel=preload>'d in the layout head —
  // decode() here guarantees it is rasterized, not just fetched)
  "/attached_assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif",
];

function decodeImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img
      .decode()
      .then(() => resolve())
      .catch(() => resolve()); // a failed decode must never block the intro
  });
}

/**
 * Compile-and-draw one invisible WebGL frame so the browser's shader
 * pipeline is warm before any real WebGL work appears. First-scroll jank
 * is almost always shader compilation — this eliminates it. As Monolith /
 * shard shaders land in later tasks they get warmed here too.
 */
function warmWebGL(): Promise<void> {
  return new Promise((resolve) => {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const gl = (canvas.getContext("webgl2") ||
        canvas.getContext("webgl")) as WebGLRenderingContext | null;
      if (!gl) return resolve();

      const vs = gl.createShader(gl.VERTEX_SHADER)!;
      gl.shaderSource(
        vs,
        "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",
      );
      gl.compileShader(vs);
      const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
      gl.shaderSource(
        fs,
        "precision mediump float;void main(){gl_FragColor=vec4(0.);}",
      );
      gl.compileShader(fs);
      const prog = gl.createProgram()!;
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      gl.useProgram(prog);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 3, -1, -1, 3]),
        gl.STATIC_DRAW,
      );
      const loc = gl.getAttribLocation(prog, "p");
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.flush();

      // Free the context immediately — this was only a warm-up
      const lose = gl.getExtension("WEBGL_lose_context");
      lose?.loseContext();
      resolve();
    } catch {
      resolve();
    }
  });
}

let inFlight: Promise<void> | null = null;

/**
 * Kick off (or join) the hero preload. Resolves when fonts, hero images
 * and the GPU warm-up are all done — or after `timeoutMs`, whichever
 * comes first. Never rejects.
 */
export function preloadHeroAssets(timeoutMs = 4000): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (!inFlight) {
    inFlight = Promise.all([
      document.fonts.ready.then(
        () => undefined,
        () => undefined,
      ),
      ...HERO_IMAGES.map(decodeImage),
      warmWebGL(),
    ]).then(() => undefined);
  }
  return Promise.race([
    inFlight,
    new Promise<void>((r) => setTimeout(r, timeoutMs)),
  ]);
}
