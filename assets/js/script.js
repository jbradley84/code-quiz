// document id types: quiz-box, header, timer, quiz-card, quiz-question, button
var quizCards = document.querySelector("#quiz-card")
var quizQuestions = document.querySelector("#quiz-question")
var quizButtons = document.querySelector("#button")

// array of quiz objects - question, answers, correct answer
let quizArray = [
    {
        question: "How much is that doggy in the _________?",
        answer: ["1. cage", "2. window", "3. dog house", "4. backyard"]
    },
    {
        question: "Now I know my ABCs. Next time won't you _________ with me?",
        answer: ["1. rap", "2. play", "3. sing", "4. learn"]
    },
    {
        question: "Supercalifragilisticexpiali_________.",
        answer: ["1. trocious", "2. bocious", "3. growsis", "4. docious"]
    },
    {
        question: "The itsy-bitsy __________ went up the water spout.",
        answer: ["1. spider", "2. mouse", "3. caterpillar", "4. goldfish"]
    },
    {
        question: "Never gonna _________ you up. Never gonna let you down.",
        answer: ["1. lift", "2. give", "3. mess", "4. eat"]
    },
];
console.log(quizArray);

// function to start quiz
let startQuiz = function() {
    quizCards.remove()    
}


// start quiz button event listener
document.getElementById("button").addEventListener("click", startQuiz);





