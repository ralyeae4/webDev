function hideResults() {
    document.getElementById("results").style.display = "none"; //hides the results section
}

function play() {
    var startingBet = document.getElementById("initial").value; // reads in inital bet

    if(startingBet <= 0){
      window.alert("You must not enter a negative number or zero!"); //doesnt allow zero or negative
      return false;
    }
    else{
    var bet = startingBet;
    var betsArray = [];

    while (bet > 0) {
      var dice1 = Math.floor(Math.random() * 6) + 1;//die roll
      var dice2 = Math.floor(Math.random() * 6) + 1;//die roll
      var diceRoll = dice1 + dice2;

        if(diceRoll != 7) { // checks for win or lose
            bet -= 1
        } else {
            bet += 4
        }
        betsArray.push(bet)
    }
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//this section generated and outputs the results to the screen
    var rollCounter = betsArray.length;
    var highestAmount = Math.max.apply(Math, betsArray);
    var highestPosition = betsArray.indexOf(highestAmount);
    var rollsFromHighest = rollCounter - highestPosition;

    function showResults() {
    document.getElementById("results").style.display = "inline";
    document.getElementById("play_button").innerHTML = "Play Again";
    document.getElementById("result_bet").innerHTML = "$" + startingBet +".00";
    document.getElementById("result_roll_counter").innerHTML = rollCounter;
    document.getElementById("result_highest_held").innerHTML = "$" +     highestAmount + ".00";
    document.getElementById("result_rolls_from_highest").innerHTML = rollsFromHighest;
    };

    showResults();}
}
