const submitButton = document.querySelector(".submit-button");
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
            ++score;
            alert(score)
        }
        option.checked = false;
    })
}

loadQuestion(questionData, currentQuestion)

submitButton.addEventListener("click", () => {
    // check if the question is the last index of questions
    if (currentQuestion >= questionData.length - 1) {
        currentQuestion = 0;
        // reload question starting from the first question
        loadQuestion(questionData, currentQuestion)
    }
    else {
        //check for the correct answers and load the next question
        checkforAnswer(questionData, currentQuestion)
        currentQuestion++;
        loadQuestion(questionData, currentQuestion)
    }
})
