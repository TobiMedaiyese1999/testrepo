let age = document.getElementById("age");
let live = document.getElementById("live");
let income = document.getElementById("make");

let divOne = document.getElementById("one")
let divTwo = document.getElementById("two")
let divThree = document.getElementById("three")

let spend;

let runningTotal = document.getElementById("running")

divTwo.style.display = "none"
divThree.style.display = "none"

function updateSpend(age) {
    switch (true) {
        case (age < 18):
            spend = "40,000";
            break;
        case (age >= 18 && age < 30):
            spend = "30,000";
            break;
        case (age >= 30 && age < 50):
            spend = "50,000";
            break;
        default:
            spend = "100,000";
            break;
    }
    
}



document.getElementById("ageButton").onclick = () => {
    divOne.style.display = "none"
    divTwo.style.display = "block"
    runningTotal.innerHTML = "Money left: 100,000"
    
}

document.getElementById("liveButton").onclick = () => {
    
    divTwo.style.display = "none"
    divThree.style.display = "block"
    runningTotal.innerHTML = "Money left: 50,000"
}

document.getElementById("makeButton").onclick = () => {
    divThree.style.display = "none"
    let displayAge = age.value;
    let displayLive = live.value;
    let displayIncome = income.value;
    
   updateSpend(displayAge);
    document.getElementById("results").innerHTML = `your age is ${displayAge}, you want to live in ${displayLive}, you earn ${displayIncome}`
    document.getElementById("description").innerHTML = `people in your age range living in ${displayLive}, typically spend ${spend} a year, do you have enough`
    runningTotal.innerHTML = "Money left: 0"
}
