var startBtn = document.getElementById("startBtn");
var questionElement = document.getElementById("questionLine");

//Created array of question objects 
var questions = [ 
//Question 1 
{
questionFirst: "Which of the following is the language for describing the presentation of Web pages, including colors, layouts and fonts?",
choices: ["(a) CSS", "(b) Javascript", "(c) Jquery", "(d) HTML"],
answer: 0,
},
//Question 2
{
  questionSecond: "What of the following methods is use to repeat a specific block of code a known number of times?",
  choices: ["(a) Function ", "(b) Array", "(c) For Loop", "(d) Math.random()"],
  answer: 2,
},
//Question 3 
{
  questionThird: "Which of the following was the most popular coding language of 2019?",
  choices: ["(a) Javascript", "(b) Python", "(c) SQL", "(d) HTML"],
  answer: 1,
},
//Question 4
{
  questionFourth: "All elements of an array are represented from an index which starts at ___.",
  choices: ["(a) 0", "(b) 1", "(c) -1", "(d) 2"],
  answer: 0,
},
//Question 5
{
  questionFifth: "Which of the following developers is responsible for implementing visual elements that users see to interact within a web application?",
  choices: ["(a) Back end web developer", "(b) Front end web developer", "(c) Full stack web developer"],
  answer: 1, 
}
]

//Global variable that tracks user score 
var score = 0;
//Global variable that tracks what question the user is on 
var questionNumber = 0;

//Start Quiz
startBtn.addEventListener("click", function() {
return genQuiz
});

// write code that increments this number on the event listener for the choice buttons

function genQuiz(){
    questionElement.innerText = array[questions].questionFirst;
    questionElement.innerText = array[0].choices[0]

    for(var i=0; i < questions.length; i++){
    var response = questionLine(questions.i.innerText); 
    if( response == questions[i].answer){
      score++;
      alert("Correct!");
    } 
    else {
      alert("WRONG!");
    }
  }
}
  alert("you got" + score + "/" + questions.length)