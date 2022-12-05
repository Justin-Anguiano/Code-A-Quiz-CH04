// alert("Hello Human! 😀 This quiz has a few rules!");
// alert("You have 3 minutes (180 seconds) to complete.");
// alert("There is total of 4 questions");
// alert("Upon completion, click on the Results button for your score 🙃");

var startButton = document.getElementById("#start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

let currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
 // console.log("Started");
  startButton.classList.add("hide");
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
}

var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

function countdown() {
  var timeLeft = 180;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining!";

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

// // Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();

function setNextQuestion() {
  showQuestion(currentQuestionIndex);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
}

var questions = [{
      question: "What is the world's most popular programming language?",
      answers: ["Java", "JavaScript", "React"]
      correctAnswer: 1},

      {question: "What are the 4 ways to declare a variable?",
      answers: ["var", "let", "const", "all of these"]
      correctAnswer: 3},

      {question: "What characters can be in a function name?",
      answers: ["letters", "digits", "underscores", "dollar signs $", "all of these"]
      correctAnswer: 4},

      {question: "Of the following, which is a correct conditional statement?",
      answers: ["then", "if", "next", "elves"]
      correctAnswer: 1}
    ];
