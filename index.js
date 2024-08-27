function handleClick() {// for pressing buttons
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

}

function makeSound(key) { //function for making sound
    switch (key) {
        case "w":
            var audiow = new Audio("./sounds/tom-1.mp3");
            audiow.play();
            break;
        case "a":
            var audio_a = new Audio("./sounds/tom-2.mp3");
            audio_a.play();
            break;
        case "s":
            var audio_s = new Audio("./sounds/tom-3.mp3");
            audio_s.play();
            break;
        case "d":
            var audio_d = new Audio("./sounds/tom-4.mp3");
            audio_d.play();
            break;
        case "j":
            var audio_j = new Audio("./sounds/snare.mp3");
            audio_j.play();
            break;
        case "k":
            var audio_k = new Audio("./sounds/crash.mp3");
            audio_k.play();
            break;
        case "l":
            var audio_l = new Audio("./sounds/kick-bass.mp3");
            audio_l.play();
            break;
        default:
            break;
    }
}

var a = document.querySelectorAll(".drum");
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", handleClick);
};
document.addEventListener("keydown", function(event){
    makeSound(event.key);// for detecting keyboard press
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}
