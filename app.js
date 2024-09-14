let usecount= document.querySelector(".usecount");
let userScore = 0;
let compScore = 0;
let compcount = document.querySelector(".cmpcount");
let Mesg = document.querySelector("#Mesg");


let choices = document.querySelectorAll(".choice");

const GenCompChoice = () =>{
    const Options = ["rock","paper","scissor"];
    const ranIdx =  Math.floor(Math.random () * 3);
    return Options[ranIdx];
}

const showWinner = (winner,UserChoice,compchoice) => {
    if (winner){
        userScore++;
        usecount.innerHTML=userScore;
        Mesg.innerText = "You Win";
    }else{
        compScore++;
        compcount.innerHTML= compScore;
        Mesg.innerText =`You Lose! ${compchoice} beat ${UserChoice}`;
    }
}

const playGame = (UserChoice) =>{
    // Generate comuter choi
    const compchoice = GenCompChoice();

    if(UserChoice === compchoice){
        Mesg.innerHTML = "Drow";
    }else{
        let Userwin = true;
        let message;
        if(UserChoice =="rock"){
            Userwin = compchoice ==="paper" ? false : true;
        }else if(UserChoice==="paper"){
            Userwin = compchoice === "scissor" ? false : true;
        }else{
            Userwin = compchoice === "rock" ? false : true;
        }
        showWinner(Userwin ,UserChoice ,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);
    })
})
