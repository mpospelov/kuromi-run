/* Kuromi Run — героиня: 3D-модель (kuromi.glb) + процедурные анимации.
   Модель статичная (без скелета), поэтому анимируем корпус целиком:
   покачивание бега, наклоны, сквош подката — и празднование на 100 конфет:
   разворот к камере с подмигиванием накладным «веком». */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

const MODEL_URL = new URL('./assets/kuromi.glb', import.meta.url).href;

/* координаты глаза, замеренные по модели (tools/face.js): лицо смотрит в +z */
const EYE = { x: 0.16, y: 0.69, z: 0.30 };
const CELEB_DUR = 2.0; // длительность празднования, сек

let proto = null;
export const kuromiReady = new GLTFLoader()
  .setMeshoptDecoder(MeshoptDecoder)
  .loadAsync(MODEL_URL)
  .then((gltf) => {
    const model = gltf.scene;
    /* нормализация: высота 1.35, ножки на y=0, центр по x/z */
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    model.scale.setScalar(1.35 / size.y);
    const b2 = new THREE.Box3().setFromObject(model);
    model.position.set(-(b2.min.x + b2.max.x) / 2, -b2.min.y, -(b2.min.z + b2.max.z) / 2);
    proto = model;
  });

export function createKuromi() {
  if (!proto) throw new Error('Модель Куроми ещё не загружена (await kuromiReady)');

  const root = new THREE.Group();   // позиция в мире (ставит игра)
  const rig = new THREE.Group();    // наклоны/сквош/развороты корпуса
  root.add(rig);
  rig.add(proto.clone(true));       // геометрия и материалы общие между забегами

  /* «веко» подмигивания: лепесток в цвет мордочки + дуга-ресничка ∪ */
  const wink = new THREE.Group();
  const lid = new THREE.Mesh(
    new THREE.SphereGeometry(0.085, 16, 12),
    new THREE.MeshLambertMaterial({ color: 0xf5edf2 })
  );
  lid.scale.set(1, 1, 0.3);
  wink.add(lid);
  const lash = new THREE.Mesh(
    new THREE.TorusGeometry(0.055, 0.013, 8, 24, Math.PI * 0.8),
    new THREE.MeshBasicMaterial({ color: 0x1c1722 })
  );
  lash.position.z = 0.022;
  lash.rotation.z = Math.PI + (Math.PI - Math.PI * 0.8) / 2; // дуга открыта вверх: ∪
  wink.add(lash);
  wink.position.set(EYE.x, EYE.y, EYE.z);
  wink.visible = false;
  rig.add(wink);

  /* мягкая «блинная» тень */
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, 24),
    new THREE.MeshBasicMaterial({ color: 0x4a2a52, transparent: true, opacity: 0.22, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  root.add(shadow);

  /* --- процедурная анимация --- */
  // state: { t, y, sliding (0..1), airborne, laneVel, runSpeed,
  //          stumble (0..1), squash (0..1), celebrate (сек с начала, иначе -1) }
  function update(state) {
    const t = state.t;
    const runPhase = t * (7 + state.runSpeed * 0.35);
    const slide = state.sliding;
    const air = state.airborne ? 1 : 0;
    const st = state.stumble || 0;
    const sq = state.squash || 0;

    /* подскок бега */
    rig.position.y = state.y + Math.max(0, Math.sin(runPhase * 2)) * 0.06 * (1 - air) * (1 - slide);

    /* наклоны: вперёд при подкате, назад в прыжке и при спотыкании,
       вбок при смене полосы, плюс лёгкое переваливание с ноги на ногу */
    rig.rotation.x = 0.1 + slide * 0.95 + air * -0.16 - st * 0.5;
    rig.rotation.z =
      THREE.MathUtils.clamp(-state.laneVel * 0.055, -0.35, 0.35) +
      Math.sin(runPhase) * 0.06 * (1 - air) * (1 - slide) +
      Math.sin(t * 26) * 0.2 * st; // дрожь от удара

    /* сквош: в подкате и коротко при приземлении */
    rig.scale.y = (1 - slide * 0.35) * (1 - sq * 0.16);
    rig.scale.x = (1 + slide * 0.12) * (1 + sq * 0.12);
    rig.scale.z = 1 + slide * 0.08;

    /* празднование: разворот к камере + подмигивание */
    const ph = state.celebrate == null ? -1 : state.celebrate;
    if (ph >= 0 && ph < CELEB_DUR) {
      const turn = Math.min(
        THREE.MathUtils.smoothstep(ph, 0, 0.45),
        1 - THREE.MathUtils.smoothstep(ph, 1.55, CELEB_DUR)
      );
      rig.rotation.y = Math.PI * turn;
      rig.rotation.z += 0.14 * turn;            // кокетливый наклон
      wink.visible = ph > 0.65 && ph < 1.45;
    } else {
      rig.rotation.y = 0;
      wink.visible = false;
    }

    /* тень: на земле плотнее, в прыжке шире и бледнее */
    const h = state.y;
    shadow.material.opacity = Math.max(0.06, 0.22 - h * 0.07);
    const sc = 1 + h * 0.25;
    shadow.scale.set(sc, sc, 1);
  }

  return { group: root, rig, update };
}
