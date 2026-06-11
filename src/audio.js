/* Kuromi Run — звук: всё генерируется через WebAudio, без внешних файлов */
export const SoundKit = (function () {
  const STORE_KEY = 'kuromiRun.sound';
  let ctx = null, master = null, musicGain = null, sfxGain = null;
  let soundOn = localStorage.getItem(STORE_KEY) !== 'off';
  let musicTimer = null, nextNoteTime = 0, noteIdx = 0, currentSong = null;

  function ensureCtx() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    if (!ctx) {
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = soundOn ? 1 : 0;
      master.connect(ctx.destination);
      musicGain = ctx.createGain();
      musicGain.gain.value = 0.14;
      musicGain.connect(master);
      sfxGain = ctx.createGain();
      sfxGain.gain.value = 0.5;
      sfxGain.connect(master);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return true;
  }

  function midi(m) { return 440 * Math.pow(2, (m - 69) / 12); }

  function note(time, m, dur, type, dest, vol) {
    if (!ctx) return;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.value = midi(m);
    g.gain.setValueAtTime(0.0001, time);
    g.gain.linearRampToValueAtTime(vol, time + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    o.connect(g); g.connect(dest);
    o.start(time); o.stop(time + dur + 0.06);
  }

  /* ---- мелодии (шаг = восьмая нота): [мелодия, бас] ---- */
  const SONGS = {
    candy: { tempo: 108, wave: 'triangle', steps: [
      [72,48],[76,null],[79,55],[76,null],[81,48],[79,null],[76,55],[72,null],
      [74,50],[77,null],[81,57],[77,null],[79,55],[null,null],[76,55],[null,null],
      [72,48],[76,null],[79,55],[76,null],[81,45],[79,null],[83,52],[84,null],
      [79,53],[76,null],[74,55],[76,null],[72,48],[null,null],[null,55],[null,null]
    ]},
    city: { tempo: 92, wave: 'sine', steps: [
      [69,45],[null,null],[72,null],[null,null],[76,52],[null,null],[74,null],[72,null],
      [67,43],[null,null],[71,null],[null,null],[74,50],[null,null],[72,null],[null,null],
      [69,41],[null,null],[72,null],[null,null],[77,53],[null,null],[76,null],[74,null],
      [76,40],[null,null],[71,null],[74,null],[69,45],[null,null],[null,null],[null,null]
    ]},
    stars: { tempo: 124, wave: 'triangle', steps: [
      [74,50],[78,null],[81,null],[86,null],[83,57],[81,null],[78,null],[81,null],
      [74,47],[78,null],[81,null],[86,null],[88,55],[86,null],[83,null],[81,null],
      [74,50],[78,null],[81,null],[86,null],[83,57],[81,null],[78,null],[74,null],
      [76,45],[81,null],[78,null],[74,null],[73,49],[74,null],[null,null],[null,null]
    ]}
  };

  function scheduler() {
    if (!ctx || !currentSong) return;
    while (nextNoteTime < ctx.currentTime + 0.25) {
      const song = currentSong, stepDur = 30 / song.tempo;
      const step = song.steps[noteIdx % song.steps.length];
      if (step[0] != null) note(nextNoteTime, step[0], stepDur * 1.9, song.wave, musicGain, 0.5);
      if (step[1] != null) note(nextNoteTime, step[1], stepDur * 2.6, 'sine', musicGain, 0.45);
      nextNoteTime += stepDur;
      noteIdx++;
    }
  }

  function startMusic(name) {
    if (!ensureCtx()) return;
    stopMusic();
    currentSong = SONGS[name];
    if (!currentSong) return;
    noteIdx = 0;
    nextNoteTime = ctx.currentTime + 0.12;
    musicTimer = setInterval(scheduler, 90);
  }
  function stopMusic() {
    if (musicTimer) { clearInterval(musicTimer); musicTimer = null; }
    currentSong = null;
  }

  /* ---- эффекты ---- */
  function ding() { /* сбор сладости */
    if (!ensureCtx()) return;
    const t = ctx.currentTime;
    note(t, 88, 0.12, 'sine', sfxGain, 0.5);
    note(t + 0.06, 93, 0.18, 'sine', sfxGain, 0.4);
  }
  function dingBig() { /* черепушка */
    if (!ensureCtx()) return;
    const t = ctx.currentTime;
    [81, 86, 90, 93].forEach((m, i) => note(t + i * 0.055, m, 0.2, 'triangle', sfxGain, 0.45));
  }
  function boing() { /* прыжок */
    if (!ensureCtx()) return;
    const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(220, t);
    o.frequency.exponentialRampToValueAtTime(560, t + 0.16);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.4, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(g); g.connect(sfxGain);
    o.start(t); o.stop(t + 0.26);
  }
  function swish() { /* смена полосы / подкат */
    if (!ensureCtx()) return;
    const t = ctx.currentTime;
    const len = 0.14, buf = ctx.createBuffer(1, ctx.sampleRate * len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1400; f.Q.value = 0.8;
    const g = ctx.createGain(); g.gain.value = 0.16;
    src.connect(f); f.connect(g); g.connect(sfxGain);
    src.start(t);
  }
  function thud() { /* мягкий «бамс» */
    if (!ensureCtx()) return;
    const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(150, t);
    o.frequency.exponentialRampToValueAtTime(62, t + 0.22);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.55, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(g); g.connect(sfxGain);
    o.start(t); o.stop(t + 0.34);
  }
  function countTick(last) {
    if (!ensureCtx()) return;
    note(ctx.currentTime, last ? 84 : 72, last ? 0.4 : 0.15, 'triangle', sfxGain, 0.45);
  }
  function fanfare() {
    if (!ensureCtx()) return;
    const t = ctx.currentTime;
    const seq = [[72, 0], [76, 0.14], [79, 0.28], [84, 0.42], [79, 0.62], [84, 0.76]];
    seq.forEach(([m, dt]) => {
      note(t + dt, m, 0.32, 'triangle', sfxGain, 0.45);
      note(t + dt, m - 12, 0.32, 'sine', sfxGain, 0.3);
    });
    note(t + 1.0, 84, 0.8, 'triangle', sfxGain, 0.4);
    note(t + 1.0, 76, 0.8, 'sine', sfxGain, 0.3);
  }
  function starPop(i) {
    if (!ensureCtx()) return;
    note(ctx.currentTime, 79 + i * 5, 0.3, 'triangle', sfxGain, 0.5);
  }

  function setEnabled(on) {
    soundOn = on;
    localStorage.setItem(STORE_KEY, on ? 'on' : 'off');
    if (ctx && master) {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.linearRampToValueAtTime(on ? 1 : 0, ctx.currentTime + 0.15);
    }
  }
  function isEnabled() { return soundOn; }

  return { tap: ensureCtx, ding, dingBig, boing, swish, thud, fanfare, starPop, countTick, startMusic, stopMusic, setEnabled, isEnabled };
})();
