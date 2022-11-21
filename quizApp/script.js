const submitButton = document.querySelector(".submit-button");
const container = document.querySelector(".container");
const questionElement = document.querySelector(".questions");
const optionsElement = document.querySelectorAll(".options");
const optionsA = document.querySelector(".option-A");
const optionsB = document.querySelector(".option-B");
const optionsC = document.querySelector(".option-C");
const optionsD = document.querySelector(".option-D");

let currentQuestion = 0;
let score = 0;

function loadQuestion(questionArray, questionNumber) {

    questionElement.textContent = questionArray[questionNumber].question;
    optionsA.textContent = questionArray[questionNumber].a;
    optionsB.textContent = questionArray[questionNumber].b;
    optionsC.textContent = questionArray[questionNumber].c;
    optionsD.textContent = questionArray[questionNumber].d;

}

function checkforAnswer(questionArray, questionNumber) {
    optionsElement.forEach((option) => {
        if (option.checked && option.id === questionArray[questionNumber].correct) {
            score++;
            console.log(score)
        }
        option.checked = false;
    })
}

function displayScore() {
    container.innerHTML = ` <div class="top"><h1>Your score: ${score} / ${questionData.length}</h1>
      </div>
    <div class="bottom">
        <button class="submit-button" onClick="window.location.reload();">RELOAD</button>
      </div>
    `;
}

loadQuestion(questionData, currentQuestion)

submitButton.addEventListener("click", () => {

    if (currentQuestion >= questionData.length - 1) {
        // check if the question is the last index of questions
        checkforAnswer(questionData, currentQuestion)
        displayScore();
    }
    else {
        //check for the correct answers and load the next question
        checkforAnswer(questionData, currentQuestion)
        currentQuestion++;
        loadQuestion(questionData, currentQuestion)
    }
})
