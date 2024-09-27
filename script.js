function  disableOptions(questionName){
    let=options = document.getElementsByName(questionName);
    options.forEach(option => {
        if(!option.checked){
            option.disabled = true;
        }
   
   
    });
}

function playSound(){
    let clickSound=document.getElementById('selecionasom');
    clickSound.play();
}


function submitQuiz(){
     
let  correctAnswers={
q1:"A",
q2:"A",
q3:"D",
q4:"C",
q5:"B",
q6:"A",
q7:"D",
q8:"C",
q9:"B",
q10:"A",


//adicione as respostas corretas para as outras perguntas
};

let form = document.getElementById('quiz-form');
let score = 0;

for(let key in correctAnswers){
    let userAnswer=form.elements[key].value;
    if(userAnswer === correctAnswers[key]){
        score++;
    }
}
let result = document.getElementById('result');
result.innerHTML = `Você acertou ${score} de 10 perguntas`;

document.getElementById('reiniciar').removeAttribute('disabled');
document.getElementById('enviar').setAttribute('disabled', true);


//tocar som se todas as respostas estiverem corretas

if(score === 10){
    let successSound = document.getElementById('venceusom');
        successSound.play();
}

if(score!=10){
    let failSound = document.getElementById('perdeusom');
    failSound.play();
}
}

function responderNovamente(){
    score=0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('enviar').removeAttribute('disabled');
    result.innerHTML= " ";
    document.getElementById('quiz-form').reset();

    let options=document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
   

}
