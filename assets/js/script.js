// document id types: quiz-box, header, timer, quiz-card, quiz-question, button
var quizCards = document.querySelector("#quiz-card")
var quizQuestions = document.querySelector("#quiz-question")
var quizInstructions = document.querySelector("#instructions")
var quizButtons = document.querySelector("#button")

// array of quiz objects - question, answers, correct answer
let quizArray = [
    {
        question: "How much is that doggy in the _________?",
        answer: ["1. cage", "2. window", "3. dog house", "4. backyard"],
        correct: 2
    },
    {
        question: "Now I know my ABCs. Next time won't you _________ with me?",
        answer: ["1. rap", "2. play", "3. sing", "4. learn"],
        correct: 3
    },
    {
        question: "Supercalifragilisticexpiali_________.",
        answer: ["1. trocious", "2. bocious", "3. growsis", "4. docious"],
        correct: 4
    },
    {
        question: "The itsy-bitsy __________ went up the water spout.",
        answer: ["1. spider", "2. mouse", "3. caterpillar", "4. goldfish"],
        correct: 1
    },
    {
        question: "Never gonna _________ you up. Never gonna let you down.",
        answer: ["1. lift", "2. give", "3. mess", "4. eat"],
        correct: 2
    },
];

// function to start quiz
 let startQuiz = function() {
     //quizCards.remove();
     changeQuizCards();
    // append quizCards with quizArray[0].question

    // append quizCards with quizArray[0].answer

    // append #quiz-button with quizArray.answer[0]

    // start timer
}


// function to change quizCards
function changeQuizCards() {
    quizQuestions.textContent = quizArray[0].question;
    quizArray[0].answer.forEach(element => {
        var button = document.createElement("button");
        button.id = element;
        button.className = "button";
        var text = document.createTextNode(element);
        button.appendChild(text);
        quizCards.appendChild(button);
    });
    quizInstructions.classList.add("hide");
    quizButtons.classList.add("hide");
}


// function insertQuestions() {
//     quizQuestions.textContent = quizArray[0].question;
//     console.log(quizArray[0].answer);
    // quizButtons.document.createElement("button");
    // buttons.type = "button";
    // function buttonOptions(arr) {
    //     for (var i = 0; i < arr.length; i++) {
    //         document.querySelector("#button").append("<button value=" + arr[i] + ">" + arr[i] + "</button>");
    //     }
    // }
    // buttonOptions(quizArray[0].answer);
    
    //
    //for (var i = 0; i < quizArray.length; i++) {
        

        // var answerButtons = document.createElement("button");
        // button.type = "button";
        // button.innerHTML = quizArray[0].answer;
        // button.className = "button"
        //answerButtons.textContent = quizArray.answer[i];
        //answerButtons.setAttribute("value", quizArray[i]);
        //quizQuestions.appendChild(answerButtons);
        //console.log(answerButtons);
    //}
//}

// start quiz button event listener
document.getElementById("button").addEventListener("click", startQuiz);




