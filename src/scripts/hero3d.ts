// A slowly turning network of nodes behind the hero: a system, drawn as a blueprint would.
// Loaded on demand by main.ts, only on large screens with a mouse and without reduced motion.
import {
  AdditiveBlending,
  BufferGeometry,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
} from 'three';

const NODES = 90;
const LINK_DISTANCE = 1.15;

export function mountHeroNetwork(host: HTMLElement, color: string): void {
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch {
    return; // No WebGL: the static grid stays, which is the designed fallback.
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const canvas = renderer.domElement;
  canvas.className = 'hero-3d';
  canvas.setAttribute('aria-hidden', 'true');
  host.prepend(canvas);

  const scene = new Scene();
  const camera = new PerspectiveCamera(45, 1, 0.1, 50);
  camera.position.z = 6;

  // Nodes spread inside a flattened sphere, then joined to their near neighbours.
  const positions: number[] = [];
  for (let i = 0; i < NODES; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.acos(2 * Math.random() - 1);
    const r = 1.4 + Math.random() * 1.1;
    positions.push(r * Math.sin(v) * Math.cos(u) * 1.25, r * Math.sin(v) * Math.sin(u) * 0.8, r * Math.cos(v));
  }
  const links: number[] = [];
  for (let a = 0; a < NODES; a++) {
    for (let b = a + 1; b < NODES; b++) {
      const dx = positions[a * 3]! - positions[b * 3]!;
      const dy = positions[a * 3 + 1]! - positions[b * 3 + 1]!;
      const dz = positions[a * 3 + 2]! - positions[b * 3 + 2]!;
      if (Math.hypot(dx, dy, dz) < LINK_DISTANCE) {
        links.push(...positions.slice(a * 3, a * 3 + 3), ...positions.slice(b * 3, b * 3 + 3));
      }
    }
  }

  const nodeGeometry = new BufferGeometry();
  nodeGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  const linkGeometry = new BufferGeometry();
  linkGeometry.setAttribute('position', new Float32BufferAttribute(links, 3));

  const network = new Group();
  network.add(
    new LineSegments(linkGeometry, new LineBasicMaterial({ color, transparent: true, opacity: 0.22, blending: AdditiveBlending })),
    new Points(nodeGeometry, new PointsMaterial({ color, size: 0.05, transparent: true, opacity: 0.9, blending: AdditiveBlending })),
  );
  network.position.x = 1.6; // Sit to the right, behind empty space, away from the headline.
  scene.add(network);

  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
  };
  resize();
  new ResizeObserver(resize).observe(host);

  // The mouse tilts the network a little; the rotation eases toward it.
  let targetX = 0, targetY = 0;
  host.addEventListener('pointermove', (e) => {
    const r = host.getBoundingClientRect();
    targetY = ((e.clientX - r.left) / r.width - 0.5) * 0.6;
    targetX = ((e.clientY - r.top) / r.height - 0.5) * 0.4;
  }, { passive: true });

  // Draw only while the hero is on screen and the tab is visible.
  let visible = true, frame = 0, spin = 0;
  const loop = () => {
    frame = 0;
    if (!visible || document.hidden) return;
    spin += 0.0012;
    network.rotation.y += (spin + targetY - network.rotation.y) * 0.04;
    network.rotation.x += (targetX - network.rotation.x) * 0.04;
    renderer.render(scene, camera);
    frame = requestAnimationFrame(loop);
  };
  const start = () => { if (!frame) frame = requestAnimationFrame(loop); };
  new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? false; if (visible) start(); }).observe(host);
  document.addEventListener('visibilitychange', start);

  start();
  requestAnimationFrame(() => canvas.classList.add('ready'));
}
