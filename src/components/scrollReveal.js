/**
 * Scroll Reveal Animations via IntersectionObserver
 */

export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const messageParagraphs = document.querySelectorAll('.message-paragraph');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve once revealed for performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));

  // Staggered reveal for message paragraphs
  if (messageParagraphs.length > 0) {
    const msgObserverOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };

    const msgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(messageParagraphs).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * 120);
          msgObserver.unobserve(entry.target);
        }
      });
    }, msgObserverOptions);

    messageParagraphs.forEach((p) => msgObserver.observe(p));
  }
}
