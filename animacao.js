document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('hamburger');
  if (!btn) return;

  // create overlay element
  var overlay = document.createElement('div');
  overlay.id = 'sidebar-overlay';
  document.body.appendChild(overlay);

  btn.addEventListener('click', function () {
    document.body.classList.toggle('sidebar-open');
  });

  overlay.addEventListener('click', function () {
    document.body.classList.remove('sidebar-open');
  });

  // close sidebar on escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') document.body.classList.remove('sidebar-open');
  });

  // Simple mobile sponsors carousel autoplay
  var sponsors = document.querySelector('.sponsors');
  if (sponsors && window.matchMedia('(max-width: 420px)').matches) {
    var autoPlayDelay = 3000;
    var playInterval = setInterval(function () {
      try {
        var maxScroll = sponsors.scrollWidth - sponsors.clientWidth;
        if (Math.abs(sponsors.scrollLeft - maxScroll) < 10) {
          // back to start
          sponsors.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // scroll by card width
          var card = sponsors.querySelector('.sponsor-card');
          var step = (card ? card.clientWidth + 12 : sponsors.clientWidth * 0.8);
          sponsors.scrollBy({ left: step, behavior: 'smooth' });
        }
      } catch (e) { clearInterval(playInterval); }
    }, autoPlayDelay);

    // pause on pointer enter
    sponsors.addEventListener('pointerenter', function () { clearInterval(playInterval); });
  }
});
