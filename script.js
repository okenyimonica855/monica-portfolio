document.addEventListener('DOMContentLoaded',()=>{
  document.documentElement.classList.add('js');

  const nav=document.querySelector('.topbar');
  const menu=document.querySelector('.menu');
  if(menu&&nav){
    menu.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      menu.setAttribute('aria-expanded',String(open));
      menu.setAttribute('aria-label',open?'Close navigation':'Toggle navigation');
      menu.textContent=open?'×':'☰';
    });
    nav.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>{
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded','false');
      menu.setAttribute('aria-label','Toggle navigation');
      menu.textContent='☰';
    }));
  }

  const currentPage=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('nav a').forEach(link=>{
    if(link.getAttribute('href')===currentPage)link.classList.add('active');
  });

  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>{
    const siblings=[...el.parentElement.children].filter(child=>child.classList.contains('reveal'));
    el.style.setProperty('--d',Math.max(0,siblings.indexOf(el))*.08+'s');
    revealObserver.observe(el);
  });

  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=Number(el.dataset.count);
    if(!Number.isFinite(target))return;
    let finished=false;
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting&&!finished){
          finished=true;
          const start=performance.now(),duration=900;
          const tick=now=>{
            const progress=Math.min((now-start)/duration,1);
            const eased=1-Math.pow(1-progress,3);
            el.textContent=Math.round(target*eased);
            if(progress<1)requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      });
    },{threshold:.55});
    observer.observe(el);
  });

  // Desktop visitors can reveal the portrait by hovering; touch users tap to toggle it.
  document.querySelectorAll('.portrait-toggle').forEach(button=>{
    const stage=button.closest('.portrait-stage');
    button.addEventListener('click',()=>{
      if(!stage)return;
      const active=stage.classList.toggle('is-color');
      button.setAttribute('aria-pressed',String(active));
      button.setAttribute('aria-label',active?'Show portrait in black and white':'Reveal Monica\'s portrait in full colour');
    });
  });

  const progress=document.createElement('div');
  progress.className='progress';
  document.body.appendChild(progress);
  const onScroll=()=>{
    const root=document.documentElement;
    const max=root.scrollHeight-root.clientHeight;
    progress.style.transform='scaleX('+(max>0?root.scrollTop/max:0)+')';
    if(nav)nav.classList.toggle('scrolled',root.scrollTop>28);
  };
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();

  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('pointermove',event=>{
      const rect=card.getBoundingClientRect();
      card.style.setProperty('--mx',(event.clientX-rect.left)+'px');
      card.style.setProperty('--my',(event.clientY-rect.top)+'px');
    });
  });

  const form=document.querySelector('#contactForm');
  const status=document.querySelector('#formStatus');
  if(form){
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      if(status)status.textContent='Sending…';
      try{
        const response=await fetch(form.action,{
          method:'POST',
          body:new FormData(form),
          headers:{'Accept':'application/json'}
        });
        if(!response.ok)throw new Error('Submission failed');
        form.reset();
        if(status)status.textContent='Sent — thank you. I’ll get back to you soon.';
      }catch(error){
        if(status)status.textContent='The form could not send right now. Please email me directly instead.';
      }
    });
  }
});