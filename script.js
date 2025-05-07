const questions = [
            {
            question: "Which is the largest animal in the world?",
            answers: [
                { text: "Shark", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Elephant", correct: false },
                { text: "Giraffe", correct: false },
            ]
        },
        {
            question: "What is the smallest continent in the world?",
            answers: [
                { text: "Asia", correct: false },
                { text: "Australia", correct: true },
                { text: "Arctic", correct: false },
                { text: "Africa", correct: false },
            ]
        },
        {
            question: "Who won the 2000 NBA Finals?",
            answers: [
                { text: "Spurs", correct: false },
                { text: "Lakers", correct: true },
                { text: "Pistons", correct: false },
                { text: "Sixers", correct: false },
            ]
        },
        {
            question: "Who won the Super Bowl in 2000?",
            answers: [
                { text: "Titans", correct: false },
                { text: "Colts", correct: false },
                { text: "Patriots", correct: false },
                { text: "Rams", correct: true },
            ]
        }
    ];
    

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
}else{
    selectedBtn.classList.add("incorrect")
    }
Array.from(answerButtons.children).forEach(button => {
 if(button.dataset.correct === "true"){
    button.classList.add("correct");
 }
 button.disabled = true;
});
nextButton.style.display = "block";
}

startQuiz();

