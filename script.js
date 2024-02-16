var controller = new ScrollMagic.Controller();

// Define animation for each section
var sections = document.querySelectorAll('.section');
sections.forEach(function (section) {
  var scene = new ScrollMagic.Scene({
    triggerElement: section,
    triggerHook: 0.5, // Adjust triggerHook as needed
    reverse: true, // Animation only happens once
  })
    .setClassToggle(section, 'animation') // Add 'animation' class to section
    //.addIndicators() // Add indicators for debugging
    .addTo(controller);
});
