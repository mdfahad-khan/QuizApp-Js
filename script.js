const quizData =[
    {
        question:"what is your name",
        a:"fahad",
        b:"rifat",
        c:"sipa",
        d:"sajjad",
        corroct: "a"
    },
    {
        question:"how old are you",
        a:"22",
        b:"21",
        c:"10",
        d:"23",
        corroct: "a"
    },
    {
        question:"which is your favorite game ",
        a:"football",
        b:"cricket",
        c:"pubg",
        d:"badminton",
        corroct: "b"
    },{
        question:"which is your game ",
        a:"football",
        b:"cricket",
        c:"pubg",
        d:"badminton",
        corroct: "b"
    },{
        question:"which is your ",
        a:"football",
        b:"cricket",
        c:"pubg",
        d:"badminton",
        corroct: "b"
    },

];
const answerEl = document.querySelectorAll('.answer');
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;


function loadQuiz(){
    deSelected();
    const currentQuestionData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuestionData.question;
    a_text.innerText = currentQuestionData.a;
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;


}

loadQuiz();

function getSelected(){
  
    let answer = undefined;
    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer= answerEl.id;
        }
    });
    return answer
}

function deSelected(){
   
    answerEl.forEach((answerEl) => {
        
            answerEl.checked = false;
      
    });

}
submit.addEventListener('click',() => {
  
     const answer =getSelected();
     if(answer){
        if(answer === quizData[currentQuiz].corroct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz(); 
        }
        else{
           quiz.innerHTML =`<h2> you answere correctly ${score}/${quizData.length} question.</h2> <button  onclick = "location.reload()">Reload</button>`;
        }

     }
   
    
});