import { WORDS } from './words-data.js';

const ROUND_SIZE = 30;

const CHO = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const JUNG = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const CHO_TO_JONG = {0:1,1:2,2:4,3:7,5:8,6:16,7:17,9:19,10:20,11:21,12:22,14:23,15:24,16:25,17:26,18:27};
const JONG_TO_CHO = {1:0,2:1,4:2,7:3,8:5,16:6,17:7,19:9,20:10,21:11,22:12,23:14,24:15,25:16,26:17,27:18};
const COMPOUND_SPLIT = {3:[1,9],5:[4,12],6:[4,18],9:[8,0],10:[8,6],11:[8,7],12:[8,9],13:[8,16],14:[8,17],15:[8,18],18:[17,9]};
const COMBINE = {1:{9:3},4:{12:5,18:6},8:{0:9,6:10,7:11,9:12,16:13,17:14,18:15},17:{9:18}};

function composeBlocks(presses) {
  const blocks = [];
  let cur = null;
  const pushNew = (b) => { blocks.push(b); cur = b; return b; };
  for (const p of presses) {
    if (p.t === 'C') {
      const ci = p.i;
      if (!cur || (cur.cho !== null && cur.jung === null)) {
        pushNew({ cho: ci, jung: null, jong: null });
      } else if (cur.jung !== null && cur.jong === null) {
        const jg = CHO_TO_JONG[ci];
        if (jg) cur.jong = jg; else pushNew({ cho: ci, jung: null, jong: null });
      } else if (cur.jung !== null && cur.jong !== null) {
        const combo = (COMBINE[cur.jong] || {})[ci];
        if (combo) cur.jong = combo; else pushNew({ cho: ci, jung: null, jong: null });
      } else {
        pushNew({ cho: ci, jung: null, jong: null });
      }
    } else {
      const vi = p.i;
      if (cur && cur.cho !== null && cur.jung === null) {
        cur.jung = vi;
      } else if (cur && cur.jung !== null && cur.jong !== null) {
        const split = COMPOUND_SPLIT[cur.jong];
        if (split) { cur.jong = split[0]; pushNew({ cho: split[1], jung: vi, jong: null }); }
        else { const choIdx = JONG_TO_CHO[cur.jong]; cur.jong = null; pushNew({ cho: choIdx, jung: vi, jong: null }); }
      } else {
        pushNew({ cho: null, jung: vi, jong: null });
      }
    }
  }
  return blocks;
}

function blockToChar(b) {
  if (b.cho !== null && b.jung !== null) return String.fromCharCode(0xAC00 + (b.cho * 21 + b.jung) * 28 + (b.jong || 0));
  if (b.cho !== null) return CHO[b.cho];
  if (b.jung !== null) return JUNG[b.jung];
  return '';
}

function pressesToText(presses) { return composeBlocks(presses).map(blockToChar).join(''); }
function normalizeKo(s) { return (s || '').replace(/\s+/g, ' ').trim(); }
function normalizeEn(s) {
  let t = (s || '').toLowerCase();
  t = t.replace(/\([^)]*\)/g, ' ');
  t = t.replace(/[^a-z\s/]/g, ' ');
  t = t.replace(/\s+/g, ' ').trim();
  t = t.replace(/^(to be |to |a |an |the )/, '');
  return t.trim();
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const state = {
  screen: 'start',
  direction: null,
  level: 'all',
  inputMode: 'type',
  roundWords: [],
  idx: 0,
  presses: [],
  englishInput: '',
  currentChoices: [],
  selectedChoice: null,
  answered: false,
  lastCorrect: false,
  score: 0,
  wrongList: [],
};

function setState(patch) {
  Object.assign(state, typeof patch === 'function' ? patch(state) : patch);
  render();
}

function buildChoices(word, direction) {
  const field = direction === 'toKo' ? 'ko' : 'en';
  const seen = new Set([word[field]]);
  const distractors = [];
  for (const c of shuffle(WORDS)) {
    if (distractors.length >= 3) break;
    if (c.id === word.id) continue;
    if (seen.has(c[field])) continue;
    seen.add(c[field]);
    distractors.push(c[field]);
  }
  return shuffle([word[field], ...distractors]);
}

function selectDirection(dir) { setState({ direction: dir }); }
function selectLevel(lv) { setState({ level: lv }); }
function selectInputMode(mode) { setState({ inputMode: mode }); }

