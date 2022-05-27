// document id types: quiz-box, header, timer, quiz-card, quiz-question, button
var quizCards = document.querySelector("#quiz-card")
var quizQuestions = document.querySelector("#quiz-question")
var quizButtons = document.querySelector("#button")

// array of quiz objects - question, answers, correct answer
let quizArray = [
    {
        question: "How much is that doggy in the _________?",
        answer: {1: "1. cage", 2: "2. window", 3: "3. dog house", 4: "4. backyard"},
        correct: 2
    },
    {
        question: "Now I know my ABCs. Next time won't you _________ with me?",
        answer: {1: "1. rap", 2: "2. play", 3: "3. sing", 4: "4. learn"},
        correct: 3
    },
    {
        question: "Supercalifragilisticexpiali_________.",
        answer: {1: "1. trocious", 2: "2. bocious", 3: "3. growsis", 4: "4. docious"},
        correct: 4
    },
    {
        question: "The itsy-bitsy __________ went up the water spout.",
        answer: {1: "1. spider", 2: "2. mouse", 3: "3. caterpillar", 4: "4. goldfish"},
        correct: 1
    },
    {
        question: "Never gonna _________ you up. Never gonna let you down.",
        answer: {1: "1. lift", 2: "2. give", 3: "3. mess", 4: "4. eat"},
        correct: 2
    },
];

// function to start quiz
 let startQuiz = function() {
     //quizCards.remove();
     insertQuestions();
    // append quizCards with quizArray[0].question

    // append quizCards with quizArray[0].answer

    // append #quiz-button with quizArray.answer[0]

    // start timer
}





function insertQuestions() {
    quizQuestions.textContent = quizArray[0].question;
    for (var i = 0; i < quizArray.length; i++) {
        var answerButtons = document.createElement("button");
        answerButtons.textContent = quizArray.answer[i];
        answerButtons.setAttribute("value", quizArray[i]);
        quizQuestions.appendChild(answerButtons);
        console.log(answerButtons);
    }
}

// start quiz button event listener
document.getElementById("button").addEventListener("click", startQuiz);




