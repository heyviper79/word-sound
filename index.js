var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "o":
        var power = new Audio("sounds/power.mp3");
        power.play();
        break;
    case "h":
      var horn = new Audio("sounds/horn.mp3");
      horn.play();
      break;
    case "p":
      var pop = new Audio("sounds/pop.mp3");
      pop.play();
      break;
      case "n":
        var nikal = new Audio("sounds/nikal.mp3");
        nikal.play();
        break;
  

    case "m":
      var manikadi = new Audio("sounds/manikadi.mp3");
      manikadi.play();
      break;


    case "a":
      var ashwini = new Audio("sounds/ashwini.mp3");
      ashwini.play();
      break;
    case "d":
      var dada = new Audio('sounds/dada.mp3');
      dada.play();
      break;

    case "j":
      var  high = new Audio('sounds/high.mp3');
      high.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var  comp = new Audio('sounds/comp.mp3');
      comp.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
