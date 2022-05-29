// document id types: quiz-box, header, timer, quiz-card, quiz-question, button
var quizGreeting = document.querySelector("#quiz-greeting")
var quizInstructions = document.querySelector("#instructions")
var quizStartBtn = document.querySelector("#quiz-start-btn")
var quizQuestions = document.querySelector("#questions-h2")
var buttonsDiv = document.querySelector("#buttons-div")
var quizCards = document.querySelector("#quiz-cards")
var quizFinished = document.querySelector("#results-h2")
var quizScore = document.querySelector("#final-score")
var quizInitials = document.querySelector("#initials-input")
var formEl = document.querySelector("initials")
var index = 0;
var countDown;
var leaderboardData = [];
var playerIdCounter = 0;


// array of quiz objects - question, answers, correct answer
let quizArray = [
    {
        question: "In JavaScript, array indexes start at what value?",
        answer: ["1. 1", "2. 0", "3. one", "4. a"],
        correct: "2. 0"
    },
    {
        question: "Which of these is not an HTML event?",
        answer: ["1. onclick", "2. onmouseover", "3. ondasher", "4. onload"],
        correct: "3. ondasher"
    },
    {
        question: "Boolean values are ________ values.",
        answer: ["1. numeric", "2. scary", "3. skinny", "4. true/false"],
        correct: "4. true/false"
    },
    {
        question: "Which of these is not a coding language?",
        answer: ["1. Klingon", "2. JavaScript", "3. CSS", "4. HTML"],
        correct: "1. Klingon"
    },
    {
        question: "Never gonna _________ you up. Never gonna let you down.",
        answer: ["1. lift", "2. give", "3. mess", "4. eat"],
        correct: "2. give"
    },
    // Tim Gunn's "make it work" empty array object.
    {
        question: "",
        answer: ["", "", "", ""],
        correct: ""
    },
];


// function to start quiz
function startQuiz() {
    // hide quiz greeting, instructions, and start button
    quizGreeting.classList.add("hide");
    quizInstructions.classList.add("hide");
    quizStartBtn.classList.add("hide");

    // reveal quiz question
    quizQuestions.classList.add("reveal");

    // reveal quiz buttons
    buttonsDiv.classList.add("reveal");

    // start timer
    quizTimer();

    // proceed to next question when answering previous question
    nextQuestion();
};


// function to increment quizArray question and buttons
function nextQuestion() {
    // set quiz questions to quiz questions array, question [0]
    quizQuestions.textContent = quizArray[index].question;

    // set #one button to quiz questions array, answer [0]
    one.textContent = quizArray[index].answer[0];
    // assign data attribute of "true" to button if button text = correct answer
    if (one.textContent == quizArray[index].correct) {
        one.setAttribute("data-answer-value", "true");
    } else {
        // assign data attribute of "false" to button if button text != correct answer
        one.setAttribute("data-answer-value", "false");
    }

    // set #two button to quiz questions array, answer [1]
    two.textContent = quizArray[index].answer[1];
    // assign data attribute of "true" to button if button text = correct answer
    if (two.textContent == quizArray[index].correct) {
        two.setAttribute("data-answer-value", "true");
    } else {
        // assign data attribute of "false" to button if button text != correct answer
        two.setAttribute("data-answer-value", "false");
    }

    // set #three button to quiz questions array, answer [2]
    three.textContent = quizArray[index].answer[2];
    // assign data attribute of "true" to button if button text = correct answer
    if (three.textContent == quizArray[index].correct) {
        three.setAttribute("data-answer-value", "true");
    } else {
        // assign data attribute of "false" to button if button text != correct answer
        three.setAttribute("data-answer-value", "false");
    }

    // set #four button to quiz questions array, answer [3]
    four.textContent = quizArray[index].answer[3];
    // assign data attribute of "true" to button if button text = correct answer
    if (four.textContent == quizArray[index].correct) {
        four.setAttribute("data-answer-value", "true");
    } else {
        // assign data attribute of "false" to button if button text != correct answer
        four.setAttribute("data-answer-value", "false");
    }

    // quiz question array [num] is less than quiz question array.length, proceed to next question on click
    if (index < quizArray.length - 1) {
        index++;
        // if quiz array index = 6 (Tim Gunn "make it work" empty array object), proceed to results 
    } else if (index = 6) {
        displayResults();
        clearInterval(countDown);
    }
};


// function to start timer
function quizTimer() {
    // set start time to 75 seconds
    let timerStart = 75;

    // decrement timer by 1 second
    countDown = setInterval(function () {
        document.getElementById("timer").innerHTML = "Time: " + timerStart;
        timerStart--;
        // if timer reaches 0, #timer = "Time: 0"
        if (timerStart < 0) {
            clearInterval(countDown);
        }
    }, 1000);

    // decrement timer by 10 seconds if answer incorrect
    if (document.body.querySelector('.button[data-answer-value="false"]')) {
        // if (nextQuestion.data-answer-value == "false") {
        timerStart - 10000
    }
};


// function to display quiz results quiz-h2 final-score score-input
function displayResults() {
    // hide quiz questions, and quiz buttons
    quizCards.classList.add("hide");

    // assign score value to remaining time
    quizScore.textContent = ("Your final score is " + document.getElementById("timer").innerHTML.slice(6));

    // reveal quiz score results and form to input/record player initials
    quizFinished.classList.add("reveal");
    quizScore.classList.add("reveal");
    quizInitials.classList.add("reveal");
};


// function to view high scores
function submitScore() {

    let inputInitials = document.getElementById("initials");
    // combine player initials and score into an object
    let playerResults = {
        playerInitials: inputInitials.value,
        playerScore: document.getElementById("timer").innerHTML.slice(6)
    }

    // assign playerId value
    let playerId = playerIdCounter

    // add player id to initials form input
    playerResults.id = playerId;

    // increment playerIdCounter
    playerIdCounter++

    // push playerResults object into leaderboardData array
    leaderboardData.push(playerResults);

    // store leaderboardData array in localStorage
    localStorage.setItem("playerResults", JSON.stringify(leaderboardData));
};


// START QUIZ BUTTON event listener
document.getElementById("quiz-start-btn").addEventListener("click", startQuiz);

// ANSWER BUTTONS event listener
document.getElementById("one").addEventListener("click", nextQuestion);
document.getElementById("two").addEventListener("click", nextQuestion);
document.getElementById("three").addEventListener("click", nextQuestion);
document.getElementById("four").addEventListener("click", nextQuestion);

// ENTER INITIALS SUBMIT BUTTON event listener
document.getElementById("initials-submit").addEventListener("click", submitScore);





