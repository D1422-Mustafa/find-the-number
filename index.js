let guestTitle = document.getElementById("guess__title");
let thinkingMan  = document.getElementById("thinking_man");
let number  = document.getElementById("number");
let check  = document.getElementById("check");
let explanation  = document.getElementById("explanation");
let explain  = document.getElementById("explain");
let numberAttemps = document.getElementById("number__attemps");
let result = document.getElementById("result");
let reset = document.getElementById("reset");
let attemps = document.getElementById("attemps")
let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);
let list = [0, 100]
let x;
number.focus();

check.addEventListener("click", ()=> {
    if (number.value == randomNumber){
    explanation.innerText = `Congrats, the hidden number is : ${randomNumber}`;
    explain.innerText = `On your  `;
    numberAttemps.innerText = ` ${11-Number(numberAttemps.innerText)}.attempt`;
    explanation.style.fontSize = "2rem";
    explain.style.fontSize = "2rem";
    numberAttemps.style.fontSize = "2rem";
    reset.style.display = "block";
    result.style.display = "block";
    thinkingMan.style.display = "none"
    number.style.display = "none";
    check.style.display = "none";
    number.value = ""
    number.focus();
    }
    else if (number.value > randomNumber){
        if (list.includes(number.value)){
            explanation.innerText = "You entered this number before!!";
            number.value = "";
            number.focus();
        }
        else if (number.value > 100){
            explanation.innerText = "Please enter a number less than 100";
            number.value = "";
            number.focus();
        }
        else {    
            explanation.style.fontSize = "1.5rem";
            list.push(number.value);
            list.sort(function(a, b){return a - b});
            x = list.indexOf(number.value);
            explanation.innerText = `Please enter a smaller number, between ${list[x-1]} and ${list[x]}`;
            numberAttemps.innerText = Number(numberAttemps.innerText) - 1;
            number.value = "";
            number.focus();
            if (numberAttemps.innerText == 0) {
                explanation.innerText = `Sorry, you failed. The number is ${randomNumber}`;
                attemps.style.display = "none";
                reset.style.display = "block";
                number.value = "";
                number.focus();
        }
    }
    }
    else if (number.value < randomNumber){
        if (list.includes(number.value)){
            explanation.innerText = "You entered this number before!!";
            number.value = "";
            number.focus();
        }
        else if(number.value < 0){
            explanation.innerText = "Please enter a number greater than 0";
            number.value = "";
            number.focus();
        }
        else {
            explanation.style.fontSize = "1.5rem";
            list.push(number.value);
            list.sort(function(a, b){return a - b});
            x = list.indexOf(number.value);
            explanation.innerText = `Please enter a bigger number, between ${list[x]} and ${list[x+1]}`;
            numberAttemps.innerText = Number(numberAttemps.innerText) - 1;
            number.value = "";
            number.focus();
            if (numberAttemps.innerText == 0) {
                explanation.innerText = `Sorry, you failed. The number is ${randomNumber}`;
                attemps.style.display = "none";
                reset.style.display = "block";
                number.style.display = "none";
                check.style.display = "none";
                number.value = "";
                number.focus();
        }
    }
}
})

document.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
    check.click();
    }
})
