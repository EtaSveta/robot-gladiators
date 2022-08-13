var playerName = window.prompt("What is your robot's name?");
var playerHealth = 10;
var playerAttack = 10;
var playerMoney = 100;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        //place figh function code block here
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerName for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
            
        }

        //if player chooses to fight then fight
        enemyHealth = enemyHealth - playerAttack;
        //Log the resulting message to the console so we know that it worked
        console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );    
            
        if (enemyHealth <=0) {
                window.alert(enemyName + " has died!");
                //award player money for winning
                playerMoney = playerMoney + 20; 
                //leave while() loop since enemy is dead
                break;

            } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left."); 
            }
            
            //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
            //Log the resulting message to the console so we know that it worked
        console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

            // check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
            break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    }
};
    
 
//function to start a new game
var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i=0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            // reset enemyHealth before starting new fight
            enemyHealth = 50; 
            // use debugger to pause script from running and check what's going on at that moment in the code
            
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            //if we're not at the last enemy at the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {

                //ask the player if they want to shop before the next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                //if yes, take them to the store function
                if (storeConfirm) {
                shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!")
            break;
            }
    }    
    // after the loop ends, player is either out of helth or enemies to fight, so run the endGame function
    endGame();

};    

//function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!")

    //if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job! You've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
    
var shop = function () {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    
    // use switch to carry out action
    switch(shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >=7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20; 
                playerMoney = playerMoney - 7; 
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;


        case "upgrade":
            case "UPGRADE":
            if (playerMoney >=7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars")    ;

            //increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store");
            //do nothing so function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop() again to force player to pick a valid option
            shop();
            break;
    }

};

//play again
    //startGame();
    


//start the game when the page loads
startGame(); 

