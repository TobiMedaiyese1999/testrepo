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
let summary = document.getElementById("summary")

let spend;


let feedback = document.getElementById("feedback")


summary.style.display = "none"
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
    document.getElementById("quip").innerHTML = "Let's start simple"
}

document.getElementById("nameButton").onclick = () => {
    divOne.style.display = "none"
    divEleven.style.display = "block"
    document.getElementById("quip").innerHTML = `Ok ${name.value}, Let's learn a little bit about where you plan on living`

}
document.getElementById("cityButton").onclick = () => {
    divEleven.style.display = "none"
    divTwo.style.display = "block"
    document.getElementById("quip").innerHTML = `I had a friend who lived in ${city.value} once, he hated it. Now lets get down to the nitty gritty.`
}

document.getElementById("monthlyButton").onclick = () => {
    
    divTwo.style.display = "none"
    divThree.style.display = "block"
    document.getElementById("quip").innerHTML = "Might be time for a new career... How much do you think you'll need for rent."
}

document.getElementById("rentButton").onclick = () => {
    divThree.style.display = "none"
    divFour.style.display = "block"
    document.getElementById("quip").innerHTML = "Optimistic. What about utilities."


}

document.getElementById("utilityButton").onclick = () => {
    
    divFour.style.display = "none"
    divFive.style.display = "block"
    document.getElementById("quip").innerHTML = "Alright let's see how much you plan on spending for groceries."}

document.getElementById("groceriesButton").onclick = () => {
    
    divFive.style.display = "none"
    divSix.style.display = "block"
    document.getElementById("quip").innerHTML = "Eating out gets expensive, don't go too crazy"

    
}

document.getElementById("eatingButton").onclick = () => {
    
    divSix.style.display = "none"
    divSeven.style.display = "block"
    document.getElementById("quip").innerHTML = "Have you finished AOT? The finale was crazy"

}

document.getElementById("streamingButton").onclick = () => {
    
    divSeven.style.display = "none"
    divEight.style.display = "block"
    document.getElementById("quip").innerHTML = "I spent $500 last month on ubers because I'm terrified of driving"

}

document.getElementById("noneButton").onclick = () => {
    
    divEight.style.display = "none"
    divNine.style.display = "block"
    document.getElementById("quip").innerHTML = "Your parents told you that degree was useless and now look at you"
    
}

document.getElementById("makeButton").onclick = () => {
    
    divNine.style.display = "none"
    divTen.style.display = "block"
    document.getElementById("quip").innerHTML = "Let's be realistic here"

    
}

   
document.getElementById("budgetButton").onclick = () => {
    
    divTen.style.display = "none"
    summary.style.display = "flex"
    document.getElementById("quip").innerHTML = "You're really bad at this"
    document.getElementById("tester").innerHTML = `${theName.value}'s Results`
    document.getElementById("tester2").innerHTML = `${city.value}'s Averages`


    let displayName = theName.value;
    let displayMonthly = Number(monthly.value)
    let displayRent = Number(rent.value)
    let displayUtilities =  Number(utility.value)
    let displayGroceries = Number(groceries.value)
    let displayEating = Number(eating.value)
    let displayStreaming = Number(streaming.value)
    let displayNone = Number(none.value)
    let displayMake = make.value
    let displayBudget = budget.value
    let costDescription;
    let theTotal = displayMonthly + displayRent + displayUtilities + displayGroceries + displayEating + displayStreaming + displayNone

    

    let cityName = city;
    let stateName = state;


    const apiKey = '2641|hIQmJZPqhmrdFZ8ubj6xDSxhV8gnFhpOAZUAkrXl';

    fetch(`https://zylalabs.com/api/226/cities+cost+of+living+and+average+prices+api/655/cost+of+living+by+city?country=united-states&city=${cityName.value}-${stateName.value}`, {
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const rentPerMonth = data["Rent Per Month prices"];
        const theRentPerMonth = rentPerMonth[0];
        const cityRent = theRentPerMonth.Value;
        const finale = parseFloat(cityRent.replace(/,/g, ''))

        const utilPerMonth = data["Utilities Per Month prices"];
        const theUtilPerMonth = utilPerMonth[0];
        const cityUtil = Number(theUtilPerMonth.Value);

        const groceriesPerMonth = data["Markets prices"];
        const theGroceriesPerMonth = groceriesPerMonth[0];
        const cityGroc = Number(theGroceriesPerMonth.Value);

        const restaurantPerMonth = data["Restaurants prices"];
        const theRestaurantPerMonth = restaurantPerMonth[1];
        const cityRest = Number(theRestaurantPerMonth.Value);

        const nonePerMonth = data["Sports And Leisure prices"];
        const theNonePerMonth = nonePerMonth[0];
        const theNonePerMonthTwo = nonePerMonth[1];
        const clothPerMonth = data["Clothing And Shoes prices"];
        const theClothPerMonth = clothPerMonth[0];
        const theClothPerMonthTwo = clothPerMonth[1];
        const theClothPerMonthThree = clothPerMonth[2];
        const theClothPerMonthFour = clothPerMonth[3];
        const noneTotal1 = Number(theNonePerMonth.Value)
        const noneTotal2 = Number(theNonePerMonthTwo.Value)
        const noneTotal3 = Number(theClothPerMonth.Value)
        const noneTotal4 = Number(theClothPerMonthTwo.Value)
        const noneTotal5 = Number(theClothPerMonthThree.Value)
        const noneTotal6 = Number(theClothPerMonthFour.Value)
        
        

     
        
        
        


        document.getElementById("resultRent").innerHTML = `Average Rent: ${finale} `
        document.getElementById("resultUtility").innerHTML = `Average Utility Bill: ${cityUtil}  `
        document.getElementById("resultGroceries").innerHTML = `Average Grocery Bill: ${cityGroc*155.1} `
        document.getElementById("resultRestaurants").innerHTML = `Average Amount Spent on Restaurants: ${(cityRest/2.5)*2.5*4} `
        document.getElementById("resultNone").innerHTML = `Average Non essential spending: ${(noneTotal1 + noneTotal2 + noneTotal3 + noneTotal4 + noneTotal5 + noneTotal6) } `
        document.getElementById("cityTotal").innerHTML = `Total: ${(finale + cityUtil + (cityGroc*155.1) + ((cityRest/2.5)*2.5*4) + noneTotal1 + noneTotal2 + noneTotal3 + noneTotal4 + noneTotal5 + noneTotal6)}`
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

    document.getElementById("userRent").innerHTML = `You planned on spending ${displayRent} on rent`
    document.getElementById("userUtility").innerHTML = `You planned on spending ${displayUtilities} on utilities`
    document.getElementById("userGroceries").innerHTML = `You planned on spending ${displayGroceries} on groceries`
    document.getElementById("userRestaurants").innerHTML = `You planned on spending ${displayEating} on eating out`
    document.getElementById("userNone").innerHTML= `You planned on spending ${displayStreaming + displayNone} on non-essentials`
    document.getElementById("sum").innerHTML = `Total: ${theTotal}`
    document.getElementById("takeHome").innerHTML = `Take Home: ${displayMonthly - theTotal}`

    



   

}

