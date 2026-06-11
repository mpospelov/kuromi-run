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

/* доступные праздничные движения (выбирает игра) */
export const CELEB_MOVES = ['wink', 'kiss', 'flip', 'karate', 'twirl', 'starjump', 'dance'];

/* --- геометрия реквизита --- */
function heartGeometry() {
  const x = 0, y = 0;
  const s = new THREE.Shape();
  s.moveTo(x + 5, y + 5);
  s.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
  s.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
  s.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
  s.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
  s.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
  s.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
  const g = new THREE.ExtrudeGeometry(s, { depth: 4, bevelEnabled: false });
  g.center();
  g.rotateZ(Math.PI); // остриём вниз
  g.scale(0.016, 0.016, 0.016);
  return g;
}
function starGeometry(R, r, depth) {
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const ang = i * Math.PI / 5 - Math.PI / 2;
    const rad = i % 2 === 0 ? R : r;
    if (i === 0) s.moveTo(Math.cos(ang) * rad, Math.sin(ang) * rad);
    else s.lineTo(Math.cos(ang) * rad, Math.sin(ang) * rad);
  }
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: depth, bevelEnabled: false });
  g.translate(0, 0, -depth / 2);
  return g;
}
function noteTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  g.font = '900 52px "Segoe UI", sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = '#6e3da0';
  g.fillText('♪', 32, 34);
  return new THREE.CanvasTexture(c);
}

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

  /* --- остальной реквизит праздников (скрыт по умолчанию) --- */
  // сердечко поцелуя — на rig, чтобы летело из мордочки куда бы она ни смотрела
  const heart = new THREE.Mesh(
    heartGeometry(),
    new THREE.MeshBasicMaterial({ color: 0xff6fb3, transparent: true })
  );
  heart.visible = false;
  rig.add(heart);
  // вспышки каратэ — дуги по бокам; на root, чтобы всегда смотрели на камеру
  const slashes = [-1, 1].map(() => {
    const m = new THREE.Mesh(
      new THREE.TorusGeometry(0.5, 0.045, 6, 16, Math.PI * 0.55),
      new THREE.MeshBasicMaterial({ color: 0xffd966, transparent: true })
    );
    m.visible = false;
    root.add(m);
    return m;
  });
  // звёздочки — на root, чтобы кружились независимо от вращений тела
  const starGeo = starGeometry(0.09, 0.045, 0.03);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const st = new THREE.Mesh(starGeo, new THREE.MeshBasicMaterial({ color: 0xffd966, transparent: true }));
    st.visible = false;
    root.add(st);
    stars.push(st);
  }
  // нотки танца
  const notes = [-1, 1].map(() => {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: noteTexture(), transparent: true }));
    sp.scale.set(0.34, 0.34, 1);
    sp.visible = false;
    root.add(sp);
    return sp;
  });
  function hideProps() {
    wink.visible = heart.visible = false;
    slashes.forEach((s) => { s.visible = false; });
    stars.forEach((s) => { s.visible = false; });
    notes.forEach((n) => { n.visible = false; });
  }

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

    /* празднование: одно из CELEB_MOVES, фаза ph ∈ [0, CELEB_DUR) */
    const ph = state.celebrate == null ? -1 : state.celebrate;
    hideProps();
    let yaw = 0;
    if (ph >= 0 && ph < CELEB_DUR) {
      /* разворот к камере: туда в первые 0.45 с, обратно в последние 0.45 с */
      const turn = Math.min(
        THREE.MathUtils.smoothstep(ph, 0, 0.45),
        1 - THREE.MathUtils.smoothstep(ph, 1.55, CELEB_DUR)
      );
      const pulse = (c, w) => Math.max(0, 1 - Math.abs(ph - c) / w);

      switch (state.celebrateMove || 'wink') {
        case 'wink': /* разворот + подмигивание */
          yaw = Math.PI * turn;
          rig.rotation.z += 0.14 * turn;
          wink.visible = ph > 0.65 && ph < 1.45;
          break;

        case 'kiss': { /* воздушный поцелуй: подмигивает и пускает сердечко */
          yaw = Math.PI * turn;
          rig.rotation.z += 0.1 * turn;
          wink.visible = ph > 0.55 && ph < 1.5;
          const k = (ph - 0.7) / 0.8;
          if (k > 0 && k < 1) {
            heart.visible = true;
            heart.position.set(0, 0.55 + k * 0.35, 0.3 + k * 1.1);
            const hs = 0.5 + k * 1.1;
            heart.scale.set(hs, hs, hs);
            heart.rotation.y = Math.sin(t * 4) * 0.25;
            heart.material.opacity = k < 0.7 ? 1 : 1 - (k - 0.7) / 0.3;
          }
          break;
        }

        case 'flip': { /* сальто вперёд с подскоком, не оборачиваясь */
          rig.rotation.x += Math.PI * 2 * THREE.MathUtils.smoothstep(ph, 0.25, 1.05);
          const hop = Math.sin(Math.PI * THREE.MathUtils.clamp((ph - 0.2) / 0.95, 0, 1));
          rig.position.y += hop * 0.85;
          break;
        }

        case 'karate': { /* три резких удара со вспышками */
          yaw = Math.PI * 0.75 * turn;
          [0.75, 1.05, 1.35].forEach((c, i) => {
            const p = pulse(c, 0.14);
            if (p > 0) {
              rig.rotation.z += (i % 2 ? -0.45 : 0.45) * p;
              rig.position.y += p * 0.08;
              const sl = slashes[i % 2];
              sl.visible = true;
              sl.position.set(i % 2 ? -0.6 : 0.6, 0.85, -0.3); // чуть к камере
              sl.rotation.set(0, 0, i % 2 ? 2.4 : -0.8);
              sl.material.opacity = p;
              const ss = 0.7 + (1 - p) * 0.5;
              sl.scale.set(ss, ss, ss);
            }
          });
          break;
        }

        case 'twirl': { /* пируэт: два оборота со звёздочками вокруг */
          yaw = Math.PI * 4 * THREE.MathUtils.smoothstep(ph, 0.15, 1.55); // 4π ≡ 0 — без скачка в конце
          rig.position.y += Math.sin(Math.PI * THREE.MathUtils.clamp((ph - 0.1) / 1.5, 0, 1)) * 0.25;
          if (ph > 0.25 && ph < 1.7) {
            for (let i = 0; i < 3; i++) {
              const st2 = stars[i], a = t * 7 + i * Math.PI * 2 / 3;
              st2.visible = true;
              st2.position.set(Math.cos(a) * 0.6, 0.7 + Math.sin(t * 5 + i) * 0.15, Math.sin(a) * 0.6);
              st2.rotation.set(0, a, 0);
              st2.scale.setScalar(1);
              st2.material.opacity = Math.min(1, (1.7 - ph) * 2);
            }
          }
          break;
        }

        case 'starjump': { /* прыжок звёздочкой: присед, взлёт и залп звёзд */
          const crouch = pulse(0.35, 0.2);
          rig.scale.y *= 1 - crouch * 0.18;
          rig.scale.x *= 1 + crouch * 0.12;
          const jump = Math.sin(Math.PI * THREE.MathUtils.clamp((ph - 0.45) / 0.9, 0, 1));
          rig.position.y += jump * 1.1;
          rig.rotation.z += Math.sin(ph * 20) * 0.05 * jump;
          if (ph > 0.8 && ph < 1.7) {
            const k = (ph - 0.8) / 0.9;
            stars.forEach((st2, i) => {
              const a = i * Math.PI * 2 / 5 + 0.6, r = 0.3 + k * 1.2;
              st2.visible = true;
              st2.position.set(Math.cos(a) * r, 0.9 + jump + Math.sin(a) * r * 0.6 - k * 0.3, -0.35);
              st2.rotation.set(0, 0, k * 6 + i);
              st2.scale.setScalar(0.8 + k * 0.7);
              st2.material.opacity = 1 - k;
            });
          }
          break;
        }

        case 'dance': { /* танец: подпрыгивает и виляет под нотки */
          yaw = Math.PI * turn + Math.sin(ph * 9) * 0.3 * turn;
          rig.position.y += Math.abs(Math.sin(ph * Math.PI * 4)) * 0.16 * turn;
          rig.rotation.z += Math.sin(ph * Math.PI * 4) * 0.17 * turn;
          if (ph > 0.3 && ph < 1.8) {
            notes.forEach((n, i) => {
              const k = (ph * 0.9 + i * 0.5) % 1;
              n.visible = true;
              n.position.set(i ? 0.7 : -0.7, 0.7 + k * 0.8, 0.1);
              n.material.opacity = 1 - k;
            });
          }
          break;
        }
      }
    }
    rig.rotation.y = yaw;

    /* тень: на земле плотнее, в прыжке шире и бледнее */
    const h = state.y;
    shadow.material.opacity = Math.max(0.06, 0.22 - h * 0.07);
    const sc = 1 + h * 0.25;
    shadow.scale.set(sc, sc, 1);
  }

  return { group: root, rig, update };
}
