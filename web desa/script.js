// script.js
// Fungsional kecil: tahun otomatis, mobile nav toggle, smooth scroll

document.addEventListener('DOMContentLoaded', function(){
    // Tahun footer
    const y = new Date().getFullYear();
    const elYear = document.getElementById('year');
    if(elYear) elYear.textContent = y;
  
    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navList = document.querySelector('.nav-list');
    navToggle && navToggle.addEventListener('click', function(){
      if(!navList) return;
      const isShown = navList.style.display === 'flex';
      navList.style.display = isShown ? 'none' : 'flex';
    });
  
    // close mobile menu on link click
    document.querySelectorAll('.nav-list a').forEach(a=>{
      a.addEventListener('click', function(){
        if(window.innerWidth <= 700 && navList){
          navList.style.display = 'none';
        }
      });
    });
  
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
      anchor.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href.length === 1) return;
        e.preventDefault();
        const target = document.querySelector(href);
        if(!target) return;
        window.scrollTo({
          top: target.offsetTop - 70, // offset for sticky header
          behavior: 'smooth'
        });
      });
    });
  
    // Optional: simple reveal on scroll for sections
    const sections = document.querySelectorAll('.section');
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('inview');
      });
    }, {threshold: 0.18});
    sections.forEach(s=>obs.observe(s));
  });
  