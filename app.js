const btn = document.querySelectorAll("button");
let user;
let userChoice = document.getElementById("userChoice");
let result = document.getElementById("result");
let computerChoice = document.getElementById("computerChoice");
let arr = [];
let num;

btn.forEach(am => am.addEventListener("click" ,(e) => {
    user = e.target.id
    userChoice.innerHTML = user;
    getData();
    resultDel();
}))

function getData() {
    arr = ["stone" , "paper" , "scissor"];
    num = Math.floor(Math.random() * 3) ;
    console.log(num);
    computerChoice.innerHTML = arr[num];
}

function resultDel() {
    if (arr[num] == "stone" && user == "stone" ) {
        result.innerHTML = "Draw";
    }
    if (arr[num] == "paper" && user == "paper" ) {
        result.innerHTML = "Draw";
    }
    if (arr[num] == "scissor" && user == "scissor" ) {
        result.innerHTML = "Draw";
    }
    if (arr[num] == "scissor" && user == "stone" ) {
        result.innerHTML = "Win";
    }
    if (arr[num] == "paper" && user == "scissor" ) {
        result.innerHTML = "Win";
    }
    if (arr[num] == "stone" && user == "paper" ) {
        result.innerHTML = "Win";
    }
    if (arr[num] == "stone" && user == "scissor" ) {
        result.innerHTML = "Lose";
    }
    if (arr[num] == "scissor" && user == "paper" ) {
        result.innerHTML = "Lose";
    }
    if (arr[num] == "paper" && user == "stone" ) {
        result.innerHTML = "Lose";
    }
}
