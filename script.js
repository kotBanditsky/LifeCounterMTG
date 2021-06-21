let roundcounter = 1;
document.getElementById("displaytext").innerHTML  =  "\nRound " + roundcounter + " started\n";

let buttons = document.getElementsByTagName("button"); 
for (var i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function(event) {
        buttonsControl(event.target);
   }, false);
}

let counterAction = 0;
let counterRock = 0;
let counterWood = 0;
let counterTomato = 0;
let counterCoin = 0;

let actionPlus = document.querySelector('.action');
let rockPlus = document.querySelector('.rock');
let woodPlus = document.querySelector('.wood');
let tomatoPlus = document.querySelector('.tomato');
let coinPlus = document.querySelector('.coin');

function buttonsControl(button) {

    switch (button.className) {
        case 'action':
            counterAction++;
            button.textContent = counterAction;
            document.getElementById("displaytext").innerHTML  +=  "+1 action point\n";
            break;
        case 'rock':
            counterRock++;
            button.textContent = counterRock;
            document.getElementById("displaytext").innerHTML  +=  "+1 rock point\n";
            break;
        case 'tomato':
            counterTomato++;
            button.textContent = counterTomato;
            document.getElementById("displaytext").innerHTML  +=  "+1 tomato point\n";
            break;
        case 'wood':
            counterWood++;
            button.textContent = counterWood;
            document.getElementById("displaytext").innerHTML  +=  "+1 wood point\n";
            break;
        case 'coin':
            counterCoin++;
            button.textContent = counterCoin;
            document.getElementById("displaytext").innerHTML  +=  "+1 coin point\n";
            break;
        case 'action-plus':
            counterAction--;
            actionPlus.textContent = counterAction;
            document.getElementById("displaytext").innerHTML  +=  "-1 action point\n";
            break;
        case 'rock-plus':
            counterRock--;
            rockPlus.textContent = counterRock;
            document.getElementById("displaytext").innerHTML  +=  "-1 rock point\n";
            break;    
        case 'tomato-plus':
            counterTomato--;
            tomatoPlus.textContent = counterTomato;
            document.getElementById("displaytext").innerHTML  +=  "-1 tomato point\n";
            break;
        case 'wood-plus':
            counterWood--;
            woodPlus.textContent = counterWood;
            document.getElementById("displaytext").innerHTML  +=  "-1 wood point\n";
            break; 
        case 'coin-plus':
            counterCoin--;
            coinPlus.textContent = counterCoin;
            document.getElementById("displaytext").innerHTML  +=  "-1 coin point\n";
            break;                
    };
}

// reset all for new round

let reset = document.querySelector('.reset');
reset.addEventListener("click", resetForm);

function resetForm() {
  
     roundcounter++;

     counterAction = 0;
     counterRock = 0;
     counterTomato = 0;
     counterWood = 0;
     counterCoin = 0;

     actionPlus.textContent = counterAction;
     rockPlus.textContent = counterRock;
     tomatoPlus.textContent = counterTomato;
     woodPlus.textContent = counterWood;
     coinPlus.textContent = counterCoin;

     document.getElementById("displaytext").innerHTML  +=  "Round " + roundcounter + " started\n";
     document.getElementById("round").innerHTML  =  roundcounter;

}