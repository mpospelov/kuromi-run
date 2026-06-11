/* Крупный план лица с сеткой 0.05 — ищем координаты глаз */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

THREE.ColorManagement.enabled = false;
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x58407e);
scene.add(new THREE.HemisphereLight(0xffffff, 0xccaadd, Math.PI));

const gltf = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync('/src/assets/kuromi.glb');
const model = gltf.scene;
const box = new THREE.Box3().setFromObject(model);
const size = box.getSize(new THREE.Vector3());
model.scale.setScalar(1.35 / size.y);
const box2 = new THREE.Box3().setFromObject(model);
model.position.set(
  -(box2.min.x + box2.max.x) / 2,
  -box2.min.y,
  -(box2.min.z + box2.max.z) / 2
);
scene.add(model);

/* сетка 0.05 в плоскости лица */
const X0 = -0.4, X1 = 0.4, Y0 = 0.3, Y1 = 1.1;
const lines = [];
for (let x = X0; x <= X1 + 1e-6; x += 0.05) lines.push(x, Y0, 0.5, x, Y1, 0.5);
for (let y = Y0; y <= Y1 + 1e-6; y += 0.05) lines.push(X0, y, 0.5, X1, y, 0.5);
const lg = new THREE.BufferGeometry();
lg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(lines), 3));
scene.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x66ff99, transparent: true, opacity: 0.65 })));

/* камера в (0,0,3) без lookAt — смотрит вдоль −z, рамки в мировых координатах */
const cam = new THREE.OrthographicCamera(X0, X1, Y1, Y0, 0.1, 10);
cam.position.set(0, 0, 3);
renderer.render(scene, cam);

/* глубина поверхности по лучу спереди в нескольких точках */
const ray = new THREE.Raycaster();
const probes = {};
for (const [nm, px, py] of [['center', 0, 0.8], ['l1', -0.1, 0.8], ['r1', 0.1, 0.8], ['l2', -0.15, 0.75], ['r2', 0.15, 0.75]]) {
  ray.set(new THREE.Vector3(px, py, 3), new THREE.Vector3(0, 0, -1));
  const hit = ray.intersectObject(model, true)[0];
  probes[nm] = hit ? +hit.point.z.toFixed(3) : null;
}
window.__probes = probes;
window.__done = true;
