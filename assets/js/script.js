// document id types: quiz-box, header, timer, quiz-card, quiz-question, button
var quizHeader = document.querySelector("#header")
var quizGreeting = document.querySelector("#quiz-greeting")
var quizInstructions = document.querySelector("#instructions")
var quizStartBtn = document.querySelector("#quiz-start-btn")
var quizQuestions = document.querySelector("#questions-h2")
var quizButtons = document.querySelector("#button")
var buttonsDiv = document.querySelector("#buttons-div")
var quizCards = document.querySelector("#quiz-cards")
var quizFinished = document.querySelector("#results-h2")
var quizScore = document.querySelector("#final-score")
var quizInitials = document.querySelector("#initials-input")
var highScores = document.querySelector("#leaderboard")
var mvpList = document.querySelector("mvp-list")
var goBackBtn = document.querySelector("#go-back")
var index = 0;
var countDown;

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
        correct: "1. spider"
    },
    {
        question: "Never gonna _________ you up. Never gonna let you down.",
        answer: ["1. lift", "2. give", "3. mess", "4. eat"],
        correct: "2. give"
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


}


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
    console.log(quizArray.length);
    if (index < quizArray.length-1) {
        index++;
    } else if (index = 4) {
        displayResults();
        clearInterval(countDown);
    }
}


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
        // if(currentQuestion === quizQuestions.length -1) {
        //     clearInterval(timer);
        // }
    }, 1000);
}


// function to display quiz results quiz-h2 final-score score-input
function displayResults() {
    // hide quiz questions, and quiz buttons
    quizCards.classList.add("hide");

    // assign score value to remaining time
    quizScore.textContent = ("Your final score is " + document.getElementById("timer").innerHTML);
    console.log(document.getElementById("timer"));
    // reveal quiz score results and form to input/record player initials
    quizFinished.classList.add("reveal");
    quizScore.classList.add("reveal");
    quizInitials.classList.add("reveal");

}


// function to view high scores
function viewHighScores() {
    // hide quiz greeting, instructions, and start button
    quizHeader.classList.add("hide");
    quizGreeting.classList.add("hide");
    quizInstructions.classList.add("hide");
    quizStartBtn.classList.add("hide");

    // hide quiz questions, and quiz buttons
    quizQuestions.classList.add("hide");
    buttonsDiv.classList.add("hide");

    // hide high scores 
    quizFinished.classList.add("hide");
    quizScore.classList.add("hide");
    quizInitials.classList.add("hide");

    // reveal high scores card
    highScores.classList.add("reveal");
    //mvpList.classList.add("reveal");
    goBackBtn.classList.add("reveal");
}


// function to return to quiz greeting when go back button is clicked
function quizGreeting() {
    // hide high scores card
    quizFinished.classList.add("hide");
    quizScore.classList.add("hide");
    quizInitials.classList.add("hide");

    // reveal quiz greetings
    quizGreeting.classList.add("reveal");
    quizInstructions.classList.add("reveal");
    quizStartBtn.classList.add("reveal");
}


// VIEW HIGH SCORES header event listener
//document.getElementById("show-me-scores").addEventListener("click", viewHighScores);

// GO BACK BUTTON event listener
document.getElementById("go-back").addEventListener("click", quizGreeting);

// START QUIZ BUTTON event listener
document.getElementById("quiz-start-btn").addEventListener("click", startQuiz);

// ANSWER BUTTONS event listener
document.getElementById("one").addEventListener("click", nextQuestion);
document.getElementById("two").addEventListener("click", nextQuestion);
document.getElementById("three").addEventListener("click", nextQuestion);
document.getElementById("four").addEventListener("click", nextQuestion);

// ENTER INITIALS SUBMIT BUTTON event listener
document.getElementById("initials-submit").addEventListener("click", viewHighScores);




