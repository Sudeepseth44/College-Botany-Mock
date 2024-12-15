let currentQuestion = 0;

const questions = [
  {
    question: "What is the process of photosynthesis?",
    options: ["Conversion of light energy to chemical energy", "Respiration in plants", "Water absorption by plants"],
    correct: 0,
  },
  {
    question: "What is the primary function of chlorophyll?",
    options: ["Absorb sunlight", "Provide energy", "Store oxygen"],
    correct: 0,
  },
  // Add more questions here
];

function nextQuestion() {
  if (currentQuestion < questions.length) {
    displayQuestion(questions[currentQuestion]);
    currentQuestion++;
  } else {
    alert("You've completed the test!");
  }
}

function displayQuestion(questionObj) {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = `
    <h3>${questionObj.question}</h3>
    ${questionObj.options
      .map(
        (option, index) =>
          `<button onclick="checkAnswer(${index}, ${questionObj.correct})">${option}</button>`
      )
      .join("")}
  `;
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    alert("Correct answer!");
  } else {
    alert("Wrong answer! Try again.");
  }
}
