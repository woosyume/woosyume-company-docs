// Give even a quick tap a full downstroke and release before leaving the page.
const appKeys = document.querySelector('.keys');
let openingProduct = false;

appKeys.addEventListener('click', (event) => {
  const key = event.target.closest('a.key[href]');
  if (!key || event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  event.preventDefault();
  if (openingProduct) return;
  openingProduct = true;
  key.classList.add('is-pressed');

  requestAnimationFrame(() => {
    setTimeout(() => {
      key.classList.remove('is-pressed');
      setTimeout(() => window.location.assign(key.href), 110);
    }, 100);
  });
});

window.addEventListener('pageshow', () => { openingProduct = false; });
