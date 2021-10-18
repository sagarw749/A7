

// Phase_1
function getUserChoice()
{
    var userChoice = window.prompt("Select your choice (Rock/Paper/Scissors)");
    if(userChoice === "Rock" || userChoice === "Paper" || userChoice === "scissors")
    {
        return userChoice;
    }
    else
    {
       window.alert("Invalid input");
    }
}

// Phase_2
function getComputerChoice()
{
    var computerChoice =  Math.floor(Math.random() * 3);
    switch(computerChoice)
    {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;  
         case 2:
            return "Scissors";
            break;        
    };
}

// Phase_3
function gameWinner()
{
    var computerChoice = getComputerChoice();
    var userChoice = getUserChoice();
         
    if(userChoice === computerChoice )
    {
        alert("Game is tie");
    }
    else if(userChoice === "Rock")
    {
        if(computerChoice === "Scissors")
	{
            alert("You've won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice);
        }
        else if(computerChoice === "Paper"){
            alert("Computer won!"  + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice);
        }
              
    }
    else if(userChoice === "Scissors")
    {
         if(computerChoice === "Paper")
	  {
            alert("You've won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice);
          }
        else if(computerChoice === "Rock")
	  {
            alert("Computer won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice);
          }
    }
    else if(userChoice === "Paper")
    {
        if(computerChoice === "Rock")
	{
            alert("You won!" + " your choice is: " + userChoice + "  & Computer Choice is: " + computerChoice);
        }
        else if(computerChoice === "Scissors")
	{
            alert("Computer won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice);
        }      
    }

}

// To play again
function play()
{
    do
    {
       gameWinner();
       var playAgain = window.confirm("Play Again?") ;
    }while(playAgain);
}
play();



