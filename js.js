function getEnemyChoice(){
    var randnum = Math.floor(Math.random() * 4); // random num from 0 to 2

    if (randnum == 0){
        return 'rock';
    }

    else if (randnum == 1){
        return 'scissors';
    }

    else {
        return 'paper';
    }

}

function gameLogic(userChoice, enemyChoice){

    if (userChoice == 'rock' && enemyChoice == 'scissors' || 
        userChoice == 'scissors' && enemyChoice == 'paper' || 
        userChoice == 'paper' && enemyChoice == 'rock'){
            var gameState = 1; // 0 for lose 1 for win 2 for draw    
        }

    else if (userChoice == 'rock' && enemyChoice == 'paper' || 
        userChoice == 'paper' && enemyChoice == 'scissors' || 
        userChoice == 'scissors' && enemyChoice == 'rock'){
            var gameState = 0; // 0 for lose 1 for win 2 for draw
        }
        
    else {
        var gameState = 2; // 0 for lose 1 for win 2 for draw
    }  

    var pcscore = document.getElementById("pc-score").innerHTML;
    var playerscore = document.getElementById("player-score").innerHTML;
    
    /* executes when user loses the game */
    if (gameState == 0){ 
        enemyChoice = enemyChoice.charAt(0).toUpperCase() + enemyChoice.slice(1);

        if (userChoice=="scissors"){
            document.getElementById("result").innerHTML = enemyChoice + " breaks " + userChoice + ". You lose!";
        }

        else if (userChoice=="rock"){
            document.getElementById("result").innerHTML = enemyChoice + " covers " + userChoice + ". You lose!";
        }

        else {
            document.getElementById("result").innerHTML = enemyChoice + " cut " + userChoice + ". You lose!";
        }

        document.getElementById("pc-score").innerHTML = Number(pcscore) + 1; // change score

        /* glow the red color when user loses the game */
        document.getElementById(userChoice).classList.add("red-glow");
        setTimeout(function() { document.getElementById(userChoice).classList.remove("red-glow"); }, 300);

        /* if computer gets 3 points, reset the game */
        if (Number(document.getElementById("pc-score").innerHTML) == 3){
            document.getElementById("player-score").innerHTML = 0;
            document.getElementById("pc-score").innerHTML = 0;
        }
    }

    /* executes if user won the game */
    else if (gameState == 1){ 
        userChoiceCapitalized = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

        if (userChoice=="rock"){
            document.getElementById("result").innerHTML = userChoiceCapitalized + " breaks " + enemyChoice + ". You win!";
        }

        else if (userChoice=="paper"){
            document.getElementById("result").innerHTML = userChoiceCapitalized + " covers " + enemyChoice + ". You win!";
        }

        else {
            document.getElementById("result").innerHTML = userChoiceCapitalized + " cut " + enemyChoice + ". You win!";
        }

        document.getElementById("player-score").innerHTML = Number(playerscore) + 1; // change score

        /* glow the green color when user wins the game */
        document.getElementById(userChoice).classList.add("green-glow");
        setTimeout(function() { document.getElementById(userChoice).classList.remove("green-glow"); }, 300);

        /* if user gets 3 points, reset the game */
        if (Number(document.getElementById("player-score").innerHTML) == 3){
            document.getElementById("player-score").innerHTML = 0;
            document.getElementById("pc-score").innerHTML = 0;
        }

    }
    
    /* executes when user won the game */
    else { 
        userChoiceCapitalized = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        document.getElementById("result").innerHTML = userChoiceCapitalized + " and " + enemyChoice + ". It's a tie!";

        /* glow the gray color when user draws the game */
        document.getElementById(userChoice).classList.add("gray-glow");
        setTimeout(function() { document.getElementById(userChoice).classList.remove("gray-glow"); }, 300);
    }



}

function main(){

    document.getElementById("rock").addEventListener("click", () => gameLogic("rock", getEnemyChoice()) );
    document.getElementById("paper").addEventListener("click", () => gameLogic("paper", getEnemyChoice()) );
    document.getElementById("scissors").addEventListener("click", () => gameLogic("scissors", getEnemyChoice()) );
    
}

main();