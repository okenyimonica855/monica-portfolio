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