function startRound() {
  if (!state.direction) return;
  const pool = state.level === 'all' ? WORDS : WORDS.filter(w => w.lv === state.level);
  const n = Math.min(ROUND_SIZE, pool.length);
  const round = shuffle(pool).slice(0, n);
  const choices = state.inputMode === 'choice' && round.length ? buildChoices(round[0], state.direction) : [];
  setState({
    screen: 'quiz', roundWords: round, idx: 0, presses: [], englishInput: '',
    currentChoices: choices, selectedChoice: null,
    answered: false, lastCorrect: false, score: 0, wrongList: [],
  });
}

function pressConsonant(i) { if (state.answered) return; setState(s => ({ presses: [...s.presses, { t: 'C', i }] })); }
function pressVowel(i) { if (state.answered) return; setState(s => ({ presses: [...s.presses, { t: 'V', i }] })); }
function backspacePress() { if (state.answered) return; setState(s => ({ presses: s.presses.slice(0, -1) })); }
function clearPresses() { if (state.answered) return; setState({ presses: [] }); }
function setEnglishInput(v) { setState({ englishInput: v }); }

function submitAnswer() {
  if (state.answered) return;
  const word = state.roundWords[state.idx];
  if (!word) return;
  let correct;
  if (state.direction === 'toKo') {
    const text = pressesToText(state.presses);
    correct = text.length > 0 && normalizeKo(text) === normalizeKo(word.ko);
  } else {
    const val = state.englishInput || '';
    correct = val.trim().length > 0 && normalizeEn(val) === normalizeEn(word.en);
  }
  setState(s => ({
    answered: true, lastCorrect: correct,
    score: s.score + (correct ? 1 : 0),
    wrongList: correct ? s.wrongList : [...s.wrongList, word],
  }));
}

function selectChoice(text) {
  if (state.answered) return;
  const word = state.roundWords[state.idx];
  if (!word) return;
  const field = state.direction === 'toKo' ? 'ko' : 'en';
  const correct = text === word[field];
  setState(s => ({
    answered: true, lastCorrect: correct, selectedChoice: text,
    score: s.score + (correct ? 1 : 0),
    wrongList: correct ? s.wrongList : [...s.wrongList, word],
  }));
}

function nextQuestion() {
  const nextIdx = state.idx + 1;
  if (nextIdx >= state.roundWords.length) {
    setState({ screen: 'summary' });
  } else {
    const nextWord = state.roundWords[nextIdx];
    const choices = state.inputMode === 'choice' ? buildChoices(nextWord, state.direction) : [];
    setState({ idx: nextIdx, presses: [], englishInput: '', currentChoices: choices, selectedChoice: null, answered: false, lastCorrect: false });
  }
}

function restartSameSettings() { startRound(); }
function backToMenu() { setState({ screen: 'start', answered: false, lastCorrect: false, presses: [], englishInput: '', selectedChoice: null }); }

const app = document.getElementById('app');

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function renderStart() {
  const s = state;
  const directions = [
    { key: 'toKo', label: 'Jawab dalam Korea', desc: 'Soal muncul Bahasa Inggris, jawab pakai Hangeul' },
    { key: 'toEn', label: 'Jawab dalam Inggris', desc: 'Soal muncul Hangeul, jawab pakai Bahasa Inggris' },
  ];
  const levels = [
    { key: 1, label: 'Level 1' }, { key: 2, label: 'Level 2' }, { key: 3, label: 'Level 3' },
    { key: 4, label: 'Level 4' }, { key: 'all', label: 'Semua Level' },
  ];
  const inputModes = [
    { key: 'type', label: 'Ketik' },
    { key: 'choice', label: 'Pilihan Ganda' },
  ];
  const canStart = !!s.direction;

  return `
  <div class="start-screen">
    <div class="brand">
      <div class="brand-badge">한</div>
      <div class="brand-title">
        <div class="name">단어장</div>
        <div class="sub">Latihan kosakata bahasa Korea</div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-label">Mau jawab dalam bahasa apa?</div>
      <div class="direction-list">
        ${directions.map(d => `
          <button class="direction-option ${s.direction === d.key ? 'selected' : ''}" data-direction="${d.key}">
            <div>
              <div class="label">${esc(d.label)}</div>
              <div class="desc">${esc(d.desc)}</div>
            </div>
            <div class="direction-dot"></div>
          </button>
        `).join('')}
      </div>
    </div>

    <div class="panel">
      <div class="panel-label">Cara menjawab</div>
      <div class="pill-row">
        ${inputModes.map(im => `<button class="pill ${s.inputMode === im.key ? 'selected' : ''}" data-input-mode="${im.key}">${esc(im.label)}</button>`).join('')}
      </div>
    </div>

    <div class="panel">
      <div class="panel-label">Pilih level kosakata</div>
      <div class="pill-row">
        ${levels.map(lv => `<button class="pill ${s.level === lv.key ? 'selected' : ''}" data-level="${lv.key}">${esc(lv.label)}</button>`).join('')}
      </div>
    </div>

    <button class="btn-primary" id="start-btn" ${canStart ? '' : 'disabled'}>
      ${canStart ? `Mulai Latihan (${ROUND_SIZE} kata)` : 'Pilih arah jawaban dulu'}
    </button>
  </div>`;
}

