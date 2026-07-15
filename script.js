// Shared across all tutorial site pages
function toggleNav(){
  document.querySelector('.site-nav').classList.toggle('open');
}
function toggleFaq(item){
  var wasOpen = item.classList.contains('open');
  // Close any other open item in the same list for a cleaner single-open accordion
  item.parentElement.querySelectorAll('.faq-item.open').forEach(function(el){
    if(el !== item) el.classList.remove('open');
  });
  item.classList.toggle('open', !wasOpen);
}

// Setup page: highlight the active step in the side rail as the user scrolls
document.addEventListener('DOMContentLoaded', function(){
  var steps = document.querySelectorAll('.setup-step[id]');
  var railLinks = document.querySelectorAll('.step-rail a');
  if(!steps.length || !railLinks.length) return;

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var id = entry.target.id;
        railLinks.forEach(function(link){
          link.classList.toggle('active', link.getAttribute('href') === '#'+id);
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  steps.forEach(function(step){ observer.observe(step); });
});

// Video tap-to-pause / tap-to-resume
// Works for all <video> elements on any page — no per-element onclick needed.
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('video').forEach(function(video){
    // Wrap the video in a relative-positioned container so the overlay can sit on top
    var wrapper = document.createElement('div');
    wrapper.className = 'video-wrapper';
    video.parentNode.insertBefore(wrapper, video);
    wrapper.appendChild(video);

    // Overlay — hidden while playing, shows play icon when paused
    var overlay = document.createElement('div');
    overlay.className = 'video-overlay';
    overlay.innerHTML = '<div class="video-overlay-icon">&#9654;</div>';
    wrapper.appendChild(overlay);

    wrapper.addEventListener('click', function(){
      if(video.paused){
        video.play();
      } else {
        video.pause();
      }
    });

    // Keep overlay in sync with actual play/pause state
    video.addEventListener('pause', function(){ overlay.classList.add('visible'); });
    video.addEventListener('play',  function(){ overlay.classList.remove('visible'); });
  });
});
