"use strict";

var counter = 1;

function setTimer() {
    setInterval(changeImage, 5000);
}

function changeImage() {
    if (counter > 3) {
        counter = 1;
    }
    document.getElementById("background").src = "alkrakennus" + String(counter) + ".jpg";
    counter += 1;
}