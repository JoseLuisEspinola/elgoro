// ======================================
// NAVBAR SCROLLED
// ======================================

const navbar =
document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

});

// ======================================
// GALERIA 1
// HORIZONTAL STICKY
// ======================================

const wrapper =
document.querySelector('.horizontal-wrapper');

const track =
document.querySelector('.horizontal-track');

function horizontalGallery() {

  if (!wrapper || !track) return;

  const rect =
  wrapper.getBoundingClientRect();

  const maxMove =
  track.scrollWidth - window.innerWidth;

  const progress =
  Math.min(
    Math.max(
      (-rect.top) /
      (wrapper.offsetHeight - window.innerHeight),
      0
    ),
    1
  );

  track.style.transform =
  `translateX(-${progress * maxMove}px)`;
}

window.addEventListener(
  'scroll',
  horizontalGallery
);

window.addEventListener(
  'resize',
  horizontalGallery
);

// ======================================
// GALERIA 2
// REVEAL CARDS
// ======================================

const revealCards =
document.querySelectorAll('.reveal-card');

const revealObserver =
new IntersectionObserver(
(entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('show');

      revealObserver.unobserve(
        entry.target
      );

    }

  });

},
{
  threshold: 0.2
});

revealCards.forEach(card => {

  revealObserver.observe(card);

});

// ======================================
// ANIMACION SUAVE SECCIONES
// ======================================

const animatedSections =
document.querySelectorAll(
'.experiencias, .nosotros, .servicios, .testimonios'
);

animatedSections.forEach(section => {

  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition =
  'all 1s ease';

});

const sectionObserver =
new IntersectionObserver(
(entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = '1';

      entry.target.style.transform =
      'translateY(0)';

      sectionObserver.unobserve(
        entry.target
      );

    }

  });

},
{
  threshold: 0.15
});

animatedSections.forEach(section => {

  sectionObserver.observe(section);

});

// ======================================
// MASONRY HOVER EFFECT
// ======================================

const masonryImages =
document.querySelectorAll('.masonry img');

masonryImages.forEach(img => {

  img.addEventListener(
    'mouseenter',
    () => {

      img.style.filter =
      'brightness(1.05) saturate(1.1)';

    }
  );

  img.addEventListener(
    'mouseleave',
    () => {

      img.style.filter =
      'brightness(1) saturate(1)';

    }
  );

});

// ======================================
// SMOOTH ANCHOR LINKS
// ======================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener(
    'click',
    function(e){

      e.preventDefault();

      const target =
      document.querySelector(
        this.getAttribute('href')
      );

      if(!target) return;

      target.scrollIntoView({
        behavior:'smooth',
        block:'start'
      });

    }
  );

});

// ======================================
// HERO PARALLAX SUAVE
// ======================================

const hero =
document.querySelector('.hero');

window.addEventListener('scroll', () => {

  const scroll =
  window.pageYOffset;

  if(hero){

    hero.style.backgroundPositionY =
    `${scroll * 0.4}px`;

  }

});

// ======================================
// FORMULARIO DEMO
// ======================================

const form =
document.querySelector('.contact-form');

if(form){

  form.addEventListener(
    'submit',
    (e) => {

      e.preventDefault();

      alert(
        'Consulta enviada (demo).'
      );

      form.reset();

    }
  );

}

// ======================================
// INICIO
// ======================================

horizontalGallery();