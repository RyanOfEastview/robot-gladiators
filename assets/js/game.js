//var playerName = 'Ollie-tron';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Tou can also log multpile values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function () {
  //alerts the user that the round is starting
  window.alert("Welcome to Robot Gladiators!");


  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");

  //if the player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    //subtract value of player attack from enemy health
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ".  " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemys health
    if(enemyHealth <=0) {
      window.alert(enemyName + " has died");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + "left.");
    }

    //subtract enemy attack from player health
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ".  " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check players health
    if (playerHealth <=0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you would like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight.  Goodbye!");
    //subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
    } 
    //if no(false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  } else {
      window.alert("You need to pick a valid option.  Try again!");
  }
}; //end of fight function

//run fight function to start game
fight();
