// document id types: quiz-box, header, timer, quiz-card, quiz-question, button
var quizCards = document.querySelector("#quiz-card")
var quizQuestions = document.querySelector("#quiz-question")
var quizInstructions = document.querySelector("#instructions")
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
console.log(quizArray[index].correct);


// function to start quiz
function startQuiz() {
    // hide quiz instructions and start button
    quizInstructions.classList.add("hide");
    quizButtons.classList.add("hide");

    // replace "coding quiz challenge" with quiz question
    quizQuestions.textContent = quizArray[index].question;

    // reveal quiz buttons
    buttonsDiv.classList.add("buttons-div");

    // start timer
    quizTimer();
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



// function to increment quizArray question and buttons
function nextQuestion() {
    quizQuestions.textContent = quizArray[index].question;
    one.textContent = quizArray[index].answer[0];
    two.textContent = quizArray[index].answer[1];
    three.textContent = quizArray[index].answer[2];
    four.textContent = quizArray[index].answer[3];
    console.log(event.target);
    if (quizArray[index].answer[index] === quizArray[index].correct) {
        console.log("correct");
        // } else {
        //     console.log("correct");
    }
    if (index < quizArray.length) {
        index++;
    }
};

// START QUIZ button event listener
document.getElementById("button").addEventListener("click", startQuiz);

// QUIZ BUTTON event listener
document.getElementById("buttons-div").addEventListener("click", nextQuestion);


