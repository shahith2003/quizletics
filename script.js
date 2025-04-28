const question = [
    {
        question:"In cricket, what does LBW stand for?",
        answers :[
            {text:"Leg By Wicket", correct: false},
            {text:"Long Ball Wide", correct: false},
            {text:"Leg Before Wicket", correct: true},
            {text:"Last Ball Wicket", correct: false},
        ]
    },
    {
        question:"Who was the first batsman to score 10,000 runs in Test cricket?",
        answers :[
            {text:"Ricky Ponting", correct: false},
            {text:"Sunil Gavaskar", correct: true},
            {text:"Sachin Tendulkar", correct: false},
            {text:"Brian Lara", correct: false},
        ]
    },
    {
        question:"Which country won the ICC Cricket World Cup in 2019?",
        answers :[
            {text:"Australia", correct: false},
            {text:"England", correct: true},
            {text:"India", correct: false},
            {text:"New Zealand", correct: false},
        ]
    },
    {
        question:"Which player scored the 'Hand of God' goal in football?",
        answers :[
            {text:"Diego Maradona", correct: true},
            {text:"Lionel Messi", correct: false},
            {text:"Cristiano Ronaldo", correct: false},
            {text:"Pelé", correct: false},
        ]
    },
    {
        question:"Which country has won the most FIFA World Cups?",
        answers :[
            {text:"Germany", correct: false},
            {text:"Italy", correct: false},
            {text:"Argentina", correct: false},
            {text:"Brazil", correct: true},
        ]
    },
    {
        question:"Who won the Ballon d'Or in 2023?",
        answers :[
            {text:"Lionel Messi", correct: true},
            {text:"Erling Haaland", correct: false},
            {text:"Kylian Mbappé", correct: false},
            {text:"Cristiano Ronaldo", correct: false},
        ]
    },
    {
        question:"How many Grand Slam titles has Rafael Nadal won?",
        answers :[
            {text:"22", correct: true},
            {text:"20", correct: false},
            {text:"23", correct: false},
            {text:"21", correct: false},
        ]
    },
    {
        question:"Which tournament is played on a grass court in tennis?",
        answers :[
            {text:"US Open", correct: false},
            {text:"Wimbledon", correct: true},
            {text:"Australian Open", correct: false},
            {text:"French Open", correct: false},
        ]
    },
    {
        question:"Who is the current World Chess Champion as of 2024?",
        answers :[
            {text:"Magnus Carlsen", correct: false},
            {text:"Ding Liren", correct: true},
            {text:"Ian Nepomniachtchi", correct: false},
            {text:"Viswanathan Anand", correct: false},
        ]
    },
    {
        question:"What is the term for a situation in chess where the king is under direct attack?",
        answers :[
            {text:"Pin", correct: false},
            {text:"Stalemate", correct: false},
            {text:"Check", correct: true},
            {text:"Fork", correct: false},
        ]
    }
];
 
const questionelement = document.getElementById("question");
const answerbutton = document.getElementById("answerbutton");
const nextbutton = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function startquiz(){
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showquestion();
}

function showquestion(){
    resetstate();
    
    let currentquestion = question[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionelement.innerHTML = questionno + ". " + currentquestion.question;

    currentquestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn")
        answerbutton.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectanswer)
    });
}

function resetstate(){
    nextbutton.style.display = "none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectanswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextbutton.style.display ="block";
}

function showscore(){
    resetstate();
    questionelement.innerHTML = `You Scored ${score} out of ${question.length}!`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
}

function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex < question.length){
        showquestion();
    }else{
        showscore();
    }
}

nextbutton.addEventListener("click",()=>{
    if(currentquestionindex < question.length){
        handlenextbutton();
    }else{
        startquiz();
    }
})

startquiz();