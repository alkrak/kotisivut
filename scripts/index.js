"use strict";

// Start animations on load.
window.addEventListener("DOMContentLoaded", animate(), false);

function animationListeners(imgs, fadeAnimation) {
  /*
  Add event listeners for images for animationend event. 
  */
  for(var i=0; i < imgs.length; i++) {
    imgs[i].addEventListener("animationend", fadeAnimation, false);
  }
}



function animate() {
  /*
  Change the first picture to the last in the div element. 
  */
    var stage = document.getElementById("slideshow");
    function firstToLast() { stage.appendChild(imgs[0]); };
    var imgs = stage.getElementsByTagName("img");
    animationListeners(imgs, firstToLast);
}