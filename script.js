// a variable for start time
var secondsLeft = 75;
let secondsLeft = 75;

//the element that displays the time
var timeEl = document.getElementById("timeEl")
let timer = document.getElementById("timer");

//start button div
var startButton = document.getElementById("start-button");

// variable for the questions title
var questionBlock = document.getElementById("question-block");
var questionDiv = document.getElementById("question-div");

// divs for the choices
var choices0 = document.getElementById("choices0")
var choices1 = document.getElementById("choices1")
var choices2 = document.getElementById("choices2")
var choices3 = document.getElementById("choices3")
var choices0 = document.getElementById("choices0");
var choices1 = document.getElementById("choices1");
var choices2 = document.getElementById("choices2");
var choices3 = document.getElementById("choices3");

// array of divs
// array of divs where the multiple choice questions will display
var choiceArr = [choices0, choices1, choices2, choices3];

// a variable to accumulate correct answers 
var correctAnswers = 0;
// a variable to accumulate correct answers


// keeping track of which question we're on
var questionCount = 0;

//keeping score
var score = 0;
let score = 0

// dynamically creating and inserting start button so I can hide it once clicked.
function pageLoad() {
  var start = document.createElement("button");
  start.innerHTML = "Start!"
  //Need to add a class to the button to give it meterialize style
  const start = document.createElement("button");
  start.innerHTML = "Start Quiz!";
  startButton.append(start);
  startButton.addEventListener("click", setTime);
}

pageLoad();

startButton.addEventListener("click", setTime);

//Timer starts when the user clicks startButton (see above).
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if(secondsLeft === 0) {
    timer.textContent = "Time left: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  startQuiz();
  displayQuestions();
  startButton.remove();
}

//function to load the first question on the page
function startQuiz() {
  questionBlock.innerHTML = questions[questionCount].title;
  for (var i = 0; i < questions[questionCount].multiChoice.length; i++) {
    var el = document.createElement("button");
    el.innerHTML = questions[questionCount].multiChoice[i];
function displayQuestions() {
  questionDiv.innerHTML = questions[questionCount].title;
  for (let i = 0; i < questions[questionCount].multiChoice.length; i++) {
    let el = document.createElement("button");
    el.innerText = questions[questionCount].multiChoice[i];
    el.setAttribute("data-id", i);
    el.addEventListener("click", function(event) {
      event.stopPropagation();
      if (el.innerText === questions[questionCount].answer) {
        score++
       console.log("what??")
      } else {
        score--;
        // console.log("why won't this work?")
        console.log(el.innerText)
        console.log(questions[questionCount].answer)
      };
      choiceArr[questionCount].remove();
      questionDiv.innerHTML = "";
      questionCount++;
      displayQuestions();
    })
    choiceArr[questionCount].append(el);
  }
  choiceArr[questionCount].addEventListener("click", function(){
    choiceArr[questionCount].remove();
    questionBlock.innerHTML = "";
    questionCount ++;
    nextQuestion();
  } );
};

//fuction to load susequent questions on the page (may be unnecessary)
function nextQuestion() {
  questionBlock.innerHTML = questions[questionCount].title;
  for (var i = 0; i < questions[questionCount].multiChoice.length; i++) {
    var el = document.createElement("button");
    el.innerHTML = questions[questionCount].multiChoice[i];
     choiceArr[questionCount].append(el);
  }
    choiceArr[questionCount].addEventListener("click", function(){
      choiceArr[questionCount].remove();
      questionBlock.innerHTML = "";
      questionCount ++;
      nextQuestion();
  } );
}



pageLoad();




// function checkQuestion() {
//   var choiceButton = document.getElementsByClassName("choiceButton");
//   if (choiceButton.textContent === questions.answer) {
//     score++;
//   }
// }
// if the inner HTML of the button matches the string in the answer increment the score by 1
