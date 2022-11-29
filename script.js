alert("Hello Human! 😀")
alert("This quiz has a few rules!")
alert("This is a timed quiz.")
alert("There is total of 5 questions")
alert("Your score will be displayed upon completion 🙃")

var startMin = 3;
let time = startMin * 60

var countBtnEl = document.getElementById("countdown");
setInterval(updateTimer, 1000)

function updateTimer()  {
  var minutes = Math.floor(time/60);
  let seconds = time % 60;
  time--;
}

//function beginQuiz()
