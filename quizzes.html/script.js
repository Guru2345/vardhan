const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  {
    question: "What is the full form of HTML?",
    answers: [
      { text: "High Text Markup Language", correct: false },
      { text: "Hyper Text Makeup Language", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Text Mark Language", correct: false }
    ]
  },
  {
    question: "Who discovered JavaScript?",
    answers: [
      { text: "Brendan Eich", correct: true },
      { text: "James Gosling", correct: false },
      { text: "Timothy Lee", correct: false },
      { text: "Rasmus Lerdorf", correct: false }
    ]
  },
  {
    question: "What is the global object in JavaScript?",
    answers: [
      { text: "Object", correct: false },
      { text: "Document", correct: false },
      { text: "window", correct: true },
      { text: "Navigator", correct: false }
    ]
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "IBM", correct: false },
      { text: "Microsoft", correct: false },
      { text: "Sun Microsystems", correct: false },
      { text: "Netscape", correct: true }
    ]
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "#", correct: false },
      { text: "<!-- -->", correct: false }
    ]
  },
  {
    question: "Which method adds an element at the end of an array?",
    answers: [
      { text: "shift()", correct: false },
      { text: "pop()", correct: false },
      { text: "push()", correct: true },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "Which keyword is used to declare a variable?",
    answers: [
      { text: "variable", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "var", correct: true }
    ]
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    answers: [
      { text: "JSON.String()", correct: false },
      { text: "JSON.parse()", correct: true },
      { text: "JSON.toObject()", correct: false },
      { text: "JSON.convert()", correct: false }
    ]
  },
  {
    question: "Which operator compares both value and type?",
    answers: [
      { text: "!==", correct: false },
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "===", correct: true }
    ]
  },
  {
    question: "Which method converts a JavaScript object into a JSON string?",
    answers: [
      { text: "JSON.stringify()", correct: true },
      { text: "JSON.parse()", correct: false },
      { text: "JSON.toObject()", correct: false },
      { text: "JSON.convert()", correct: false }
    ]
  },
  {
    question: "Which function schedules a function after a delay?",
    answers: [
      { text: "delay()", correct: false },
      { text: "setInterval()", correct: false },
      { text: "setTimeout()", correct: true },
      { text: "wait()", correct: false }
    ]
  },
  {
    question: "Which method removes the last element from an array?",
    answers: [
      { text: "unshift()", correct: false },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "pop()", correct: true }
    ]
  },
  {
    question: "Which keyword creates a constant variable?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "constant", correct: false }
    ]
  },
  {
    question: "Which method adds an element at the beginning of an array?",
    answers: [
      { text: "push()", correct: false },
      { text: "unshift()", correct: true },
      { text: "shift()", correct: false },
      { text: "pop()", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = answer.text;
    if (answer.correct) button.dataset.correct = "true";
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtonsElement.children).forEach((button) => {
    if (button.dataset.correct === "true") button.classList.add("correct");
    button.disabled = true;
  });

  nextButton.style.display = "block";
  nextButton.textContent = (currentQuestionIndex < questions.length - 1) ? "Next" : "Show Score";
}

function showScore() {
  resetState();
  questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
  nextButton.textContent = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) showQuestion();
  else showScore();
}
//...existing code...
nextButton.addEventListener("click", () => {
  if (nextButton.textContent === "Next") {
    handleNextButton();
  } else if (nextButton.textContent === "Show Score") {
    showScore();
  } else { // "Play Again"
    startQuiz();
  }
});
// ...existing code...

// start
startQuiz();