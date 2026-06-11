/* Превью kuromi.glb: 4 ракурса в сетке 2×2 (front/back/left/right) */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

THREE.ColorManagement.enabled = false;

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.setSize(1200, 1200);
document.body.appendChild(renderer.domElement);
renderer.setScissorTest(true);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x58407e);
scene.add(new THREE.HemisphereLight(0xfff4f8, 0xffc0dc, Math.PI));
const sun = new THREE.DirectionalLight(0xffffff, 0.55 * Math.PI);
sun.position.set(3, 8, -4);
scene.add(sun);
const grid = new THREE.GridHelper(2, 20, 0xffffff, 0xbbaacc);
scene.add(grid);

const gltf = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync('/src/assets/kuromi.glb');
const model = gltf.scene;

/* нормализация: высота 1.35, низ на y=0 */
const box = new THREE.Box3().setFromObject(model);
const size = box.getSize(new THREE.Vector3());
const s = 1.35 / size.y;
model.scale.setScalar(s);
const box2 = new THREE.Box3().setFromObject(model);
model.position.y = -box2.min.y;
model.position.x = -(box2.min.x + box2.max.x) / 2;
model.position.z = -(box2.min.z + box2.max.z) / 2;
scene.add(model);
window.__norm = { scale: +s.toFixed(5), y: +model.position.y.toFixed(4), x: +model.position.x.toFixed(4), z: +model.position.z.toFixed(4) };

const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
const views = [
  { name: '-z (как камера игры)', pos: [0, 0.9, -2.6] },
  { name: '+z', pos: [0, 0.9, 2.6] },
  { name: '-x', pos: [-2.6, 0.9, 0] },
  { name: '+x', pos: [2.6, 0.9, 0] }
];
views.forEach((v, i) => {
  const x = (i % 2) * 600, y = (1 - Math.floor(i / 2)) * 600;
  renderer.setViewport(x, y, 600, 600);
  renderer.setScissor(x, y, 600, 600);
  cam.position.set(...v.pos);
  cam.lookAt(0, 0.65, 0);
  renderer.render(scene, cam);
});
window.__done = true;
