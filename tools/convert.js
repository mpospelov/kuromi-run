/* Одноразовый конвертер: FBX + текстура → GLB (запускается headless-браузером) */
import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';

async function run() {
  const obj = await new FBXLoader().loadAsync(
    '/assets-src/source/model/tripo_convert_6b663eb7-7e8b-4593-badf-f457c3f63e21.fbx');

  /* статистика: плотность, скелет, анимации */
  let tris = 0; const meshes = []; let skinned = false;
  obj.traverse((o) => {
    if (o.isMesh) {
      meshes.push(o.name || '(без имени)');
      const g = o.geometry;
      tris += Math.round((g.index ? g.index.count : g.attributes.position.count) / 3);
      if (o.isSkinnedMesh) skinned = true;
    }
  });
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());

  /* текстура: переворачиваем пиксели сами (flipY=false — корректно для glTF) */
  const img = new Image();
  img.src = '/assets-src/textures/cutedemonplush3dmodel_basecolor.png';
  await img.decode();
  const cnv = document.createElement('canvas');
  cnv.width = img.width; cnv.height = img.height;
  const g2 = cnv.getContext('2d');
  g2.translate(0, img.height); g2.scale(1, -1);
  g2.drawImage(img, 0, 0);
  const tex = new THREE.CanvasTexture(cnv);
  tex.flipY = false;
  tex.colorSpace = THREE.SRGBColorSpace;

  obj.traverse((o) => { if (o.isMesh) o.material = new THREE.MeshStandardMaterial({ map: tex, roughness: 1, metalness: 0 }); });

  const glb = await new GLTFExporter().parseAsync(obj, { binary: true });
  const b64 = btoa(new Uint8Array(glb).reduce((s, b) => s + String.fromCharCode(b), ''));
  window.__result = {
    stats: {
      tris, meshes, skinned,
      animations: obj.animations ? obj.animations.length : 0,
      size: { x: +size.x.toFixed(2), y: +size.y.toFixed(2), z: +size.z.toFixed(2) },
      texture: img.width + 'x' + img.height
    },
    glb: b64
  };
}
run().catch((e) => { window.__result = { error: String(e) }; });
