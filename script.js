document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.topbar');
  const menu=document.querySelector('.menu');
  if(menu) menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open?'Close navigation':'Toggle navigation');
    menu.textContent=open?'×':'☰';
  });
  const here=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===here)a.classList.add('active')});

  const reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('show');reveal.unobserve(e.target)}
  }),{threshold:.12});
  document.querySelectorAll('.reveal').forEach((el,i)=>{
    const siblings=[...el.parentElement.children].filter(c=>c.classList.contains('reveal'));
    el.style.setProperty('--d',Math.max(0,siblings.indexOf(el))*.09+'s');
    reveal.observe(el);
  });

  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=Number(el.dataset.count);let done=false;
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{
      if(e.isIntersecting&&!done){done=true;const start=performance.now(),duration=950;
        const tick=now=>{const p=Math.min((now-start)/duration,1),ease=1-Math.pow(1-p,3);
          el.textContent=Math.round(target*ease);if(p<1)requestAnimationFrame(tick)};
        requestAnimationFrame(tick);io.disconnect();
      }
    }),{threshold:.6});io.observe(el);
  });

  const bar=document.createElement('div');bar.className='progress';document.body.appendChild(bar);
  const onScroll=()=>{
    const root=document.documentElement;
    const max=root.scrollHeight-root.clientHeight;
    bar.style.transform='scaleX('+(max>0?root.scrollTop/max:0)+')';
    if(nav)nav.classList.toggle('scrolled',root.scrollTop>24);
  };
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  document.querySelectorAll('.project-card').forEach(card=>card.addEventListener('pointermove',e=>{
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mx',(e.clientX-r.left)+'px');
    card.style.setProperty('--my',(e.clientY-r.top)+'px');
  }));

  const form=document.querySelector('#contactForm');
  const status=document.querySelector('#formStatus');
  if(form){
    form.addEventListener('submit',async e=>{
      e.preventDefault();if(status)status.textContent='Sending…';
      try{
        const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
        if(!response.ok)throw new Error('Submission failed');
        form.reset();if(status)status.textContent='Sent — thank you. I’ll get back to you soon.';
      }catch(error){if(status)status.textContent='The form could not send right now. Please email me directly instead.'}
    });
  }
});
