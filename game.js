const max = prompt("enter the max number");
const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");

while(true){
    if(guess =="quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you are right! congrats !! random number was",random);
        break;
    }
    else if(guess < random){
        guess =prompt("hint : your guess was too small")
    }else{
        guess = prompt("hints : your guess was too large")
    }
}


// const txt1 = document.getElementById('tbuser');
// const btn1 = document.getElementById('btn1');
// const out1 = document.getElementById('output1');

// const random = Math.floor(Math.random()*txt1)+1;

// function fun1(){
//     out1.innerHTML = random.value;
// }
// btn1.addEventListener('click',fun1);