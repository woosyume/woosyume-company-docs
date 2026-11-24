const filters = document.querySelector('.filters');
const cards = Array.from(document.querySelectorAll('[data-platform]'));
const status = document.getElementById('filter-status');

filters.hidden = false;
filters.addEventListener('click', (event) => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected) return;

  const platform = selected.dataset.filter;
  for (const button of filters.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button === selected));
  }
  let visible = 0;
  for (const card of cards) {
    card.hidden = platform !== 'all' && card.dataset.platform !== platform;
    if (!card.hidden) visible++;
  }
  status.textContent = visible === 1 ? '1 app shown.' : visible + ' apps shown.';
});
