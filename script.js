// alert("Hello Human! 😀");
// alert("This quiz has a few rules!");
// alert("You have 3 minutes to complete.");
// alert("There is total of 4 questions");
// alert("Your score will be displayed upon completion 🙃");

var second = 60;
var minute = 2;

setInterval(function () {
  if (minute == 0 && second == 1) {
    document.getElementById("counter").innerHTML = "03:00";
  } else {
    second--;
    if (second == 0) {
      minute--;
      second == 60;

      if (minute == 0) {
        minute = minute;
      }
    }
    if (minute.toString().length == 1) {
      minute = "0" + minute;
    }
    if (second.toString().length == 1) {
      second = "0" + second;
    }
    document.getElementById("counter").innerHTML = minute + ":" + second;
  }
}, 1000);

//function beginQuiz()
