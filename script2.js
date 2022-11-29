var theQuestions = [ 
    {
    question: "What is the world's most popular programming language?",
    {
    a: "Java", 
    b: "JavaScript", 
    c: "React", 
    d: "Python" 
    }, 
    correctAnswer: "b"
},
{
    question: "What are the 4 ways to declare a variable?",
    answers: {
      a: "var",
      b: "let",
      c: "const",
      d: "all of these"
    },
    correctAnswer: "d"
  },
  {
    question: "What characters can be in a function name?",
    answers: {
      a: "letters",
      b: "digits",
      c: "underscores",
      d: "dollar signs $",
      e: "all of these"
    },
    correctAnswer: "e"
  },
  {
    question: "Of the following, which is a correct conditional statement?",
    answers: {
        a: "then",
        b: "if",
        c: "next",
        d: "elves"
    },
    correctAnswer: "b"
}]
var questionIndex = -1; // Not started

function nextQuestion() {
document.body.innerHTML = '';
  ++questionIndex;
    document.write(theQuestions[questionIndex].ques + "<br />");

        for (var i = 0; i < theQuestions[questionIndex].choices.length; i++) {
        document.write("<input type=radio id=myRadio name=radAnswer>" + theQuestions[questionIndex].choices[i] + "<br />");
        }
        
   if (questionIndex < (theQuestions.length - 1)) {
    var nextButton = document.createElement("input");
    nextButton.type = "button";
    nextButton.value = "Next question";
    nextButton.addEventListener('click', nextQuestion);
    document.body.appendChild(nextButton);
   }
};

nextQuestion();
