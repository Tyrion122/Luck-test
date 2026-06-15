let answers = [
    "Answer1",
    "Answer2",
    "Answer3",
    "Answer4",
    "Answer5",
    "Answer6",
    "Answer7",
    "Answer8",
    "Answer9",
    "Answer10",
    "Answer11",
    "Answer12",
    "Answer13",
    "Answer14",
    "Answer15"
]

let questions = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5"
]
let question = document.getElementById("question");

const buttonArr = [
    document.getElementById("but1"),
    document.getElementById("but2"),
    document.getElementById("but3")
];

let a=3;
let q=1;
function ButtonChange(){
    for(let b=0; b<buttonArr.length; b++){
        buttonArr[b].textContent=answers[a];
        buttonArr[b].classList.remove("false", "true");
        a++;
    }
    let ran = Math.floor(Math.random() * 3);
    buttonArr[ran].classList.add("true");
    question.textContent=questions[q];
    q++;
};

let score = 0;
let finalScore = 0;
let num = 0;
for(let butt in buttonArr){
    buttonArr[butt].addEventListener("click",(event) =>{
        if(event.target.classList.contains("true")){
            alert("true");
            score++;
            ButtonChange();
        }else{
            alert("Try again");
            ButtonChange();
        }
        num++;
        if(num==questions.length){
            finalScore = (score/num) * 100 ;
            alert("Your score:" + Math.round(finalScore) +"%" + "\n"+ score + "/" + num);
            location.reload();
        }
    });
    
}
window.onload=()=>{
    for(let b=0; b<buttonArr.length; b++){
        buttonArr[b].classList.remove("false", "true");
    }
    let ran = Math.floor(Math.random() * 3);
    buttonArr[ran].classList.add("true");
}
