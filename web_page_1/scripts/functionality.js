//1 = Rock
//2 = Papper
//3 = Scissors

function Rock() 
{
    var compChoice = 0;
    
    document.getElementById("chosen").src = "images/rock.jpg";
    
    while(compChoice == 0)
        {
            compChoice = Math.round(Math.random() * 3);
        }
    
    if(compChoice == 1)
        {
            document.getElementById("compChoose").src = "images/rock.jpg";
            document.getElementById("standing").textContent = "Its a Draw";
            document.getElementById("standing").style.color = "black";
        }
    else if(compChoice == 2)
        {
            document.getElementById("compChoose").src ="images/paper.jpg";
            
            document.getElementById("standing").textContent = "You Loose :( ";
            
            document.getElementById("standing").style.color = "red";
        }
    else if(compChoice == 3)
        {
            document.getElementById("compChoose").src ="images/scissors.png";
            
            document.getElementById("standing").textContent = "You Win!";
            document.getElementById("standing").style.color = "gold";
        }
}

function Paper() 
{
    var compChoice = 0;
    
    document.getElementById("chosen").src = "images/paper.jpg";
    
    while(compChoice == 0)
        {
            compChoice = Math.round(Math.random() * 3);
        }
    
    if(compChoice == 1)
        {
            document.getElementById("compChoose").src ="images/rock.jpg";
            
            document.getElementById("standing").textContent = "You Win!";
            document.getElementById("standing").style.color = "gold";
        }
    else if(compChoice == 2)
        {
            document.getElementById("compChoose").src ="images/paper.jpg";
            
            document.getElementById("standing").textContent = "Its a Draw.";
            document.getElementById("standing").style.color = "black";
        }
    else if(compChoice == 3)
        {
            document.getElementById("compChoose").src ="images/scissors.png";
            
            document.getElementById("standing").textContent = "You Loose :(";
            document.getElementById("standing").style.color = "red";
        }
}

function Scissors()
{
    var compChoice = 0;
    
    document.getElementById("chosen").src = "images/scissors.png";
    
    while(compChoice == 0)
        {
            compChoice = Math.round(Math.random() * 3);
        }
    
    if(compChoice == 1)
        {
            document.getElementById("compChoose").src ="images/rock.jpg";
            document.getElementById("standing").textContent = "You Loose :(";
            document.getElementById("standing").style.color = "red";
        }
    else if(compChoice == 2)
        {
            document.getElementById("compChoose").src ="images/paper.jpg";
            
            document.getElementById("standing").textContent = "You Win!";
            document.getElementById("standing").style.color = "gold";
        }
    else if(compChoice == 3)
        {
            document.getElementById("compChoose").src ="images/scissors.png";
            document.getElementById("standing").textContent = "Its a Draw.";
            document.getElementById("standing").style.color = "black";
        }
}
