// Example: Scroll to section on click
document.addEventListener('DOMContentLoaded', function() {
  var ctaButton = document.querySelector('.app-store-link');
  var featuresSection = document.querySelector('#features');

  ctaButton.addEventListener('click', function(event) {
    event.preventDefault();
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  });
});
