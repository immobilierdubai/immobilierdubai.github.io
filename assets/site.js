// Clé de Sable : menu mobile, menus déroulants, sommaire actif
(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('ouvert');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu');});}
  var ds=[].slice.call(document.querySelectorAll('.nav details'));
  ds.forEach(function(d){d.addEventListener('toggle',function(){if(d.open&&window.innerWidth>960)ds.forEach(function(o){if(o!==d)o.open=false;});});});
  document.addEventListener('click',function(e){if(window.innerWidth>960&&!e.target.closest('.nav'))ds.forEach(function(d){d.open=false;});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){ds.forEach(function(d){d.open=false;});if(n)n.classList.remove('ouvert');}});
  var liens=[].slice.call(document.querySelectorAll('.sommaire a'));
  if('IntersectionObserver' in window&&liens.length){
    var map={};liens.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){liens.forEach(function(a){a.classList.remove('actif');});var a=map[e.target.id];if(a)a.classList.add('actif');}});},{rootMargin:'-90px 0px -70% 0px'});
    Object.keys(map).forEach(function(id){var el=document.getElementById(id);if(el)io.observe(el);});
  }
})();
