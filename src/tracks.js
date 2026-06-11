/* Kuromi Run — трассы: темы, декор (InstancedMesh), паттерны предметов, препятствия */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const TrackKit = (function () {
  /* камера смотрит вдоль +z, поэтому экранное «вправо» — это мировой −x:
     полоса 0 (влево) = +x, полоса 2 (вправо) = −x */
  const LANE_X = [2.2, 0, -2.2];
  const ROAD_W = 7.4;

  /* прототип делался под легаси-освещение (three r128) — компенсируем физичные единицы света */
  const LIGHT_SCALE = Math.PI;

  /* ===== канвас-текстуры (всё рисуем кодом) ===== */
  function canvasTex(w, h, draw) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    draw(c.getContext('2d'), w, h);
    const t = new THREE.CanvasTexture(c);
    t.anisotropy = 2;
    return t;
  }
  function skyTexture(stops) {
    return canvasTex(2, 256, (g) => {
      const gr = g.createLinearGradient(0, 0, 0, 256);
      stops.forEach((s, i) => gr.addColorStop(i / (stops.length - 1), s));
      g.fillStyle = gr; g.fillRect(0, 0, 2, 256);
    });
  }
  function stripesTex(a, b) {
    const t = canvasTex(64, 64, (g) => {
      g.fillStyle = a; g.fillRect(0, 0, 64, 64);
      g.fillStyle = b;
      for (let i = -2; i < 6; i++) {
        g.save(); g.translate(i * 16, 0); g.rotate(0.6);
        g.fillRect(0, -20, 8, 110); g.restore();
      }
    });
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    return t;
  }
  function windowsTex() {
    return canvasTex(64, 128, (g) => {
      g.fillStyle = '#000'; g.fillRect(0, 0, 64, 128);
      for (let y = 8; y < 120; y += 14) {
        for (let x = 6; x < 60; x += 12) {
          if (Math.random() < 0.55) {
            g.fillStyle = Math.random() < 0.7 ? '#ffd9a0' : '#ffaed0';
            g.fillRect(x, y, 6, 8);
          }
        }
      }
    });
  }
  function bannerTex(text, bg, fg) {
    return canvasTex(512, 128, (g) => {
      g.fillStyle = bg;
      g.beginPath(); g.roundRect(4, 4, 504, 120, 28); g.fill();
      g.fillStyle = fg;
      g.font = '700 74px ui-rounded, "Comic Sans MS", "Segoe UI", sans-serif';
      g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(text, 256, 70);
    });
  }
  function arrowSignTex(fg) {
    return canvasTex(64, 64, (g) => {
      g.fillStyle = '#fffaf2';
      g.beginPath(); g.arc(32, 32, 30, 0, 7); g.fill();
      g.strokeStyle = fg; g.lineWidth = 9; g.lineCap = 'round'; g.lineJoin = 'round';
      g.beginPath(); g.moveTo(32, 14); g.lineTo(32, 46); g.moveTo(18, 34); g.lineTo(32, 48); g.lineTo(46, 34); g.stroke();
    });
  }
  function moonTex() {
    return canvasTex(128, 128, (g) => {
      g.fillStyle = '#fff3c4';
      g.beginPath(); g.arc(64, 64, 52, 0, 7); g.fill();
      g.globalCompositeOperation = 'destination-out';
      g.beginPath(); g.arc(88, 48, 46, 0, 7); g.fill();
    });
  }

  /* ===== помощник: InstancedMesh из списка трансформаций ===== */
  const dummy = new THREE.Object3D();
  function inst(scene, geom, mat, list) {
    const im = new THREE.InstancedMesh(geom, mat, list.length);
    list.forEach((it, i) => {
      dummy.position.set(it.p[0], it.p[1], it.p[2]);
      const r = it.r || [0, 0, 0];
      dummy.rotation.set(r[0], r[1], r[2]);
      const s = it.s == null ? 1 : it.s;
      if (Array.isArray(s)) dummy.scale.set(s[0], s[1], s[2]); else dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      im.setMatrixAt(i, dummy.matrix);
      if (it.c) im.setColorAt(i, new THREE.Color(it.c));
    });
    im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
    im.frustumCulled = false;
    scene.add(im);
    return im;
  }
  function lam(color, extra) { return new THREE.MeshLambertMaterial(Object.assign({ color: color }, extra || {})); }
  function freeze(obj) {
    obj.traverse((o) => { o.updateMatrix(); o.matrixAutoUpdate = false; });
  }
  function starGeom(R, r, depth) {
    const sh = new THREE.Shape();
    for (let i = 0; i < 10; i++) {
      const ang = i * Math.PI / 5 - Math.PI / 2;
      const rad = i % 2 === 0 ? R : r;
      const x = Math.cos(ang) * rad, y = Math.sin(ang) * rad;
      if (i === 0) sh.moveTo(x, y); else sh.lineTo(x, y);
    }
    sh.closePath();
    const g = new THREE.ExtrudeGeometry(sh, { depth: depth, bevelEnabled: false });
    g.translate(0, 0, -depth / 2);
    return g;
  }

  /* ===== определения трасс ===== */
  const DEFS = [
    { key: 'candy', name: 'Конфетная долина', sub: 'медленная · 1 минута', diff: 0,
      length: 740, baseSpeed: 11.5, maxSpeed: 14.5, music: 'candy',
      grad: 'linear-gradient(160deg,#ffd9ec,#ffeef7 55%,#fff3df)' },
    { key: 'city', name: 'Ночной город Куроми', sub: 'средняя · 1,5 минуты', diff: 1,
      length: 1380, baseSpeed: 13.5, maxSpeed: 17, music: 'city',
      grad: 'linear-gradient(160deg,#43306b,#7a4f9e 60%,#b86fae)' },
    { key: 'stars', name: 'Звёздное небо', sub: 'быстрая · 2 минуты', diff: 2,
      length: 2120, baseSpeed: 15.5, maxSpeed: 19.5, music: 'stars',
      grad: 'linear-gradient(160deg,#241a4d,#4a3585 60%,#8a63c2)' }
  ];

  /* ===== паттерны предметов (всегда честные: есть свободный путь) ===== */
  function rnd(n) { return Math.floor(Math.random() * n); }
  function others(lane) { return [0, 1, 2].filter((l) => l !== lane); }
  function line(items, lane, z0, n, dz, y) {
    for (let i = 0; i < n; i++) items.push({ z: z0 + i * dz, lane: lane, y: y || 0.55, kind: 'candy' });
  }
  function arc(items, lane, zc, withSkull) {
    const ys = [0.55, 1.1, 1.5, 1.65, 1.5, 1.1, 0.55];
    ys.forEach((y, i) => {
      const at = i === 3 && withSkull;
      items.push({ z: zc - 6 + i * 2, lane: lane, y: at ? 1.7 : y, kind: at ? 'skull' : 'candy' });
    });
  }

  const PATTERNS = [
    function pCoinLine() { const it = [], l = rnd(3); line(it, l, 2, 7, 3); return { len: 24, items: it }; },
    function pZig() {
      const it = [], a = rnd(3), b = others(a)[rnd(2)];
      line(it, a, 2, 3, 2.6); line(it, b, 12, 3, 2.6); line(it, a, 22, 3, 2.6);
      return { len: 32, items: it };
    },
    function pJumpGate() {
      const it = [], l = rnd(3), free = others(l)[rnd(2)];
      it.push({ z: 9, lane: l, kind: 'low' });
      arc(it, l, 9, false);
      line(it, free, 3, 5, 3);
      return { len: 20, items: it };
    },
    function pSkullArc() {
      const it = [], l = rnd(3);
      arc(it, l, 8, true);
      return { len: 18, items: it };
    },
    function pSlideGate() {
      const it = [];
      it.push({ z: 9, lane: -1, kind: 'bar' });
      [0, 1, 2].forEach((l) => line(it, l, 5, 4, 2.6, 0.45));
      return { len: 20, items: it };
    },
    function pBlockSplit() {
      const it = [], free = rnd(3), blocked = others(free);
      blocked.forEach((l) => it.push({ z: 9, lane: l, kind: 'block' }));
      line(it, free, 2, 6, 2.8);
      it.push({ z: 20, lane: free, y: 0.7, kind: 'skull' });
      return { len: 26, items: it };
    },
    function pDoubleStep() {
      const it = [], a = rnd(3), b = others(a)[rnd(2)];
      it.push({ z: 7, lane: a, kind: 'low' });
      it.push({ z: 17, lane: b, kind: 'low' });
      arc(it, a, 7, false); arc(it, b, 17, false);
      return { len: 26, items: it };
    },
    function pSlalom() {
      const it = [], a = rnd(3), b = others(a)[rnd(2)];
      it.push({ z: 7, lane: a, kind: 'block' });
      it.push({ z: 19, lane: b, kind: 'block' });
      const safe1 = others(a)[0] === b ? others(a)[1] : others(a)[0];
      line(it, safe1, 3, 4, 2.6);
      line(it, others(b)[rnd(2)], 15, 4, 2.6);
      return { len: 28, items: it };
    }
  ];
  // индексы паттернов по сложности (мягкая прогрессия)
  const WEIGHTS = [
    [0, 0, 1, 2, 2, 3, 4, 5, 6],          // конфетная: больше монет и прыжков
    [0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7],    // город
    [0, 1, 2, 3, 4, 4, 5, 5, 6, 7, 7]     // звёзды
  ];

  function generateItems(def) {
    const items = [];
    const gap = [11, 9, 8][def.diff];
    let z = 50;
    const w = WEIGHTS[def.diff];
    while (z < def.length - 70) {
      const pat = PATTERNS[w[rnd(w.length)]]();
      pat.items.forEach((it) => items.push(Object.assign({}, it, { z: it.z + z })));
      z += pat.len + gap;
    }
    // финальная дорожка конфет к арке
    line(items, 1, def.length - 55, 8, 3);
    items.sort((a, b) => a.z - b.z);
    return items;
  }

  /* ===== темы: окружение и фабрики препятствий ===== */
  const THEMES = {
    candy: {
      sky: ['#ffc9e4', '#ffe1f0', '#fff4e2'],
      fog: [0xffd2e6, 30, 110],
      road: 0xfff3e2, dash: 0xffd1e6, shoulder: 0xffb7da, ground: 0xffe0ef,
      hemi: [0xfff4f8, 0xffc0dc, 1.0], sun: 0.55,
      candyColor: 0xff8fc7, arch: [0xff8fc7, 0xfff3e2],
      buildDecor(scene, L) {
        const pastels = [0xff9fce, 0xb98ae0, 0xfff0b8, 0x9fe8d8, 0xffc2a8];
        const sticks = [], heads = [], fence = [], icing = [], hills = [];
        for (let z = 10; z < L + 40; z += 9) {
          [-1, 1].forEach((s) => {
            const x = s * (5.2 + (z * 7 % 30) / 10);
            const h = 1.6 + (z * 13 % 20) / 10;
            sticks.push({ p: [x, h / 2, z + s * 2], s: [1, h, 1] });
            heads.push({ p: [x, h + 0.45, z + s * 2], r: [0, 0, 0], s: 1 + (z % 3) * 0.18, c: pastels[(z / 9 | 0) % pastels.length] });
          });
        }
        for (let z = 6; z < L + 40; z += 2.1) {
          [-1, 1].forEach((s) => {
            fence.push({ p: [s * 4.4, 0.34, z], c: 0xc98a5a });
            icing.push({ p: [s * 4.4, 0.74, z] });
          });
        }
        for (let z = 30; z < L + 60; z += 55) {
          [-1, 1].forEach((s) => {
            hills.push({ p: [s * (16 + z % 12), -2, z], s: [9 + z % 6, 7, 9], c: pastels[(z / 55 | 0 + (s + 1)) % pastels.length] });
          });
        }
        inst(scene, new THREE.CylinderGeometry(0.07, 0.07, 1, 6), lam(0xfffaf2), sticks);
        const headG = new THREE.SphereGeometry(0.45, 14, 12); headG.scale(1, 1, 0.35);
        inst(scene, headG, lam(0xffffff), heads);
        inst(scene, new THREE.BoxGeometry(0.5, 0.7, 0.16), lam(0xffffff), fence);
        inst(scene, new THREE.SphereGeometry(0.13, 8, 6), lam(0xfffaf2), icing);
        inst(scene, new THREE.SphereGeometry(1, 14, 12), lam(0xffffff), hills);
        return null;
      },
      low() {
        const g = new THREE.Group();
        const plank = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.5, 0.24), lam(0xc98a5a));
        plank.position.y = 0.42; g.add(plank);
        const ice = new THREE.Mesh(new THREE.BoxGeometry(1.66, 0.12, 0.3), lam(0xfffaf2));
        ice.position.y = 0.7; g.add(ice);
        for (let i = -1; i <= 1; i++) {
          const dot = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), lam(0xff8fc7));
          dot.position.set(i * 0.5, 0.46, -0.14); g.add(dot);
        }
        return g;
      },
      bar(tex) {
        const g = new THREE.Group();
        const stripes = stripesTex('#fffaf2', '#ff7eb6');
        [-1, 1].forEach((s) => {
          const post = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.1, 10), new THREE.MeshLambertMaterial({ map: stripes }));
          post.position.set(s * 3.5, 1.05, 0); g.add(post);
          const ball = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), lam(0xff8fc7));
          ball.position.set(s * 3.5, 2.2, 0); g.add(ball);
        });
        const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 7.2, 10), new THREE.MeshLambertMaterial({ map: stripes }));
        beam.rotation.z = Math.PI / 2; beam.position.y = 1.45; g.add(beam);
        const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.7), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
        sign.position.set(0, 1.95, -0.05); sign.rotation.y = Math.PI; g.add(sign);
        return g;
      },
      block() {
        const g = new THREE.Group();
        const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.05, 0.9), lam(0xff9fce));
        box.position.y = 0.55; g.add(box);
        const rib1 = new THREE.Mesh(new THREE.BoxGeometry(1.54, 1.08, 0.24), lam(0xfff3df));
        rib1.position.y = 0.55; g.add(rib1);
        const rib2 = new THREE.Mesh(new THREE.BoxGeometry(0.24, 1.08, 0.94), lam(0xfff3df));
        rib2.position.y = 0.55; g.add(rib2);
        const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.1, 6), lam(0xfffaf2));
        stick.position.y = 1.5; g.add(stick);
        const popG = new THREE.SphereGeometry(0.55, 14, 12); popG.scale(1, 1, 0.35);
        const pop = new THREE.Mesh(popG, lam(0xb98ae0));
        pop.position.y = 2.15; g.add(pop);
        return g;
      }
    },

    city: {
      sky: ['#2e2052', '#5d3f8c', '#b86fae'],
      fog: [0x553f80, 24, 95],
      road: 0x4a3a68, dash: 0x8a6fb4, shoulder: 0x3a2d56, ground: 0x352a52,
      hemi: [0xcdb5ec, 0x2e2052, 0.85], sun: 0.35,
      candyColor: 0xff8fc7, arch: [0x9b59d0, 0xffd9a0],
      buildDecor(scene, L) {
        const tints = [0x37294f, 0x453361, 0x2c2244, 0x513e72];
        const builds = [], posts = [], lamps = [];
        for (let z = 0; z < L + 60; z += 10) {
          [-1, 1].forEach((s) => {
            const w = 4 + (z * 7 % 40) / 10, h = 7 + (z * 13 % 90) / 10, d = 5;
            builds.push({ p: [s * (8.5 + (z * 3 % 50) / 10), h / 2 - 0.1, z + s * 3], s: [w, h, d], c: tints[(z / 10 | 0) % tints.length] });
            if ((z / 10 | 0) % 3 === 0) {
              builds.push({ p: [s * (15 + (z * 9 % 60) / 10), h / 2 + 2, z], s: [w * 1.2, h + 4, d], c: tints[(z / 10 | 0 + 2) % tints.length] });
            }
          });
        }
        for (let z = 8; z < L + 40; z += 14) {
          [-1, 1].forEach((s) => {
            posts.push({ p: [s * 4.3, 1.25, z], c: 0x241a38 });
            lamps.push({ p: [s * 4.3, 2.55, z] });
          });
        }
        const bMat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0xffc78a, emissiveMap: windowsTex(), emissiveIntensity: 0.9 });
        inst(scene, new THREE.BoxGeometry(1, 1, 1), bMat, builds);
        inst(scene, new THREE.CylinderGeometry(0.06, 0.09, 2.5, 6), lam(0xffffff), posts);
        inst(scene, new THREE.SphereGeometry(0.16, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffe2b0 }), lamps);
        return null;
      },
      low() {
        const g = new THREE.Group();
        [-1, 1].forEach((s) => {
          const leg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.6, 0.12), lam(0x241a38));
          leg.position.set(s * 0.7, 0.3, 0); g.add(leg);
        });
        const plank = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.34, 0.16), new THREE.MeshLambertMaterial({ map: stripesTex('#ffce6b', '#6a4d96') }));
        plank.position.y = 0.58; g.add(plank);
        return g;
      },
      bar(tex) {
        const g = new THREE.Group();
        [-1, 1].forEach((s) => {
          const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.13, 2.2, 8), lam(0x241a38));
          post.position.set(s * 3.5, 1.1, 0); g.add(post);
        });
        const plank = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.5, 0.14), lam(0x6a4d96));
        plank.position.y = 1.55; g.add(plank);
        for (let i = -3; i <= 3; i++) {
          const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: i % 2 ? 0xffe2b0 : 0xff9fce }));
          bulb.position.set(i * 1.0, 1.24, 0); g.add(bulb);
        }
        const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.66), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
        sign.position.set(0, 1.56, -0.09); sign.rotation.y = Math.PI; g.add(sign);
        return g;
      },
      block() {
        const g = new THREE.Group();
        const a = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.2, 0.9), lam(0x513e72));
        a.position.y = 0.6; g.add(a);
        const b = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.9, 0.8), lam(0x6a4d96));
        b.position.y = 1.65; g.add(b);
        const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffe2b0 }));
        lamp.position.y = 2.25; g.add(lamp);
        return g;
      }
    },

    stars: {
      sky: ['#191040', '#352368', '#7a55b0'],
      fog: [0x453080, 35, 150],
      road: 0xcabcf0, dash: 0xf0e8ff, shoulder: 0xb3a3e6, ground: null,
      hemi: [0xd8c8ff, 0x241a4d, 0.95], sun: 0.4,
      candyColor: 0xffb3d6, arch: [0xffd966, 0xcabcf0],
      buildDecor(scene, L) {
        const puffs = [];
        for (let z = 0; z < L + 50; z += 5.5) {
          [-1, 1].forEach((s) => {
            const k = (z * 7 % 10) / 10;
            puffs.push({ p: [s * (4.2 + k * 1.4), -0.45 - k * 0.4, z + s * 1.5], s: [1.3 + k, 0.8, 1.6] });
            if ((z / 5.5 | 0) % 4 === 0) puffs.push({ p: [s * (9 + k * 6), -2 - k * 2, z], s: [2.6, 1.4, 3] });
          });
        }
        inst(scene, new THREE.SphereGeometry(1, 12, 10), lam(0xf4eeff, { emissive: 0x4a3585, emissiveIntensity: 0.25 }), puffs);

        /* небо: звёзды и месяц следуют за камерой */
        const skyGroup = new THREE.Group();
        const starsN = 700, pos = new Float32Array(starsN * 3);
        for (let i = 0; i < starsN; i++) {
          pos[i * 3] = (Math.random() - 0.5) * 320;
          pos[i * 3 + 1] = 4 + Math.random() * 110;
          pos[i * 3 + 2] = 40 + Math.random() * 260;
        }
        const sg = new THREE.BufferGeometry();
        sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        const pts = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xfff6e0, size: 1.1, sizeAttenuation: true, fog: false }));
        skyGroup.add(pts);
        const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: moonTex(), fog: false, transparent: true }));
        moon.scale.set(26, 26, 1);
        moon.position.set(-55, 62, 200);
        skyGroup.add(moon);
        scene.add(skyGroup);
        return skyGroup;
      },
      low() {
        const g = new THREE.Group();
        [[-0.5, 0.3, 0.34], [0.05, 0.42, 0.42], [0.55, 0.3, 0.32]].forEach((c) => {
          const p = new THREE.Mesh(new THREE.SphereGeometry(c[2], 12, 10), lam(0xf4eeff, { emissive: 0x6a4d96, emissiveIntensity: 0.3 }));
          p.position.set(c[0], c[1], 0); g.add(p);
        });
        return g;
      },
      bar(tex) {
        const g = new THREE.Group();
        [-1, 1].forEach((s) => {
          const post = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 2.2, 8), lam(0xcabcf0));
          post.position.set(s * 3.5, 1.1, 0); g.add(post);
          const st = new THREE.Mesh(starGeom(0.26, 0.12, 0.1), new THREE.MeshBasicMaterial({ color: 0xffd966 }));
          st.position.set(s * 3.5, 2.4, 0); g.add(st);
        });
        const beam = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.3, 0.14), new THREE.MeshLambertMaterial({ color: 0xb39ddb, emissive: 0x7a55b0, emissiveIntensity: 0.7 }));
        beam.position.y = 1.5; g.add(beam);
        const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.66), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
        sign.position.set(0, 1.51, -0.09); sign.rotation.y = Math.PI; g.add(sign);
        return g;
      },
      block() {
        const g = new THREE.Group();
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.6, 1.5, 12), lam(0xcabcf0));
        pillar.position.y = 0.75; g.add(pillar);
        const st = new THREE.Mesh(starGeom(0.62, 0.3, 0.22), new THREE.MeshLambertMaterial({ color: 0xffd966, emissive: 0xcc9b22, emissiveIntensity: 0.6 }));
        st.position.y = 2.0; g.add(st);
        return g;
      }
    }
  };

  /* коллайдеры по типу препятствия */
  const COLLIDERS = {
    low:   { w: 1.7, yBot: 0.0, yTop: 0.74 },
    bar:   { w: ROAD_W, yBot: 1.0, yTop: 2.2 },
    block: { w: 1.6, yBot: 0.0, yTop: 2.3 }
  };

  /* ===== сборка трассы в сцену ===== */
  function buildTrack(scene, key) {
    const def = DEFS.find((d) => d.key === key);
    const theme = THEMES[key];
    const L = def.length;

    scene.background = skyTexture(theme.sky);
    scene.fog = new THREE.Fog(theme.fog[0], theme.fog[1], theme.fog[2]);

    const hemi = new THREE.HemisphereLight(theme.hemi[0], theme.hemi[1], theme.hemi[2] * LIGHT_SCALE);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffffff, theme.sun * LIGHT_SCALE);
    sun.position.set(3, 8, -4);
    scene.add(sun);

    /* дорога */
    const road = new THREE.Mesh(new THREE.BoxGeometry(ROAD_W, 0.5, L + 90), lam(theme.road));
    road.position.set(0, -0.25, L / 2);
    scene.add(road);
    [-1, 1].forEach((s) => {
      const sh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.56, L + 90), lam(theme.shoulder));
      sh.position.set(s * (ROAD_W / 2 + 0.2), -0.24, L / 2);
      scene.add(sh);
    });
    if (theme.ground != null) {
      const ground = new THREE.Mesh(new THREE.PlaneGeometry(300, L + 200), lam(theme.ground));
      ground.rotation.x = -Math.PI / 2;
      ground.position.set(0, -0.5, L / 2);
      scene.add(ground);
    }
    /* пунктир между полосами */
    const dashes = [];
    for (let z = 0; z < L + 60; z += 4.5) {
      [-1.1, 1.1].forEach((x) => dashes.push({ p: [x, 0.01, z] }));
    }
    inst(scene, new THREE.BoxGeometry(0.09, 0.02, 1.4), new THREE.MeshBasicMaterial({ color: theme.dash }), dashes);

    const skyGroup = theme.buildDecor(scene, L);

    /* финишная арка */
    const arch = new THREE.Group();
    const aMat = lam(theme.arch[0]);
    [-1, 1].forEach((s) => {
      const pil = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 3.4, 12), aMat);
      pil.position.set(s * 3.4, 1.7, 0); arch.add(pil);
    });
    const top = new THREE.Mesh(new THREE.TorusGeometry(3.4, 0.2, 10, 28, Math.PI), aMat);
    top.position.y = 3.4; arch.add(top);
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 1.1), new THREE.MeshBasicMaterial({ map: bannerTex('ФИНИШ', '#fffaf2', '#9b59d0'), transparent: true }));
    banner.position.set(0, 2.55, -0.05); banner.rotation.y = Math.PI; arch.add(banner);
    arch.position.z = L;
    scene.add(arch);
    freeze(arch);

    /* предметы и препятствия */
    const items = generateItems(def);
    const arrowTexC = arrowSignTex(key === 'candy' ? '#ff5fa8' : '#9b59d0');

    // шаблоны препятствий — клонируем (геометрия общая)
    const tmpl = { low: theme.low(), bar: theme.bar(arrowTexC), block: theme.block() };

    let nCandy = 0;
    items.forEach((it) => { if (it.kind === 'candy') nCandy++; });
    const BONUS_POOL = 14;

    /* конфеты: один InstancedMesh (обёртка с «хвостиками», цвета вершин) */
    const cBody = new THREE.SphereGeometry(0.17, 12, 10);
    const cw1 = new THREE.ConeGeometry(0.09, 0.17, 8); cw1.rotateZ(Math.PI / 2); cw1.translate(-0.25, 0, 0);
    const cw2 = new THREE.ConeGeometry(0.09, 0.17, 8); cw2.rotateZ(-Math.PI / 2); cw2.translate(0.25, 0, 0);
    function vc(geom, hex) {
      const c = new THREE.Color(hex), n = geom.attributes.position.count, arr = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
      geom.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    }
    vc(cBody, theme.candyColor); vc(cw1, 0xfff3df); vc(cw2, 0xfff3df);
    const candyGeom = mergeGeometries([cBody, cw1, cw2]);
    const candyIM = new THREE.InstancedMesh(candyGeom, new THREE.MeshLambertMaterial({ vertexColors: true }), nCandy + BONUS_POOL);
    candyIM.frustumCulled = false;
    scene.add(candyIM);

    /* черепушка-шаблон */
    function makeSkull() {
      const g = new THREE.Group();
      const m = lam(0xff8fc7);
      const h = new THREE.Mesh(new THREE.SphereGeometry(0.24, 14, 12), m);
      h.scale.set(1, 0.95, 0.8); g.add(h);
      const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.14), m);
      jaw.position.y = -0.22; g.add(jaw);
      [-1, 1].forEach((s) => {
        const e = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), lam(0x2b2333));
        e.position.set(0.09 * s, 0.0, -0.16); g.add(e);
      });
      return g;
    }
    const skullTmpl = makeSkull();

    let candyIdx = 0, totalSweets = 0;
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    items.forEach((it) => {
      it.x = it.lane === -1 ? 0 : LANE_X[it.lane];
      it.taken = false;
      if (it.kind === 'candy') {
        it.iid = candyIdx++;
        it.value = 1; totalSweets += 1;
        dummy.position.set(it.x, it.y, it.z);
        dummy.rotation.set(0, it.z, 0); dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        candyIM.setMatrixAt(it.iid, dummy.matrix);
      } else if (it.kind === 'skull') {
        it.value = 3; totalSweets += 3;
        const m = skullTmpl.clone();
        m.position.set(it.x, it.y, it.z);
        scene.add(m);
        it.mesh = m;
      } else {
        const col = COLLIDERS[it.kind];
        it.w = col.w; it.yBot = col.yBot; it.yTop = col.yTop;
        const m = tmpl[it.kind].clone();
        m.position.set(it.x, 0, it.z);
        scene.add(m);
        freeze(m);
        it.mesh = m;
      }
    });
    /* пул бонусных конфет (рассыпаются при столкновении) */
    const bonusPool = [];
    for (let i = 0; i < BONUS_POOL; i++) {
      candyIM.setMatrixAt(nCandy + i, zero);
      bonusPool.push({ iid: nCandy + i, active: false, z: 0, x: 0, y: 0.55 });
    }
    candyIM.instanceMatrix.needsUpdate = true;

    return {
      def: def, theme: theme, length: L, items: items,
      candyIM: candyIM, bonusPool: bonusPool, totalSweets: totalSweets,
      skyGroup: skyGroup, laneX: LANE_X, zeroMatrix: zero
    };
  }

  function disposeScene(scene) {
    scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        mats.forEach((m) => {
          ['map', 'emissiveMap'].forEach((k) => { if (m[k]) m[k].dispose(); });
          m.dispose();
        });
      }
    });
    while (scene.children.length) scene.remove(scene.children[0]);
    if (scene.background && scene.background.dispose) scene.background.dispose();
    scene.background = null;
  }

  return { DEFS: DEFS, LANE_X: LANE_X, buildTrack: buildTrack, disposeScene: disposeScene };
})();
