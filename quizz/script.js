const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "london", correct: false },
            { text: "paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
        ],
    },
    {
        question: "what is the full form of HTML?",
        answers: [
            { text: "High Text Markup Language", correct: false },
            { text: "Hyper Text Makeup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Mark Language", correct: false },
        ],
    },
{
        question: "who discovered java script?",
        answers: [
            { text: "Brendan Eich", correct: true },
            { text: "James Gosling", correct: false },
            { text: "Timothy Lee", correct: false },
            { text: "Rasmus Lerdorf", correct: false },
        ],
    },
    {
        question: "what is the global object in javascript?",
        answers: [
            { text: "object", correct: false },
            { text: "Document", correct: false },
            { text: "window", correct: true },
            { text: "Navigator", correct: false },
        ],
    },
    {
        question: "which company developed javascript?",
        answers: [
            { text: "IBM", correct: false },
            { text: "Microsoft", correct: false },
            { text: "Sun Microsystems", correct: false },
            { text: "netscape", correct: true },
        ],
    },
    {
        question: "which symbol is used for comments in javascript?",
        answers: [
            { text: "//", correct: true },
            { text: "/* */", correct: false },
            { text: "#", correct: false },
            { text: "<!-- -->", correct: false },
        ],
    },
    {
        question: "which method is used to add an element at the end of an array in javascript?",
        answers: [
            { text: "shift()", correct: false },
            { text: "pop()", correct: false },
            { text: "push()", correct: true },
            { text: "unshift()", correct: false },
        ],
    },
    {
        question: "which keyword is used to declare a variable in javascript?",
        answers: [
            { text: "variable", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "var", correct: true },
        ],
    },
    {
        question: "which method is used to convert a JSON string into a javascript object?",
        answers: [
            { text: "JSON.String()", correct: false },
            { text: "JSON.parse()", correct: true},
            { text: "JSON.toObject()", correct: false },
            { text: "JSON.convert()", correct: false },
        ],
    },
    {
        question: "which operator is used to compare both value and type in javascript?",
        answers: [
            { text: "!==", correct: false },
            { text: "==", correct: false },
            { text: "=", correct: false },
            { text: "===", correct: true },
        ],
    },
    {
        question: "which method is used to convert a javascript object into a JSON string?",
        answers: [
            { text: "JSON.stringify()", correct: true },
            { text: "JSON.parse()", correct: false },
            { text: "JSON.toObject()", correct: false },
            { text: "JSON.convert()", correct: false },
        ],
    },
    {
        question: "which function is used to schedule a function to be called after a specified delay in javascript?",
        answers: [
            { text: "delay()", correct: false },
            { text: "setInterval()", correct: false },
            { text: "setTimeout()", correct: true },
            { text: "wait()", correct: false },
        ],
    },
    {
        question: "which method is used to remove the last element from an array in javascript?",
        answers: [
            { text: "unshift()", correct: false },
            { text: "push()", correct: false },
            { text: "shift()", correct: false },
            { text: "pop()", correct: true },
        ],
    },
    {
        question: "which keyword is used to create a constant variable in javascript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "constant", correct: false },
        ],

    },
    {
        question: "which method is used to add an element at the beginning of an array in javascript?",
        answers: [
            { text: "push()", correct: false },
            { text: "unshift()", correct: true },
            { text: "shift()", correct: false },
            { text: "pop()", correct: false },
        ],
    }
];
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButtons = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    nextButtons.style.display = "none";
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
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonsElement.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } 
        button.disabled = true;
    });
    nextButtons.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButtons.innerHTML = "Play Again";
    nextButtons.style.display = "block";
}
    function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
       showQuestion();
    } else {
        showScore();
    }
}

nextButtons.addEventListener("click", () => {
   if (currentQuestionIndex < questions.length ){
    handleNextButton();
  }
    else {
    startQuiz();
    }
});