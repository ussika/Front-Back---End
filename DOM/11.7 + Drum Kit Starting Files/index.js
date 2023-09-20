// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i< numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

	var buttonInnerHTML = this.innerHTMl;
	makeSound(buttonInnerHTML);
	
	});
	
	}
	
// Detecting Keyboard press
	
	document.addEventListener("keypress", function(event){
		makeSound(event.key);
		
	});
	
	function makeSound(key) {
	
		switch (key){
		case "w":
	var tom1 = new Audio("sound/tom-1.mp3");
	tom1.play();
		break;
        
        case "a" :
	var tom2 = new Audio("sound/tom-2.mp3");
	tom2.play();
	break;

        case "s" :
        var tom3 = new Audio("sound/tom-3.mp3");
        tom3.play();
        break;

        case "d" :
	var tom4 = new Audio("sound/tom-4.mp3");
	tom4.play();
	break;

        case "j" :
	var snare = new Audio("sound/snare.mp3");
	snare.play();
	break;

        case "k" :
        var crash = new Audio("sound/crash.mp3");
        crash.play();
        break;

        case "l" :
        var kick = new Audio("sound/kick-bass.mp3");
        kick.play();
        break;
	
        default
		}

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for(i = 0; i < numberOfDrumButtons; i++){

// 	document.querySelectorAll(".drum")[i].addEventListener("click", function(){
	
//         // console.log(this.innerHTML);

//         var buttonInnerHTML = this.innerHTML;	

// 	switch (buttonInnerHTML){
// 	case "w":
// 	var tom1 = new Audio("sound/tom-1.mp3");
// 	tom1.play();
// 		break;
        
//         case "a" :
// 	var tom2 = new Audio("sound/tom-2.mp3");
// 	tom2.play();
// 	break;

//         case "s" :
//         var tom3 = new Audio("sound/tom-3.mp3");
//         tom3.play();
//         break;

//         case "d" :
// 	var tom4 = new Audio("sound/tom-4.mp3");
// 	tom4.play();
// 	break;

//         case "j" :
// 	var snare = new Audio("sound/snare.mp3");
// 	snare.play();
// 	break;

//         case "k" :
//         var crash = new Audio("sound/crash.mp3");
//         crash.play();
//         break;

//         case "l" :
//         var kick = new Audio("sound/kick-bass.mp3");
//         kick.play();
//         break;


// 	default:console.log();
// 	}

// 	});
// }

// addEventListener("keypress", function() {
// 	alert("key was presses!");
// });

//     switch (expression){
// 		case expression:
		
// 		break;
// 		default:
// 		}
//         this.style.color = "white";

// var audio = new Audio("sound/tom-1.mp3");
// audio.play();