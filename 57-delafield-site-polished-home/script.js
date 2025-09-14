
const heroImgs = ['assets/1-PIC_5266-Edit-67.jpg','assets/6-PIC_5416-2.jpg','assets/10-PIC_5315Enfuse2025-78.jpg'];
let heroIdx = 0;
const heroEl = document.querySelector('.hero img');
if (heroEl) { setInterval(()=>{ heroIdx=(heroIdx+1)%heroImgs.length; heroEl.src=heroImgs[heroIdx]; }, 3500); }
const lb = document.querySelector('.lightbox'); const lbImg = lb? lb.querySelector('img'):null;
document.querySelectorAll('.gallery img').forEach(img=>{ img.addEventListener('click', ()=>{ lbImg.src = img.dataset.full || img.src; lb.classList.add('open'); }); });
if (lb) lb.addEventListener('click', ()=> lb.classList.remove('open'));
