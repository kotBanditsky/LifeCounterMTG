let actionNumber = document.querySelector('.count-action');
let rockNumber = document.querySelector('.count-rock');
let tomatoNumber = document.querySelector('.count-tomato');
let woodNumber = document.querySelector('.count-wood');
let coinNumber = document.querySelector('.count-coin');

let counterAction = 0;
let counterRock = 0;
let counterTomato = 0;
let counterWood = 0;
let counterCoin = 0;

let roundCounter = 1;

// add base resources

let action = document.querySelector('.action');
action.addEventListener("click", function(){ counter(1);}); 

let rock = document.querySelector('.rock');
rock.addEventListener("click", function(){ counter(2);}); 

let tomato = document.querySelector('.tomato');
tomato.addEventListener("click", function(){ counter(3);}); 

let wood = document.querySelector('.wood');
wood.addEventListener("click", function(){ counter(4);}); 

let coin = document.querySelector('.coin');
coin.addEventListener("click", function(){ counter(5);}); 

let actiondel = document.querySelector('.actionDel');
actiondel.addEventListener("click", function(){ counter(10);});

// delete resources

let rockdel = document.querySelector('.rockDel');
rockdel.addEventListener("click", function(){ counter(6);}); 

let tomatodel = document.querySelector('.tomatoDel');
tomatodel.addEventListener("click", function(){ counter(7);}); 

let wooddel = document.querySelector('.woodDel');
wooddel.addEventListener("click", function(){ counter(8);}); 

let coindel = document.querySelector('.coinDel');
coindel.addEventListener("click", function(){ counter(9);}); 

// add resources from plants

let rockdup = document.querySelector('.rockUp');
rockdup.addEventListener("click", function(){ counter(11);}); 

let tomatoup = document.querySelector('.tomatoUp');
tomatoup.addEventListener("click", function(){ counter(12);}); 

let woodup = document.querySelector('.woodUp');
woodup.addEventListener("click", function(){ counter(13);}); 

let coindup = document.querySelector('.coinUp');
coindup.addEventListener("click", function(){ counter(14);}); 

// logic

