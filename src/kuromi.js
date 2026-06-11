/* Kuromi Run — героиня из примитивов Three.js, процедурные анимации */
import * as THREE from 'three';

export function createKuromi() {
  const M = {
    black: new THREE.MeshLambertMaterial({ color: 0x2b2333 }),
    white: new THREE.MeshLambertMaterial({ color: 0xfffaf5 }),
    pink:  new THREE.MeshLambertMaterial({ color: 0xff8fc7 }),
    deepPink: new THREE.MeshLambertMaterial({ color: 0xf06fb0 }),
    dark:  new THREE.MeshLambertMaterial({ color: 0x1c1722 }),
    blush: new THREE.MeshLambertMaterial({ color: 0xffb3d6, transparent: true, opacity: 0.85 })
  };

  const root = new THREE.Group();      // позиция в мире (ставит игра)
  const rig = new THREE.Group();       // наклоны корпуса (подкат, полосы)
  root.add(rig);
  rig.rotation.y = Math.PI;            // лицом вперёд (+z)

  /* --- тело --- */
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 16), M.black);
  body.scale.set(1, 1.12, 0.88);
  body.position.y = 0.52;
  rig.add(body);

  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.19, 16, 12), M.white);
  belly.scale.set(1, 1.05, 0.55);
  belly.position.set(0, 0.5, -0.18);
  rig.add(belly);

  /* --- голова --- */
  const head = new THREE.Group();
  head.position.y = 1.04;
  rig.add(head);

  const face = new THREE.Mesh(new THREE.SphereGeometry(0.34, 24, 18), M.white);
  face.scale.set(1, 0.92, 0.9);
  head.add(face);

  const hood = new THREE.Mesh(new THREE.SphereGeometry(0.4, 24, 18), M.black);
  hood.position.set(0, 0.07, 0.07);
  hood.scale.set(1.03, 0.93, 0.96);
  head.add(hood);

  /* ушки — длинные, чуть в стороны */
  const ears = [];
  [-1, 1].forEach((s) => {
    const ear = new THREE.Group();
    ear.position.set(0.2 * s, 0.32, 0.06);
    const earMesh = new THREE.Mesh(new THREE.SphereGeometry(0.125, 14, 12), M.black);
    earMesh.scale.set(1, 2.7, 0.9);
    earMesh.position.y = 0.26;
    ear.add(earMesh);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), M.pink);
    tip.position.set(0, 0.52, -0.06);
    ear.add(tip);
    ear.rotation.z = -0.38 * s;
    head.add(ear);
    ears.push(ear);
  });

  /* розовая черепушка спереди на колпаке */
  const skull = new THREE.Group();
  skull.position.set(0, 0.26, -0.33);
  skull.rotation.x = -0.35;
  const sHead = new THREE.Mesh(new THREE.SphereGeometry(0.095, 14, 12), M.pink);
  sHead.scale.set(1, 0.9, 0.65);
  skull.add(sHead);
  const sJaw = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.045, 0.05), M.pink);
  sJaw.position.set(0, -0.085, -0.01);
  skull.add(sJaw);
  [-1, 1].forEach((s) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), M.dark);
    eye.position.set(0.035 * s, 0.005, -0.062);
    skull.add(eye);
  });
  head.add(skull);

  /* глазки, носик, щёчки */
  [-1, 1].forEach((s) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 10), M.dark);
    eye.scale.set(0.85, 1.25, 0.6);
    eye.position.set(0.135 * s, 0.0, -0.295);
    head.add(eye);
    const glint = new THREE.Mesh(new THREE.SphereGeometry(0.015, 8, 6), M.white);
    glint.position.set(0.12 * s, 0.035, -0.335);
    head.add(glint);
    const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), M.blush);
    cheek.scale.set(1, 0.65, 0.4);
    cheek.position.set(0.21 * s, -0.1, -0.26);
    head.add(cheek);
  });
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.032, 10, 8), M.deepPink);
  nose.scale.set(1.1, 0.85, 0.7);
  nose.position.set(0, -0.075, -0.33);
  head.add(nose);

  /* ручки */
  const arms = [];
  [-1, 1].forEach((s) => {
    const arm = new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 10), M.white);
    arm.position.set(0.3 * s, 0.6, 0);
    rig.add(arm);
    arms.push(arm);
  });

  /* ножки */
  const feet = [];
  [-1, 1].forEach((s) => {
    const foot = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 10), M.black);
    foot.scale.set(0.9, 0.75, 1.25);
    foot.position.set(0.13 * s, 0.1, 0);
    rig.add(foot);
    feet.push(foot);
  });

  /* хвостик чёртика */
  const tail = new THREE.Group();
  tail.position.set(0, 0.5, 0.26);
  const tailStem = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.03, 0.34, 8), M.dark);
  tailStem.rotation.x = -0.9;
  tailStem.position.set(0, 0.08, 0.12);
  tail.add(tailStem);
  const tailTip = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.12, 4), M.dark);
  tailTip.position.set(0, 0.24, 0.22);
  tailTip.rotation.x = 0.5;
  tail.add(tailTip);
  rig.add(tail);

  /* мягкая «блинная» тень */
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, 24),
    new THREE.MeshBasicMaterial({ color: 0x4a2a52, transparent: true, opacity: 0.22, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  root.add(shadow);

  /* --- процедурная анимация --- */
  // state: { y, sliding (0..1), airborne, laneVel, runSpeed, t }
  function update(state) {
    const t = state.t;
    const runPhase = t * (7 + state.runSpeed * 0.35);
    const slide = state.sliding;
    const air = state.airborne ? 1 : 0;

    rig.position.y = state.y + Math.max(0, Math.sin(runPhase * 2)) * 0.045 * (1 - air) * (1 - slide);

    /* наклон корпуса: вперёд при подкате, в сторону при смене полосы */
    rig.rotation.x = 0.12 + slide * 1.05 + air * -0.12;
    rig.rotation.z = THREE.MathUtils.clamp(-state.laneVel * 0.055, -0.35, 0.35);
    rig.scale.y = 1 - slide * 0.32;
    rig.scale.x = 1 + slide * 0.12;

    /* ножки: бег / поджаты в прыжке / вытянуты в подкате */
    feet.forEach((foot, i) => {
      const ph = runPhase + i * Math.PI;
      const run = (1 - air) * (1 - slide);
      foot.position.z = Math.sin(ph) * 0.2 * run - slide * 0.15;
      foot.position.y = 0.1 + Math.max(0, Math.cos(ph)) * 0.09 * run + air * 0.22 + slide * 0.05;
      foot.rotation.x = Math.sin(ph) * 0.5 * run;
    });

    /* ручки машут противофазой, в прыжке подняты */
    arms.forEach((arm, i) => {
      const ph = runPhase + (1 - i) * Math.PI;
      arm.position.z = Math.sin(ph) * 0.16 * (1 - air);
      arm.position.y = 0.6 + air * 0.18 + Math.max(0, Math.cos(ph)) * 0.04;
    });

    /* ушки пружинят, в прыжке взлетают */
    ears.forEach((ear, i) => {
      const s = i === 0 ? -1 : 1;
      ear.rotation.z = -0.38 * s + Math.sin(runPhase + i) * 0.07 + air * 0.3 * s * -1;
      ear.rotation.x = -air * 0.35 + Math.sin(runPhase * 2) * 0.05 * (1 - air);
    });

    /* хвостик виляет */
    tail.rotation.y = Math.sin(t * 9) * 0.4;

    /* голова чуть кивает */
    head.rotation.x = Math.sin(runPhase * 2) * 0.035 * (1 - air) + slide * -0.5;

    /* тень: на земле плотнее, в прыжке шире и бледнее */
    const h = state.y;
    shadow.material.opacity = Math.max(0.06, 0.22 - h * 0.07);
    const sc = 1 + h * 0.25;
    shadow.scale.set(sc, sc, 1);
  }

  return { group: root, rig, update };
}