function renderQuiz() {
  const s = state;
  const word = s.roundWords[s.idx] || null;
  const total = s.roundWords.length || ROUND_SIZE;
  const composedText = s.direction === 'toKo' ? pressesToText(s.presses) : '';
  const canSubmit = s.direction === 'toKo' ? composedText.length > 0 : (s.englishInput || '').trim().length > 0;
  const isTypeMode = s.inputMode === 'type';
  const isChoiceMode = s.inputMode === 'choice';
  const showKeyboard = s.direction === 'toKo' && isTypeMode;
  const showTextbox = s.direction === 'toEn' && isTypeMode;
  const showSubmitArea = !s.answered && isTypeMode;
  const progressPct = total ? Math.round((s.idx / total) * 100) : 0;
  const choiceField = s.direction === 'toKo' ? 'ko' : 'en';
  const isLastQuestion = word ? (s.idx + 1 >= total) : false;

  let html = `
  <div class="quiz-screen">
    <div class="quiz-topbar">
      <button class="btn-menu" id="menu-btn">← Menu</button>
      <div class="progress-label">${word ? (s.idx + 1) + ' / ' + total : ''}</div>
      <div class="score-label">Skor: ${s.score}</div>
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:${progressPct}%;"></div></div>

    <div class="prompt-card">
      <div class="prompt-mode-label">${s.direction === 'toKo' ? 'Jawab dalam Korea' : 'Jawab dalam Inggris'}</div>
      ${s.direction === 'toKo'
        ? `<div class="prompt-text-ko">${esc(word ? word.en : '')}</div>`
        : `<div class="prompt-text-en">${esc(word ? word.ko : '')}</div>`}
    </div>`;

  if (showKeyboard) {
    html += `
    <div class="composed-box">${esc(composedText)}</div>
    <div class="keyboard-row">
      ${CHO.map((ch, i) => `<button class="key" data-cho="${i}">${ch}</button>`).join('')}
    </div>
    <div class="keyboard-row">
      ${JUNG.map((ch, i) => `<button class="key vowel" data-jung="${i}">${ch}</button>`).join('')}
    </div>
    <div class="keyboard-actions">
      <button class="btn-kbd" id="backspace-btn">⌫ Hapus</button>
      <button class="btn-kbd" id="clear-btn">Bersihkan</button>
    </div>`;
  }

  if (showTextbox) {
    html += `<input type="text" class="english-input" id="english-input" value="${esc(s.englishInput)}" placeholder="Ketik jawaban dalam bahasa Inggris" />`;
  }

  if (isChoiceMode) {
    html += `<div class="choice-grid">`;
    for (const text of s.currentChoices) {
      let cls = 'choice-btn';
      if (!s.answered) {
        cls += ' idle';
      } else if (word && text === word[choiceField]) {
        cls += ' correct';
      } else if (s.selectedChoice === text) {
        cls += ' wrong-selected';
      } else {
        cls += ' dim';
      }
      html += `<button class="${cls}" ${s.answered ? 'disabled' : `data-choice="${esc(text)}"`}>${esc(text)}</button>`;
    }
    html += `</div>`;
  }

  if (showSubmitArea) {
    html += `<button class="btn-submit" id="submit-btn" ${canSubmit ? '' : 'disabled'}>Jawab</button>`;
  }

  if (s.answered) {
    html += `<div class="feedback-box ${s.lastCorrect ? 'correct' : 'incorrect'}">${s.lastCorrect ? 'Benar!' : 'Kurang tepat'}</div>`;
    html += `
    <div class="answer-card">
      <div class="ko">${esc(word ? word.ko : '')}</div>
      <div class="rr">${esc(word ? word.rr : '')}</div>
      <div class="en">${esc(word ? word.en : '')}</div>
    </div>
    <button class="btn-next" id="next-btn">${isLastQuestion ? 'Lihat Hasil' : 'Soal Berikutnya'}</button>`;
  }

  html += `</div>`;
  return html;
}

