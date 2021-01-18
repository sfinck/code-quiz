//Grabbing variables from HTML file 
var startBtn = document.getElementById("startBtn");
var questionElement = document.getElementById("questionLine");
var choicesElement = document.getElementById("choices");
var choiceA = document.getElementById("choiceA")
var choiceB = document.getElementById("choiceB")
var choiceC = document.getElementById("choiceC")
var choiceD = document.getElementById("choiceD")
var score = 0;
var questionNumber = 0;
var wrongAnswer = 0;
var finalScores = document.getElementById("finalScores")
var inputBox = document.getElementById("input");
var initialsSubmit = document.getElementById("button-addon2");
var highScores = document.getElementById("highScoresList");

//Created array of question objects 
var questions = [
  //Question 1 
  {
    question: "Which of the following is the language for describing the presentation of Web pages, including colors, layouts and fonts?",
    choices: ["(a) CSS", "(b) Javascript", "(c) Jquery", "(d) HTML"],
    answer: 0,
  },
  //Question 2
  {
    question: "What of the following methods is use to repeat a specific block of code a known number of times?",
    choices: ["(a) Function ", "(b) Array", "(c) For Loop", "(d) Math.random()"],
    answer: 2,
  },
  //Question 3 
  {
    question: "Which of the following was the most popular coding language of 2019?",
    choices: ["(a) Javascript", "(b) Python", "(c) SQL", "(d) HTML"],
    answer: 1,
  },
  //Question 4
  {
    question: "All elements of an array are represented from an index which starts at ___.",
    choices: ["(a) 0", "(b) 1", "(c) -1", "(d) 2"],
    answer: 0,
  },
  //Question 5
  {
    question: "Which of the following developers is responsible for implementing visual elements that users see to interact within a web application?",
    choices: ["(a) Back end web developer", "(b) Front end web developer", "(c) Full stack web developer"],
    answer: 1,
  }
]

var time = 60;
const countdownEl = document.getElementById("countdown");

//Start Quiz
startBtn.addEventListener("click", function () {
  genQuiz();

  var timer = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    time--;
    countdownEl.innerHTML = `: ${time}`;
    if (time <= 0) {
      clearInterval(timer);
      choicesElement.remove();
      questionElement.innerText = `Your final score is: ${score}`
      finalScores.style.display = "block"
    }
  }

});

//Generates quiz 
function genQuiz() {
  choicesElement.style.display = "block";
  questionElement.innerText = questions[questionNumber].question;

  choiceA.innerText = questions[0].choices[0];
  choiceB.innerText = questions[0].choices[1];
  choiceC.innerText = questions[0].choices[2];
  choiceD.innerText = questions[0].choices[3];
}

function endQuiz() {
  time = 1;
  choicesElement.remove();
  questionElement.innerText = ` Your final score is: ${score}`
  finalScores.style.display = "block"
}

function checkAnswer(userChoice) {
  var correctAnswer = questions[questionNumber].answer;
  if (userChoice == correctAnswer) {
    score++;
  }
  else {
    time -= 5;
  }
};

choicesElement.addEventListener("click", function (event) {
  event.preventDefault();
  var userChoice = event.target.getAttribute("data-index");
  checkAnswer(userChoice);
  questionNumber++;

  questionElement.innerText = questions[questionNumber].question;

  choiceA.innerText = questions[questionNumber].choices[0];
  choiceB.innerText = questions[questionNumber].choices[1];
  choiceC.innerText = questions[questionNumber].choices[2];

  if (questions[questionNumber].choices.length >= 4) {
    choiceD.innerText = questions[questionNumber].choices[3];
  } else {
    choiceD.style.display = "none";
  }
  if (questionNumber == questions.length - 1) {
    endQuiz();
  }

}); 

initialsSubmit.addEventListener("click", function () {
  finalScores.style.display = "none"
  var userInitials = inputBox.value.trim();
  var highScore = document.createElement("li")
  highScore.innerText = `${userInitials} - ${score}`
  highScores.appendChild(highScore);
});