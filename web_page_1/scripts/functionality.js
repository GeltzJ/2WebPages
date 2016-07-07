//1 = Rock
//2 = Papper
//3 = Scissors

function Rock() 
{
    var compChoice = 0;
    
    while(compChoice == 0)
        {
            compChoice = Math.round(Math.random() * 3);
        }
    
    if(compChoice == 1)
        {
            alert("Draw");
        }
    else if(compChoice == 2)
        {
            alert("You loose");
        }
    else if(compChoice == 3)
        {
            alert("You Win");
        }
}

function Papper() 
{
    var compChoice = 0;
    
    while(compChoice == 0)
        {
            compChoice = Math.round(Math.random() * 3);
        }
    
    if(compChoice == 1)
        {
            alert("You Loose");
        }
    else if(compChoice == 2)
        {
            alert("You Win");
        }
    else if(compChoice == 3)
        {
            alert("Draw");
        }
}

function Scissors()
{
    var compChoice = 0;
    
    while(compChoice == 0)
        {
            compChoice = Math.round(Math.random() * 3);
        }
    
    if(compChoice == 1)
        {
            alert("You Won");
        }
    else if(compChoice == 2)
        {
            alert("Draw");
        }
    else if(compChoice == 3)
        {
            alert("You Loose");
        }
}
