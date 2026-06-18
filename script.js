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
