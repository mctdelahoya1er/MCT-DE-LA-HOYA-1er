// Menu mobile
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  navToggle.addEventListener('click', () => navList.classList.toggle('open'));

  // Générer les barres de forme d'onde (divider + mini players) de façon déterministe
  function buildWave(el, count, minH, maxH){
    for(let i=0;i<count;i++){
      const bar = document.createElement('span');
      const h = minH + Math.abs(Math.sin(i*0.7))*(maxH-minH);
      bar.style.height = h+'px';
      el.appendChild(bar);
    }
  }
  document.querySelectorAll('.wave-divider').forEach(el => buildWave(el, 60, 4, 30));
  document.querySelectorAll('[data-wave]').forEach(el => buildWave(el, 24, 4, 18));

  // FAQ accordéon
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if(!isOpen) item.classList.add('open');
    });
  });