function renderSummary() {
  const s = state;
  const total = s.roundWords.length || ROUND_SIZE;
  const hasWrong = s.wrongList.length > 0;

  return `
  <div class="summary-screen">
    <div class="summary-title">Ronde Selesai</div>
    <div class="score-circle">
      <div class="value">${s.score}</div>
      <div class="of">dari ${total}</div>
    </div>
    ${hasWrong ? `
    <div class="wrong-panel">
      <div class="panel-label">Kata yang perlu diulang</div>
      <div class="wrong-list">
        ${s.wrongList.map(w => `
          <div class="wrong-row">
            <div class="ko">${esc(w.ko)}</div>
            <div class="rr">${esc(w.rr)}</div>
            <div class="en">${esc(w.en)}</div>
          </div>
        `).join('')}
      </div>
    </div>` : `
    <div class="no-wrong">Semua jawaban benar. Kerja bagus!</div>`}
    <div class="summary-actions">
      <button class="btn-restart" id="restart-btn">Ronde Baru</button>
      <button class="btn-change" id="change-btn">Ganti Pengaturan</button>
    </div>
  </div>`;
}

function render() {
  if (state.screen === 'start') app.innerHTML = renderStart();
  else if (state.screen === 'quiz') app.innerHTML = renderQuiz();
  else app.innerHTML = renderSummary();
  bindEvents();
}

function bindEvents() {
  if (state.screen === 'start') {
    app.querySelectorAll('[data-direction]').forEach(el =>
      el.addEventListener('click', () => selectDirection(el.dataset.direction)));
    app.querySelectorAll('[data-input-mode]').forEach(el =>
      el.addEventListener('click', () => selectInputMode(el.dataset.inputMode)));
    app.querySelectorAll('[data-level]').forEach(el =>
      el.addEventListener('click', () => selectLevel(el.dataset.level === 'all' ? 'all' : Number(el.dataset.level))));
    const startBtn = document.getElementById('start-btn');
    if (startBtn && !startBtn.disabled) startBtn.addEventListener('click', startRound);
  } else if (state.screen === 'quiz') {
    document.getElementById('menu-btn').addEventListener('click', backToMenu);
    app.querySelectorAll('[data-cho]').forEach(el =>
      el.addEventListener('click', () => pressConsonant(Number(el.dataset.cho))));
    app.querySelectorAll('[data-jung]').forEach(el =>
      el.addEventListener('click', () => pressVowel(Number(el.dataset.jung))));
    const backspaceBtn = document.getElementById('backspace-btn');
    if (backspaceBtn) backspaceBtn.addEventListener('click', backspacePress);
    const clearBtn = document.getElementById('clear-btn');
    if (clearBtn) clearBtn.addEventListener('click', clearPresses);
    const englishInput = document.getElementById('english-input');
    if (englishInput) {
      englishInput.focus();
      englishInput.setSelectionRange(englishInput.value.length, englishInput.value.length);
      englishInput.addEventListener('input', (e) => setEnglishInput(e.target.value));
      englishInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const canSubmit = (englishInput.value || '').trim().length > 0;
          if (canSubmit && !state.answered) submitAnswer();
        }
      });
    }
    app.querySelectorAll('[data-choice]').forEach(el =>
      el.addEventListener('click', () => selectChoice(el.dataset.choice)));
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn && !submitBtn.disabled) submitBtn.addEventListener('click', submitAnswer);
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
  } else {
    document.getElementById('restart-btn').addEventListener('click', restartSameSettings);
    document.getElementById('change-btn').addEventListener('click', backToMenu);
  }
}

render();
