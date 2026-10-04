// DATA

const questions = [
  { question: "Which language runs in a web browser?", options: ["JavaScript", "Java", "C", "Python"], correctAnswer: "JavaScript" },
  { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Styled Sections", "Colorful Style Sheets"], correctAnswer: "Cascading Style Sheets" },
  { question: "Which HTML tag links a CSS file?", options: ["<script>", "<css>", "<link>", "<style>"], correctAnswer: "<link>" },
  { question: "Which company originally developed JavaScript?", options: ["Netscape", "Microsoft", "Google", "Apple"], correctAnswer: "Netscape" },
  { question: "What starts a single-line comment in JavaScript?", options: ["//", "<!-- -->", "#", "/* */"], correctAnswer: "//" },
];

// STATE
let currIndex=0;
let score=0;
let timeLeft=15;
let timerId=null;

// DOM CACHE

// intro section
const startContainer=document.getElementById('start');
const startButton=document.getElementById("startBtn");

// Question option section
const quesConstainer=document.getElementById("questionContainer");
const progressEl=document.getElementById("progress");
const questionEl=document.getElementById("question");
const optionList=document.getElementById("option");
const timerEl=document.getElementById("timer");

// result section
const resultEl=document.getElementById("result");
const scoreEl=document.getElementById("score");
const restartEl=document.getElementById("restart");

function renderQuestion(){
  // grab the curr question
   let currQuest=questions[currIndex];

    // update the progress
    progressEl.textContent=`Question ${currIndex+1} of ${questions.length}`;
    // update the question
    questionEl.textContent=`Q${currIndex+1}.  ${currQuest.question}`;
    // wipe all old options
    optionList.innerHTML="";

    currQuest.options.forEach((option)=>{
      const btn=document.createElement("button");
      btn.textContent=option;
      btn.addEventListener(('click'),()=>answer(option,btn));
      optionList.appendChild(btn);
    });

    startTimer();
}

function startTimer(){
  timeLeft=15; // reset
  timerEl.textContent=`${timeLeft}s`;
  clearInterval(timerId);// stop all old timers

  timerId=setInterval(()=>{
    timeLeft--;
    timerEl.textContent=`${timeLeft}s`;

    if(timeLeft<=0)
    {
      clearInterval(timerId);
      answer(null,null);
    }
  },1000);
}

// answer checking
function answer(selectedOption,clickedButton)
{
  clearInterval(timerId);
  const allOption =optionList.querySelectorAll("button");
  const correctOption=questions[currIndex].correctAnswer;
  allOption.forEach((btn)=>{btn.disabled=true});

  if(selectedOption===correctOption)
  {
    score++;
    clickedButton.classList.add('correct');
  }
  else{
    if(clickedButton) clickedButton.classList.add('wrong');
    allOption.forEach((btn)=>{
      if(btn.textContent===correctOption) btn.classList.add('correct'); 
    });
  }
  setTimeout(nextQuestion,1000);
}

function nextQuestion(){
  currIndex++;
  if(currIndex<questions.length)  renderQuestion();
  else  showResult();
}

function showResult(){
  quesConstainer.classList.add('hidden');
  resultEl.classList.remove('hidden');

  scoreEl.textContent=`You Scored ${score} out of ${questions.length}`;
}

restartEl.addEventListener(('click'),()=>{
  currIndex=0;
  score=0;

  quesConstainer.classList.remove('hidden');
  resultEl.classList.add('hidden');

  renderQuestion();
});

startButton.addEventListener(('click'),()=>{

  startContainer.classList.add('hidden');
  quesConstainer.classList.remove('hidden');

  renderQuestion();
});