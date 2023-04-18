time = '0.5s';
intervalTime = time * 1000;

function playAnimation() {
    var circles = document.getElementsByClassName('circle');
    for (var i = 0; i < circles.length; i++) {
      var circle = circles[i];
      circle.style.animationName = 'scale' + (i + 1);
      circle.style.animationDuration = time;
      circle.style.animationTimingFunction = 'cubic-bezier(.08,.82,.36,1.11)';
      circle.style.animationPlayState = 'running';
  
      // Remove class after animation has ended
      circle.addEventListener('animationend', function(event) {
        event.target.classList.remove('play-animation');
        event.target.style.animationName = '';
        event.target.style.animationDuration = '';
        event.target.style.animationTimingFunction = '';
        event.target.style.animationPlayState = '';
      }, { once: true }); // Use "once" option to remove the event listener after it has been triggered once
    }
}

window.onload = function() {
    infiniteAnimation();
};
function infiniteAnimation() {

    setInterval(function() {
        playAnimation();
    }, intervalTime);
}