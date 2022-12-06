alert("Hello Human! 😀 This quiz has a few rules!");
alert("You have 3 minutes (180 seconds) to complete.");
alert("There is total of 3 questions");
alert("Upon completion, click on the Results button for your score 🙃");

var startButton = document.getElementById("start-btn");

var questionElement = document.getElementById("questions1");

startButton.addEventListener("click", startQuiz);
//start quiz and timer together.
function startQuiz() {
  countdown();
}


var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

function countdown() {
  var timeLeft = 180;

  // `setInterval()` method to call the function
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds left!";

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;
  
  var msgInterval = setInterval(function () {
    
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}
