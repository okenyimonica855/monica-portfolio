document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.topbar');
  const menu=document.querySelector('.menu');
  if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
  const here=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===here)a.classList.add('active')});

  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=Number(el.dataset.count); let done=false;
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!done){done=true;let start=0;const dur=900;const t0=performance.now();const tick=now=>{const p=Math.min((now-t0)/dur,1);const ease=1-Math.pow(1-p,3);el.textContent=Math.round(start+(target-start)*ease);if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);io.disconnect()}}),{threshold:.6});
    io.observe(el);
  });

  const dot=document.querySelector('.cursor-dot');
  if(dot&&window.matchMedia('(pointer:fine)').matches){window.addEventListener('mousemove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'})} else if(dot){dot.remove()}

  const form=document.querySelector('#contactForm');
  const status=document.querySelector('#formStatus');
  if(form){
    form.addEventListener('submit',async(e)=>{
      e.preventDefault();
      if(status) status.textContent='Sending…';
      try{
        const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
        if(!response.ok) throw new Error('Submission failed');
        form.reset();
        if(status) status.textContent='Sent — thank you. I’ll get back to you soon.';
      }catch(err){
        if(status) status.textContent='The form could not send right now. Please email me directly instead.';
      }
    });
  }
});

/* V11 motion layer */
document.addEventListener('DOMContentLoaded',()=>{
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const nav=document.querySelector('.topbar');

  // staggered scroll reveals within each group
  document.querySelectorAll('.reveal').forEach(el=>{
    const sibs=[...el.parentElement.children].filter(c=>c.classList.contains('reveal'));
    el.style.setProperty('--d',(sibs.indexOf(el)*.12)+'s');
  });

  // hero headline: word-by-word rise
  const h1=document.querySelector('.hero h1');
  if(h1&&!reduce){
    let i=0;
    const walk=node=>[...node.childNodes].forEach(n=>{
      if(n.nodeType===3){
        const frag=document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(t=>{
          if(!t)return;
          if(/^\s+$/.test(t)){frag.appendChild(document.createTextNode(' '));return}
          const w=document.createElement('span');w.className='w';
          const s=document.createElement('span');s.style.setProperty('--i',i++);s.textContent=t;
          w.appendChild(s);frag.appendChild(w);
        });
        n.replaceWith(frag);
      }else if(n.nodeType===1){
        if(n.tagName==='SPAN'&&!n.className)n.classList.add('accent');
        walk(n);
      }
    });
    walk(h1);
  }

  // scroll progress, floating nav state, gentle portrait parallax
  const bar=document.createElement('div');bar.className='progress';document.body.appendChild(bar);
  const portrait=document.querySelector('.portrait-stage .portrait');
  const onScroll=()=>{
    const h=document.documentElement;
    bar.style.transform='scaleX('+(h.scrollTop/((h.scrollHeight-h.clientHeight)||1))+')';
    if(nav)nav.classList.toggle('scrolled',h.scrollTop>20);
    if(portrait&&!reduce&&h.scrollTop<900)portrait.style.translate='0 '+(h.scrollTop*.06)+'px';
  };
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  // card spotlight that follows the pointer
  document.querySelectorAll('.project-card,.thought-card').forEach(c=>c.addEventListener('pointermove',e=>{
    const r=c.getBoundingClientRect();
    c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');
  }));

  // smooth cursor ring (desktop only)
  if(matchMedia('(pointer:fine)').matches&&!reduce){
    const ring=document.createElement('div');ring.className='cursor-ring';document.body.appendChild(ring);
    let x=0,y=0,rx=0,ry=0;
    addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY});
    (function loop(){rx+=(x-rx)*.16;ry+=(y-ry)*.16;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)})();
    document.addEventListener('mouseover',e=>document.body.classList.toggle('hovering',!!e.target.closest('a,button,input,textarea,.skill-tag')));
  }
});
