(function() {
  if (!window.location.pathname.startsWith('/scenes/')) return;

  function createSpriteToggle() {
    const poster = document.querySelector('.vjs-poster');
    if (!poster) return;
    const scrubberItem = document.querySelector('.scrubber-item');
    if (!scrubberItem) return;
    if (poster.querySelector('button[data-toggle-sprite]')) return;

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.innerHTML = 'TOGGLE SPRITE';
    toggleBtn.style.padding = '1em';
    toggleBtn.setAttribute('data-toggle-sprite', 'true');

    const posterUrl = poster.style.backgroundImage;
    const spriteUrl = scrubberItem.style.backgroundImage;
    let toggle = false;
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      poster.style.backgroundImage = toggle ? posterUrl : spriteUrl;
      toggle = !toggle;
    });
    poster.appendChild(toggleBtn);
  }

  const observer = new MutationObserver(() => {
    createSpriteToggle();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  createSpriteToggle();
})();
