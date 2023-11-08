let theName = document.getElementById("name");
let city = document.getElementById("city");
let state = document.getElementById("state");
let monthly = document.getElementById("monthly");
let rent = document.getElementById("rent");
let utility = document.getElementById("utility");
let groceries = document.getElementById("groceries");
let eating = document.getElementById("eating");
let streaming = document.getElementById("streaming");
let none = document.getElementById("none");
let make = document.getElementById("make");
let budget = document.getElementById("budget");

let frontPage = document.getElementById("frontPage")
let divOne = document.getElementById("one")
let divTwo = document.getElementById("two")
let divThree = document.getElementById("three")
let divFour = document.getElementById("four")
let divFive = document.getElementById("five")
let divSix = document.getElementById("six")
let divSeven = document.getElementById("seven")
let divEight = document.getElementById("eight")
let divNine = document.getElementById("nine")
let divTen = document.getElementById("ten")
let divEleven = document.getElementById("eleven")
let results = document.getElementById("results")

let spend;

let feedback = document.getElementById("feedback")

divOne.style.display = "none"
divTwo.style.display = "none"
divThree.style.display = "none"
divFour.style.display = "none"
divFive.style.display = "none"
divSix.style.display = "none"
divSeven.style.display = "none"
divEight.style.display = "none"
divNine.style.display = "none"
divTen.style.display = "none"
divEleven.style.display = "none"


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

document.getElementById("frontButton").onclick = () => {
    frontPage.style.display = "none";
    divOne.style.display = "block";
    document.getElementById("quip").innerHTML = "let's start simple"
}

document.getElementById("nameButton").onclick = () => {
    divOne.style.display = "none"
    divEleven.style.display = "block"
    document.getElementById("quip").innerHTML = "Stupid name, anyway lets learn a little bit about where you plan on living"

}
document.getElementById("cityButton").onclick = () => {
    divEleven.style.display = "none"
    divTwo.style.display = "block"
    document.getElementById("quip").innerHTML = `I had a friend who lived in ${city.value} once, he hated it. Now lets get down to the nitty gritty.`
}

document.getElementById("monthlyButton").onclick = () => {
    
    divTwo.style.display = "none"
    divThree.style.display = "block"
    document.getElementById("quip").innerHTML = "might be time for a new career... how much do you think you'll need for rent"
}

document.getElementById("rentButton").onclick = () => {
    divThree.style.display = "none"
    divFour.style.display = "block"
    document.getElementById("quip").innerHTML = "optimistic"


}

document.getElementById("utilityButton").onclick = () => {
    
    divFour.style.display = "none"
    divFive.style.display = "block"
    
}

document.getElementById("groceriesButton").onclick = () => {
    
    divFive.style.display = "none"
    divSix.style.display = "block"
    
}

document.getElementById("eatingButton").onclick = () => {
    
    divSix.style.display = "none"
    divSeven.style.display = "block"
}

document.getElementById("streamingButton").onclick = () => {
    
    divSeven.style.display = "none"
    divEight.style.display = "block"
}

document.getElementById("noneButton").onclick = () => {
    
    divEight.style.display = "none"
    divNine.style.display = "block"
    
}

document.getElementById("makeButton").onclick = () => {
    
    divNine.style.display = "none"
    divTen.style.display = "block"
    
}

document.getElementById("budgetButton").onclick = () => {
    
    divTen.style.display = "none"
    results.style.display = "block"
   

    let displayName = theName.value;
    let displayMonthly = monthly.value
    let displayRent = rent.value
    let displayUtilities = utility.value
    let displayGroceries = groceries.value
    let displayEating = eating.value
    let displayStreaming = streaming.value
    let displayNone = none.value
    let displayMake = make.value
    let displayBudget = budget.value
    let costDescription;

    let cityName = city;
    let stateName = state;

    // const apiKey = '2641|hIQmJZPqhmrdFZ8ubj6xDSxhV8gnFhpOAZUAkrXl';

    // fetch(`https://zylalabs.com/api/226/cities+cost+of+living+and+average+prices+api/655/cost+of+living+by+city?country=united-states&city=${city.value}-${state.value}`, {
    // headers: {
    //     'Authorization': `Bearer ${apiKey}`
    // }
    // })
    // .then(response => {
    //     if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     const buyApartmentPrices = data["Buy Apartment prices"];
    //     const firstApartmentPrice = buyApartmentPrices[1];
    //     costDescription = firstApartmentPrice.Value; 
    //     console.log()
    //     document.getElementById("description").innerHTML = `people in your age range living in ${costDescription} , typically spend a year on rent, do you have enough`

    // })
    // .catch(error => {
    //     console.error('There has been a problem with your fetch operation:', error);
    // });


    document.getElementById("results").innerHTML = `${displayName}, ${displayMonthly}, ${displayRent}, ${displayUtilities}, 
        ${displayGroceries}, ${displayEating}, ${displayStreaming}, ${displayNone}, ${displayMake}, ${displayBudget}`
    document.getElementById("results").innerHTML = `${displayName}, ${displayMonthly}, ${displayRent}, ${displayUtilities}, 
    ${displayGroceries}, ${displayEating}, ${displayStreaming}, ${displayNone}, ${displayMake}, ${displayBudget}`
}

