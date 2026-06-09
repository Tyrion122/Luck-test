let buttons = document.querySelectorAll(".buttonAnswer");
let index=0;
console.log(buttons);
//...............
let right = document.querySelectorAll(".true");//це ідея з прослуховуванням лише правильних/робота  з правильною відповіддю
//...............

//всі кнопки заміняються одним індексом а не різним
//добавити зміну правильної відповіді (може всі класи видалити і заново створити?)

buttons.forEach((but)=>{
    but.addEventListener("click", ()=>{
        console.log(but);//but це обєкт (там ціла кнопка виводиться)
        //console.log(buttons.item);
        if (but.classList.contains(true)){
            alert("true");
            ButtonChange(but);
        }else{
            alert("Try again");
        }
    });
    index++;
});

function ButtonChange(){
    buttons.forEach((but)=>{
        but.textContent= "Answer"+index;
})};

//можливий варік але треба думати

/*
buttons.forEach((but)=>{
    index++;
    but.addEventListener("click", ButtonChange(index))});

function ButtonChange(index){
    if target {
            alert("true");
            buttons.forEach((but)=>{
                but.textContent= "Answer"+index;
            });
    }else{
            alert("Try again");
    }
    
}
*/