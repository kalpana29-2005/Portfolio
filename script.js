const root=document.documentElement;const themeBtn=document.getElementById('themeToggle');
const saved=localStorage.getItem('kb-theme');const preferred=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
function setTheme(t){root.dataset.theme=t;themeBtn.textContent=t==='dark'?'☀':'☾';localStorage.setItem('kb-theme',t)}setTheme(saved||preferred);
themeBtn.addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark'));
const menu=document.getElementById('navLinks');document.getElementById('menuToggle').addEventListener('click',()=>menu.classList.toggle('open'));menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
