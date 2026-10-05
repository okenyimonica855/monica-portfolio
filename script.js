const topbar=document.querySelector('.topbar');
const menu=document.querySelector('.menu');
if(menu) menu.addEventListener('click',()=>topbar.classList.toggle('open'));
const path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
document.querySelectorAll('[data-count]').forEach(el=>{let done=false;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!done){done=true;const end=Number(el.dataset.count),prefix=el.dataset.prefix||'',suffix=el.dataset.suffix||'';let start=0;const dur=1200,t0=performance.now();const tick=t=>{const p=Math.min((t-t0)/dur,1);const eased=1-Math.pow(1-p,3);el.textContent=prefix+Math.round(end*eased)+suffix;if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)}}),{threshold:.7});io.observe(el)});
const dot=document.querySelector('.cursor-dot');if(dot){window.addEventListener('mousemove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'})}
document.querySelectorAll('.case-nav a').forEach(a=>a.addEventListener('click',()=>topbar?.classList.remove('open')));
