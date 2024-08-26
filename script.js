let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
let reset = document.querySelector(".reset");

const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>
{
    msg.innerText = ("Game was draw.");
    msg.style.backgroundColor = "black";
}
const showWinner = (userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText =userScore;
        msg.innerText = (`You won! Your ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText =compScore;
        msg.innerText = (`You lose.Your ${compChoice} beats your ${userChoice}`);
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => 
{
    console.log("user choice is",userChoice);

    const compChoice = genCompChoice();
    console.log("comp choice is",compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "scissors" ? true : false;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "rock" ? true : false;
        }
        else
        {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const resetGame = () =>
{
    userScorePara.innerText = "0";
    compScorePara.innerText ="0";
    msg.innerText = "Play your move.";
    msg.style.backgroundColor = "black";
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

reset.addEventListener("click",resetGame);