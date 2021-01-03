var startBtn = document.getElementById("startBtn");
var questionElement = document.getElementById("questionLine");

//Created array of question objects 
var questions = [ 

//Question 1 
{
question: "Which of the following is the language for describing the presentation of Web pages, including colors, layouts and fonts?",
choices: ["(a) CSS", "(b) Javascript", "(c) Jquery", "(d) HTML"],
answer: "(a) CSS"
}

//Question 2
{
  question: "What of the following methods is use to repeat a specific block of code a known number of times?",
  choices: ["(a) Function ", "(b) Array", "(c) For Loop", "(d) Math.random()"],
  answer: "(c) For Loop"
}

//Question 3
{
  question: "Which of the following was the most popular coding language of 2019?",
  choices: ["(a) Javascript", "(b) Python", "(c) SQL", "(d) HTML"],
  answer: "(b) Python"
}

//Question 4
{
  question: "Which of the following is a distinction from a number array and a ",
  choices: ["1", "2", etc],
  answer: "here"
}

//Question 5
{
  question: "enter question here",
  choices: ["1", "2", etc],
  answer: "here"
}

]

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