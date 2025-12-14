/**
 * MICRO-ANIMACIONES AL SCROLL - ESTILO PREMIUM
 * Animaciones sutiles que se activan al hacer scroll
 * No llamativas, solo "se siente bien"
 */

(function() {
  'use strict';

  // Configuración
  const config = {
    threshold: 0.1, // 10% visible para activar
    rootMargin: '0px 0px -50px 0px', // Offset para activación
    animationDelay: 100, // ms entre elementos
  };

  // Inicializar Intersection Observer
  const observerOptions = {
    threshold: config.threshold,
    rootMargin: config.rootMargin
  };

  // Callback cuando el elemento es visible
  function handleIntersection(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Agregar delay escalonado
        const delay = index * config.animationDelay;

        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);

        // Dejar de observar el elemento
        observer.unobserve(entry.target);
      }
    });
  }

  // Crear observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Función de inicialización
  function initScrollAnimations() {
    // Seleccionar elementos a animar
    const animatedElements = document.querySelectorAll(`
      .product-card-ml,
      .category-card-ml,
      .benefit-card-ml,
      .promo-banner,
      .featured-collection-ml__header,
      .categories-ml__header,
      .image-anchor-ml__content,
      .hero-slide__content
    `);

    // Agregar clase inicial y observar
    animatedElements.forEach((element, index) => {
      element.classList.add('scroll-animate');
      observer.observe(element);
    });
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }

  // Re-inicializar cuando se carguen nuevos productos (infinite scroll, etc)
  document.addEventListener('shopify:section:load', initScrollAnimations);

})();
