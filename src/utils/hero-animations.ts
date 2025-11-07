const initHeroAnimations = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);

  const observeElements = () => {
    const elements = document.querySelectorAll('.fade-in, .partners, .partner');
    if (elements.length > 0) {
      elements.forEach((el) => {
        observer.observe(el);
      });
    } else {
      requestAnimationFrame(observeElements);
    }
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(observeElements);
  });

  let rafId: number | null = null;
  let lastScrollY = window.scrollY;
  let velocity = 0;
  const friction = 0.85;

  const updateParallax = () => {
    const scrollY = window.scrollY;
    const delta = scrollY - lastScrollY;
    velocity = velocity * friction + delta * 0.1;

    document.querySelectorAll('.parallax-element').forEach((el) => {
      const element = el as HTMLElement;
      const speed = parseFloat(element.dataset.speed || '0.5');
      const y = scrollY * speed;
      element.style.transform = `translate3d(0, ${y}px, 0)`;
    });

    lastScrollY = scrollY;
    rafId = requestAnimationFrame(updateParallax);
  };

  const handleScroll = () => {
    if (rafId === null) {
      rafId = requestAnimationFrame(updateParallax);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  updateParallax();

  let glitchTimeout: number | null = null;
  const glitchInterval = 8000 + Math.random() * 12000;

  const triggerGlitch = () => {
    const glitchElements = document.querySelectorAll('.glitch-text');
    if (glitchElements.length > 0) {
      const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
      randomElement.classList.add('glitch-active');
      setTimeout(() => {
        randomElement.classList.remove('glitch-active');
      }, 300);
    }
    glitchTimeout = window.setTimeout(triggerGlitch, glitchInterval);
  };

  const initGlitch = () => {
    if (document.querySelectorAll('.glitch-text').length > 0) {
      setTimeout(triggerGlitch, glitchInterval);
    } else {
      setTimeout(initGlitch, 100);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlitch);
  } else {
    initGlitch();
  }
};

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroAnimations);
  } else {
    initHeroAnimations();
  }
}

