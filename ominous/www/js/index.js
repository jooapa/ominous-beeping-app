let timeNum = 1;
let time = timeNum + "s";
let intervalTime = timeNum * 1000;
var circles = document.getElementsByClassName('circle');

function playAnimation(time) {
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    circle.style.animationName = 'scale' + (i + 1);
    circle.style.animationDuration = time;
    circle.style.animationTimingFunction = 'cubic-bezier(.08,.82,.36,1.11)';
    // circle.style.animationPlayState = 'running';
    circle.style.animationIterationCount = 'infinite'; // Set animation iteration count to 'infinite'
  }

    // Remove class after animation has ended
    // circle.addEventListener('animationend', function(event) {
    //   event.target.classList.remove('play-animation');
    //   event.target.style.animationName = '';
    //   event.target.style.animationDuration = '';
    //   event.target.style.animationTimingFunction = '';
    //   event.target.style.animationPlayState = '';
}


window.onload = function() {
  playAnimation(time);
};
function setTime(x) {
  let timeNum = x;
  let time = timeNum + "s";
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    circle.style.animationDuration = time;
  }
}


document.getElementById("startButton").addEventListener("click", function() {
  var icon = this.querySelector("i");
  if (icon.classList.contains("play")) {
    // Switch to pause icon
    icon.classList.remove("play");
    icon.classList.add("pause");
  } else {
    // Switch to play icon
    icon.classList.remove("pause");
    icon.classList.add("play");
  }
});


