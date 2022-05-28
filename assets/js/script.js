// document id types: quiz-box, header, timer, quiz-card, quiz-question, button
var quizGreeting = document.querySelector("#quiz-greeting")
var quizInstructions = document.querySelector("#instructions")
var quizStartBtn = document.querySelector("#quiz-start-btn")
var quizCards = document.querySelector("#quiz-card")
var quizQuestions = document.querySelector("#questions-h2")
var quizButtons = document.querySelector("#button")
var buttonsDiv = document.querySelector("#buttons-div")
var index = 0;

// array of quiz objects - question, answers, correct answer
let quizArray = [
    {
        question: "How much is that doggy in the _________?",
        answer: ["1. cage", "2. window", "3. dog house", "4. backyard"],
        correct: "2. window"
    },
    {
        question: "Now I know my ABCs. Next time won't you _________ with me?",
        answer: ["1. rap", "2. play", "3. sing", "4. learn"],
        correct: "3. sing"
    },
    {
        question: "Supercalifragilisticexpiali_________.",
        answer: ["1. trocious", "2. bocious", "3. growsis", "4. docious"],
        correct: "4. docious"
    },
    {
        question: "The itsy-bitsy __________ went up the water spout.",
        answer: ["1. spider", "2. mouse", "3. caterpillar", "4. goldfish"],
        correct: "spider"
    },
    {
        question: "Never gonna _________ you up. Never gonna let you down.",
        answer: ["1. lift", "2. give", "3. mess", "4. eat"],
        correct: "give"
    },
];

// assign initial value to hidden quiz question
quizQuestions.textContent = quizArray[index].question;

// assign initial values to hidden quiz buttons
one.textContent = quizArray[index].answer[0];
// if (quizArray[index].answer[0] == quizArray[index].correct) {
//     one.setAttribute("data-answer-value", "true");
// } else {
//     one.setAttribute("data-answer-value", "false");
// }
two.textContent = quizArray[index].answer[1];
// if (quizArray[index].answer[0] == quizArray[index].correct) {
//     two.setAttribute("data-answer-value", "true");
// } else {
//     two.setAttribute("data-answer-value", "false");
// }
three.textContent = quizArray[index].answer[2];
// if (quizArray[index].answer[0] == quizArray[index].correct) {
//     three.setAttribute("data-answer-value", "true");
// } else {
//     three.setAttribute("data-answer-value", "false");
// }
four.textContent = quizArray[index].answer[3];
// if (quizArray[index].answer[0] == quizArray[index].correct) {
//     four.setAttribute("data-answer-value", "true");
// } else {
//     four.setAttribute("data-answer-value", "false");
// }


// function to start quiz
function startQuiz() {
    // hide quiz greeting, instructions, and start button
    quizGreeting.classList.add("hide");

    // reveal quiz question
    quizQuestions.classList.add("reveal");

    // reveal quiz buttons
    buttonsDiv.classList.add("reveal");

    // start timer
    quizTimer();

    nextQuestion();
}


// function to increment quizArray question and buttons
function nextQuestion() {
    quizQuestions.textContent = quizArray[index].question;
    one.textContent = quizArray[index].answer[0];
    two.textContent = quizArray[index].answer[1];
    three.textContent = quizArray[index].answer[2];
    four.textContent = quizArray[index].answer[3];
    // if (quizArray[index].answer[index] === quizArray[index].correct) {
    //     console.log("correct");
    //     // } else {
    //     //     console.log("correct");
    // }
    if (index < quizArray.length) {
        index++;
    }
}


// function to start timer
function quizTimer() {
    // set start time to 75 seconds
    let timerStart = 75;
    // decrement timer by 1 second
    let countDown = setInterval(function () {
        document.getElementById("timer").innerHTML = "Time: " + timerStart;
        timerStart--;
        // if timer reaches 0, #timer = "Time: 0"
        if (timerStart < 0) {
            clearInterval(countDown);
        }
    }, 1000);
}


// START QUIZ button event listener
document.getElementById("quiz-start-btn").addEventListener("click", startQuiz);

// QUIZ BUTTON event listener
document.getElementById("one").addEventListener("click", nextQuestion);
document.getElementById("two").addEventListener("click", nextQuestion);
document.getElementById("three").addEventListener("click", nextQuestion);
document.getElementById("four").addEventListener("click", nextQuestion);


