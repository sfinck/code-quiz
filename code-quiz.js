var startBtn = document.getElementById("startBtn");
var questionElement = document.getElementById("questionLine");

//var array = [ 
// {
//     question: "enter question here",
//     choices: ["1", "2", etc],
//     answer: "here"
// }
// {
//     question: "enter question here",
//     choices: ["1", "2", etc],
//     answer: "here"
// }
// {
//     question: "enter question here",
//     choices: ["1", "2", etc],
//     answer: "here"
// }
// {
//     question: "enter question here",
//     choices: ["1", "2", etc],
//     answer: "here"
// }
// ]

//Start Quiz
startBtn.addEventListener("click", function(){
    // call genQuiz
});

// global variable that tracks qhich question the user is on
var questionNumber = 0;
// write code that increments this number on the event listener for the choice buttons

function genQuiz(){
    questionElement.innerText = array[questionNumber].question;
    // do same thing for choices
    // .innerTxt = array[0].choices[0]
  }

//