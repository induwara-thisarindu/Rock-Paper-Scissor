let userScore = document.getElementById("user_score");
let computerScore = document.getElementById("computer_score");
let results = document.getElementById("result");
let result

let user_score = 0
let comp_score = 0

let userChoice = document.getElementById("user_choice");
let computerChoice = document.getElementById("computer_choice");

let choices = document.querySelectorAll("button");
let user_choice
let computer_choice

choices .forEach(choice => choice.addEventListener("click", (e) => {
    user_choice = e.target.id
    userChoice.innerHTML = "Your Pick: " + user_choice
    generateChoice()
}))

function generateChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        computer_choice = "Rock"
    } else if (random === 2) {
        computer_choice = "Paper"
    } else {
        computer_choice = "Scissor"
    }

    computerChoice.innerHTML = "Computer Pick: " + computer_choice 
    scoreCount()
}

function scoreCount() {
    if (computer_choice === user_choice) {
        result = "It is a Draw 😊"
    } else if (computer_choice === "Rock" && user_choice === "Paper") {
        user_score += 1
        result = "You Win 🎉"
    } else if (computer_choice === "Rock" && user_choice === "Scissor") {
        comp_score += 1
        result = "Computer Wins 😊"
    } else if (computer_choice === "Paper" && user_choice ==="Rock") {
        comp_score += 1
        result = "Computer Wins 😊"
    } else if (computer_choice === "Paper" && user_choice === "Scissor") {
        user_score += 1
        result = "You Win 🎉"
    } else if (computer_choice === "Scissor" && user_choice === "Rock") {
        user_score += 1
        result = "You Win 🎉"
    } else if (computer_choice === "Scissor" && user_choice === "Paper") {
        comp_score += 1
        result = "Computer Wins 😊"
    }

    userScore.innerHTML = "Your Score: " + user_score
    computerScore.innerHTML = "Computer Score: " + comp_score
    results.innerText = result
}