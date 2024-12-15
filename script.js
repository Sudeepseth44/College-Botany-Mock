
const quizData = [
  {
    question: "What is the scientific name of a sunflower?",
    options: ["Helianthus annuus", "Rosa indica", "Mangifera indica", "Solanum tuberosum"],
    correct: "Helianthus annuus",
  },
  {
    question: "Which pigment is responsible for photosynthesis?",
    options: ["Chlorophyll", "Carotenoids", "Anthocyanins", "Flavonoids"],
    correct: "Chlorophyll",
  }
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  const questionElem = document.getElementById("question");
  const optionsElem = document.getElementById("options");

  questionElem.innerText = quizData[currentQuestionIndex].question;
  optionsElem.innerHTML = "";

  quizData[currentQuestionIndex].options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElem.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = quizData[currentQuestionIndex].correct;
  if (selectedOption === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Wrong! The correct answer is " + correctAnswer);
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    alert("Quiz Finished!");
  }
}

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentQuestionIndex < quizData.length) loadQuestion();
});

window.onload = loadQuestion;