function counter(int) {

    switch (int) {

// setup base actions & resources

        case 1:
            counterAction++;
            actionNumber.textContent = counterAction;
            document.getElementById("displaytext").innerHTML  +=  "+1 action start point\n";
            break;
        case 2:
            counterRock++;
            rockNumber.textContent = counterRock;
            document.getElementById("displaytext").innerHTML  +=  "+1 rock start point\n";
            break;
        case 3:
            counterTomato++;
            tomatoNumber.textContent = counterTomato;
            document.getElementById("displaytext").innerHTML  +=  "+1 tomato start point\n";
            break;
        case 4:
            counterWood++;
            woodNumber.textContent = counterWood;
            document.getElementById("displaytext").innerHTML  +=  "+1 wood start point\n";
            break;
        case 5:
            counterCoin++;
            coinNumber.textContent = counterCoin;
            document.getElementById("displaytext").innerHTML  +=  "+1 coin start point\n";
            break;

// delete resource command

        case 6:
            if (block.checked) {
                if (counterAction > 0 && counterRock > 0 ) {
                    counterRock--;
                    counterAction--;
                    actionNumber.textContent = counterAction;
                    rockNumber.textContent = counterRock;
                    document.getElementById("displaytext").innerHTML  +=  "-1 action & rock point\n";
                    break;
                } else {
                    console.log("nope");
                    break;
                }
            } else {
                if (counterAction > 0 && counterRock > 0 ) {
                    counterRock--;
                    rockNumber.textContent = counterRock;
                    document.getElementById("displaytext").innerHTML  +=  "-1 action & rock point\n";
                    break;
                } else {
                    console.log("nope");
                    break;
                }
            }
        case 7:
            if (block.checked) {
                if (counterAction > 0  && counterTomato > 0 ) {
                    counterTomato--;
                    counterAction--;
                    actionNumber.textContent = counterAction;
                    tomatoNumber.textContent = counterTomato;
                    document.getElementById("displaytext").innerHTML  +=  "-1 action & tomato point\n";
                    break;
                } else {
                    console.log("nope");
                    break;
                }
            } 
            else {
                if (counterAction > 0  && counterTomato > 0 ) {
                    counterTomato--;
                    tomatoNumber.textContent = counterTomato;
                    document.getElementById("displaytext").innerHTML  +=  "-1 action & tomato point\n";
                    break;
                } else {
                    console.log("nope");
                    break;
                }
            }
        case 8:
            if (block.checked) {
                if (counterAction > 0 && counterWood > 0 ) {
                    counterWood--;
                    counterAction--;
                    actionNumber.textContent = counterAction;
                    woodNumber.textContent = counterWood;
                    document.getElementById("displaytext").innerHTML  +=  "-1 action & wood point\n";
                    break;
                } else {
                    console.log("nope");
                    break;
                }
            } else {
                if (counterAction > 0 && counterWood > 0 ) {
                    counterWood--;
                    woodNumber.textContent = counterWood;
                    document.getElementById("displaytext").innerHTML  +=  "-1 action & wood point\n";
                    break;
                } else {
                    console.log("nope");
                    break;
                }
            }
        case 9:
            if (block.checked) {
                if (counterAction > 0 && counterCoin > 0 ) {
                    counterCoin--;
                    counterAction--;
                    actionNumber.textContent = counterAction;
                    coinNumber.textContent = counterCoin;
                    document.getElementById("displaytext").innerHTML  +=  "-1 action & coin point\n";
                    break;
                } else {
                    console.log("nope");
                    break;
                }
            } else {
                if (counterAction > 0 && counterCoin > 0 ) {
                    counterCoin--;
                    coinNumber.textContent = counterCoin;
                    document.getElementById("displaytext").innerHTML  +=  "-1 action & coin point\n";
                    break;
                } else {
                    console.log("nope");
                    break;
                }
            }
            
// delete action command

        case 10:
            if (counterAction > 0) {
                counterAction--;
                actionNumber.textContent = counterAction;
                document.getElementById("displaytext").innerHTML  +=  "-1 action point\n";
                break;
            } else {
                console.log("nope");
                break;
            }

// add resources from plants command

        case 11:
            if (counterAction > 0) {
                counterRock++;
                counterAction--;
                actionNumber.textContent = counterAction;
                rockNumber.textContent = counterRock;
                document.getElementById("displaytext").innerHTML  +=  "-1 action for 1 garden rock point\n";
                break;
            } else {
                console.log("nope");
                break;
            }
        case 12:
            if (counterAction > 0) {
                counterTomato++;
                counterAction--;
                actionNumber.textContent = counterAction;
                tomatoNumber.textContent = counterTomato;
                document.getElementById("displaytext").innerHTML  +=  "-1 action for 1 garden tomato point\n";
                break;
            } else {
                console.log("nope");
                break;
            }
        case 13:
            if (counterAction > 0) {
                counterWood++;
                counterAction--;
                actionNumber.textContent = counterAction;
                woodNumber.textContent = counterWood;
                document.getElementById("displaytext").innerHTML  +=  "-1 action for 1 garden wood point\n";
                break;
            } else {
                console.log("nope");
                break;
            }
        case 14:
            if (counterAction > 0) {
                counterCoin++;
                counterAction--;
                actionNumber.textContent = counterAction;
                coinNumber.textContent = counterCoin;
                document.getElementById("displaytext").innerHTML  +=  "-1 action for 1 garden coin point\n";
                break;
            } else {
                console.log("nope");
                break;
            }
      }
};

// block basic resources checkbox

let block = document.querySelector('.blockerd');
block.addEventListener("click", blockForm);

function blockForm() {
    if (block.checked) {

        const actionFix = actionNumber.textContent;
        actionNumber.textContent = actionFix;

        action.disabled = 1
        rock.disabled = 1
        coin.disabled = 1
        wood.disabled = 1
        tomato.disabled = 1
        document.getElementById("displaytext").innerHTML  +=  "Round Points Fixed\n";
    }
    else {
        action.disabled = 0
        rock.disabled = 0
        coin.disabled = 0
        wood.disabled = 0
        tomato.disabled = 0
        document.getElementById("displaytext").innerHTML  +=  "Round Points Unfixed\n";
    }
}

// reset all for new round

let reset = document.querySelector('.reset');
reset.addEventListener("click", resetForm);

function resetForm() {
  
     roundCounter++;

     counterAction = 0;
     counterRock = 0;
     counterTomato = 0;
     counterWood = 0;
     counterCoin = 0;

     actionNumber.textContent = counterAction;
     rockNumber.textContent = counterRock;
     tomatoNumber.textContent = counterTomato;
     woodNumber.textContent = counterWood;
     coinNumber.textContent = counterCoin;

     document.getElementById("displaytext").innerHTML  +=  "New " + roundCounter + " Round Start!\n";
     document.getElementById("round").innerHTML  =  roundCounter;

}