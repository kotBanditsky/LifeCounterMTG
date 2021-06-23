let counterClickA = 0;
let counterClickB = 0;

let clickCounterA = document.querySelector('.counter-one');
let clickCounterB = document.querySelector('.counter-two');

let buttons = document.getElementsByTagName("button"); 

for (var i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function(event) {
        buttonsControl(event.target);
        counterClick(event.target);
   }, false);
}

let counterA = 20;
let counterB = 20;

let NumberA = document.querySelector('.number-one');
let oneCircleA = document.querySelector('.circle-one');
let twoCircleA = document.querySelector('.circle-one-second');
let treCircleA = document.querySelector('.circle-one-third');

let NumberB = document.querySelector('.number-two');
let oneCircleB = document.querySelector('.circle-two');
let twoCircleB = document.querySelector('.circle-two-second');
let treCircleB = document.querySelector('.circle-two-third');

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");

let plus = document.querySelectorAll('.plus');
let minus = document.querySelectorAll('.minus');

function buttonsControl(button) {

    let clickerColorDark = getDarkRandomColor();
    let clickerColorLight = getLightRandomColor();

    switch (button.className) {
        case 'plus-one':
            counterA++;
            NumberA.textContent = counterA;
            soundClick();
            animateClickA();
            clickCounterA.classList.add('invisible');
            NumberA.style.color = clickerColorDark;
            color1.style.backgroundColor = clickerColorDark;
            plus[0].style.backgroundColor = clickerColorLight;
            minus[0].style.backgroundColor = clickerColorLight;
            oneCircleA.style.backgroundColor = clickerColorLight;
            twoCircleA.style.backgroundColor = clickerColorLight;
            treCircleA.style.backgroundColor = clickerColorLight;
            break;
        case 'minus-one':
            counterA--;
            NumberA.textContent = counterA;
            soundClick();
            animateClickA();
            clickCounterA.classList.add('invisible');
            NumberA.style.color = clickerColorDark;
            color1.style.backgroundColor = clickerColorDark;
            plus[0].style.backgroundColor = clickerColorLight;
            minus[0].style.backgroundColor = clickerColorLight;
            oneCircleA.style.backgroundColor = clickerColorLight;
            twoCircleA.style.backgroundColor = clickerColorLight;
            treCircleA.style.backgroundColor = clickerColorLight;
            break;
        case 'plus-two':
            counterB++;
            NumberB.textContent = counterB;
            soundClick();
            animateClickB();
            clickCounterB.classList.add('invisible');
            NumberB.style.color = clickerColorDark;
            color2.style.backgroundColor =  clickerColorDark;
            plus[1].style.backgroundColor = clickerColorLight;
            minus[1].style.backgroundColor = clickerColorLight;
            oneCircleB.style.backgroundColor = clickerColorLight;
            twoCircleB.style.backgroundColor = clickerColorLight;
            treCircleB.style.backgroundColor = clickerColorLight;
            break;
        case 'minus-two':
            counterB--;
            NumberB.textContent = counterB;
            soundClick();
            animateClickB();
            clickCounterB.classList.add('invisible');
            NumberB.style.color = clickerColorDark;
            color2.style.backgroundColor = clickerColorDark;
            plus[1].style.backgroundColor = clickerColorLight;
            minus[1].style.backgroundColor = clickerColorLight;
            oneCircleB.style.backgroundColor = clickerColorLight;
            twoCircleB.style.backgroundColor = clickerColorLight;
            treCircleB.style.backgroundColor = clickerColorLight;
            break;
    };
}

function soundClick() {
    var audio = new Audio('sound/click.mp4');
    audio.play();
}

function animateClickA() {
        oneCircleA.classList.add('animate-circle');
        twoCircleA.classList.add('animate-circle-two');
        treCircleA.classList.add('animate-circle-two');

        elements = document.querySelectorAll('.anima');
        
            for (let item of elements) {
                item.addEventListener('animationend', function() {
                    item.classList.remove('animate-circle');
                    item.classList.remove('animate-circle-two');
                    item.classList.remove('animate-circle-two');
                }); 
            }
}

function animateClickB() {
        oneCircleB.classList.add('animate-circle');
        twoCircleB.classList.add('animate-circle-two');
        treCircleB.classList.add('animate-circle-two');

        elements = document.querySelectorAll('.anima');
        
            for (let item of elements) {
                item.addEventListener('animationend', function() {
                    item.classList.remove('animate-circle');
                    item.classList.remove('animate-circle-two');
                    item.classList.remove('animate-circle-two');
                }); 
            }
}

function getDarkRandomColor() {
    color = "hsl(" + Math.random() * 360 + ", 60%, 15%)";
    return color;
}

function getLightRandomColor() {
    color = "hsl(" + Math.random() * 360 + ", 60%, 75%)";
    return color;
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }