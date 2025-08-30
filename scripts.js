// ====== MENU MOBIEL ======
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => menu.classList.toggle('show'));

// ====== ZOEKFILTREREN ======
const search = document.getElementById('search');
const sections = document.querySelectorAll('main .panel');
search.addEventListener('input', () => {
  const q = search.value.toLowerCase().trim();
  sections.forEach(sec => {
    const txt = (sec.textContent + ' ' + (sec.dataset.search || '')).toLowerCase();
    sec.style.display = txt.includes(q) ? '' : 'none';
  });
});

// ====== FLEXBOX CONTROLS ======
const flexArea = document.getElementById('flex-demo');
const flexDir = document.getElementById('flex-direction');
const just = document.getElementById('justify-content');
const align = document.getElementById('align-items');
const wrapSel = document.getElementById('flex-wrap');
const gapInput = document.getElementById('flex-gap');

function applyFlexContainer(){
  flexArea.style.flexDirection = flexDir.value;
  flexArea.style.justifyContent = just.value;
  flexArea.style.alignItems = align.value;
  flexArea.style.flexWrap = wrapSel.value;
  flexArea.style.gap = (parseInt(gapInput.value,10) || 0) + 'px';
}
[flexDir, just, align, wrapSel, gapInput].forEach(el => el.addEventListener('input', applyFlexContainer));
applyFlexContainer();

// Grow/Shrink/Basis voor item #2
const fx2 = document.getElementById('fx2');
const grow2 = document.getElementById('grow-2');
const shrink2 = document.getElementById('shrink-2');
const basis2 = document.getElementById('basis-2');
function applyItem2(){
  const g = Math.max(0, parseInt(grow2.value,10) || 0);
  const s = Math.max(0, parseInt(shrink2.value,10) || 1);
  const b = Math.max(0, parseInt(basis2.value,10) || 0);
  fx2.style.flex = `${g} ${s} ${b}px`;
}
[grow2, shrink2, basis2].forEach(el => el.addEventListener('input', applyItem2));
applyItem2();

// ====== GRID CONTROLS ======
const grid = document.getElementById('grid-demo');
const gridCols = document.getElementById('grid-cols');
const gridGap = document.getElementById('grid-gap');

function applyGrid(){
  const c = Math.min(8, Math.max(1, parseInt(gridCols.value,10) || 1));
  const g = Math.max(0, parseInt(gridGap.value,10) || 0);
  grid.style.gridTemplateColumns = `repeat(${c}, 1fr)`;
  grid.style.gap = g + 'px';
}
[gridCols, gridGap].forEach(el => el.addEventListener('input', applyGrid));
applyGrid();

// ====== POSITION CONTROLS ======
const posType = document.getElementById('pos-type');
const posTop = document.getElementById('pos-top');
const posLeft = document.getElementById('pos-left');
const posBox = document.getElementById('pos-box');

function applyPosition(){
  posBox.style.position = posType.value;
  const t = parseInt(posTop.value,10) || 0;
  const l = parseInt(posLeft.value,10) || 0;

  // Alleen top/left toepassen als type het ondersteunt
  if(['relative','absolute','fixed','sticky'].includes(posType.value)){
    posBox.style.top = t + 'px';
    posBox.style.left = l + 'px';
  } else {
    posBox.style.top = '0px';
    posBox.style.left = '0px';
  }
}
[posType, posTop, posLeft].forEach(el => el.addEventListener('input', applyPosition));
applyPosition();