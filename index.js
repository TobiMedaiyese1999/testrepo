let age = document.getElementById("age");
let live = document.getElementById("live");
let income = document.getElementById("make");

let divOne = document.getElementById("one")
let divTwo = document.getElementById("two")
let divThree = document.getElementById("three")

divTwo.style.display = "none"
divThree.style.display = "none"


document.getElementById("ageButton").onclick = () => {
    divOne.style.display = "none"
    divTwo.style.display = "block"
}

document.getElementById("liveButton").onclick = () => {
    
    divTwo.style.display = "none"
    divThree.style.display = "block"
}

document.getElementById("makeButton").onclick = () => {
    divThree.style.display = "none"
    let displayAge = age.value;
    let displayLive = live.value;
    let displayIncome = income.value;

    document.getElementById("results").innerHTML = `your age is ${displayAge}, you want to live in ${displayLive}, you earn ${displayIncome}`
}
