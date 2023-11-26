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
let budgetCost = document.getElementById("budgetCost")

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
let planner = document.getElementById("finalResults")
let finale = document.getElementById("finalLink")

let spend;


let feedback = document.getElementById("feedback")

planner.style.display = "none"
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
finale.style.display = "none"




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
    document.getElementById("quip").innerHTML = `Ok ${theName.value}, Let's learn a little bit about where you plan on living`

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

var displayMonthly;
var rentPerMonth;
var rentFinal;
var cityUtil;
var cityInt;
var cityGroc;
var cityRest;
var takeHome
var noneTotal1 
var noneTotal2 
var noneTotal3 
var noneTotal4 
var noneTotal5 
var noneTotal6 

document.getElementById("budgetButton").onclick = () => {
    
    divTen.style.display = "none"
    summary.style.display = "flex"
    finale.style.display = "flex"
    document.getElementById("quip").innerHTML = "You're really bad at this"
    document.getElementById("tester").innerHTML = `${theName.value}'s Results`
    document.getElementById("tester2").innerHTML = `${city.value}'s Averages`


    let displayName = theName.value;
    displayMonthly = Number(monthly.value)
    let displayRent = Number(rent.value)
    let displayUtilities =  Number(utility.value)
    let displayGroceries = Number(groceries.value)
    let displayEating = Number(eating.value)
    let displayStreaming = Number(streaming.value)
    let displayNone = Number(none.value)
    let displayMake = make.value
    let displayBudget = budget.value
    let costDescription;
    let theTotal = displayRent + displayUtilities + displayGroceries + displayEating + displayStreaming + displayNone

    

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
        rentPerMonth = data["Rent Per Month prices"];
        const theRentPerMonth = rentPerMonth[0];
        const cityRent = theRentPerMonth.Value;
        rentFinal = parseFloat(cityRent.replace(/,/g, ''))

        const utilPerMonth = data["Utilities Per Month prices"];
        const theUtilPerMonth = utilPerMonth[0];
        const theInternetPerMonth = utilPerMonth[2];
        cityUtil = Math.round(Number(theUtilPerMonth.Value));
        cityInt = Math.round(Number(theInternetPerMonth.Value));
        

        const groceriesPerMonth = data["Markets prices"];
        const theGroceriesPerMonth = groceriesPerMonth[0];
        cityGroc = Math.round(Number(theGroceriesPerMonth.Value));

        const restaurantPerMonth = data["Restaurants prices"];
        const theRestaurantPerMonth = restaurantPerMonth[1];
        cityRest = Math.round(Number(theRestaurantPerMonth.Value));

        const nonePerMonth = data["Sports And Leisure prices"];
        const theNonePerMonth = nonePerMonth[0];
        const theNonePerMonthTwo = nonePerMonth[1];
        const clothPerMonth = data["Clothing And Shoes prices"];
        const theClothPerMonth = clothPerMonth[0];
        const theClothPerMonthTwo = clothPerMonth[1];
        const theClothPerMonthThree = clothPerMonth[2];
        const theClothPerMonthFour = clothPerMonth[3];
        noneTotal1 = Math.round(Number(theNonePerMonth.Value))
        noneTotal2 = Math.round(Number(theNonePerMonthTwo.Value))
        noneTotal3 = Math.round(Number(theClothPerMonth.Value))
        noneTotal4 = Math.round(Number(theClothPerMonthTwo.Value))
        noneTotal5 = Math.round(Number(theClothPerMonthThree.Value))
        noneTotal6 = Math.round(Number(theClothPerMonthFour.Value))
        
        

     
        
        
        


        document.getElementById("resultRent").innerHTML = `Average Rent: $${rentFinal} `
        document.getElementById("resultUtility").innerHTML = `Average Utility Bill: $${cityUtil + cityInt}  `
        document.getElementById("resultGroceries").innerHTML = `Average Grocery Bill: $${cityGroc*155.1} `
        document.getElementById("resultRestaurants").innerHTML = `Average Amount Spent on Restaurants: $${(cityRest/2.5)*2.5*4} `
        document.getElementById("resultNone").innerHTML = `Average Non essential spending: $${(noneTotal1 + noneTotal2 + noneTotal3 + noneTotal4 + noneTotal5 + noneTotal6) } `
        document.getElementById("cityTotal").innerHTML = `Total living expense: $${(rentFinal + cityUtil + (cityGroc*155.1) + ((cityRest/2.5)*2.5*4) + noneTotal1 + noneTotal2 + noneTotal3 + noneTotal4 + noneTotal5 + noneTotal6)}`
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

    takeHome = Math.round(displayMonthly - theTotal)

    document.getElementById("userRent").innerHTML = `You planned on spending $${displayRent} on rent`
    document.getElementById("userUtility").innerHTML = `You planned on spending $${displayUtilities} on utilities`
    document.getElementById("userGroceries").innerHTML = `You planned on spending $${displayGroceries} on groceries`
    document.getElementById("userRestaurants").innerHTML = `You planned on spending $${displayEating} on eating out`
    document.getElementById("userNone").innerHTML= `You planned on spending $${displayStreaming + displayNone} on non-essentials`
    document.getElementById("sum").innerHTML = `Budgeted Spending: $${theTotal}`
    document.getElementById("takeHome").innerHTML = `Take Home: $${takeHome}`


    document.getElementById("finale").onclick = () => {
        summary.style.display = "none"
    finale.style.display = "none"
    let rentStatement;
    let utilStatement;
    let grocStatement;
    let eatStatement;
    let noneStatement;
    let difference;
    let difference5;
    let difference2;
    let difference3;
    let difference4;
    if (displayRent > rentFinal) {
        difference = displayRent - rentFinal
        document.getElementById("resultRent2").style.color = "green"
        rentStatement = `You overspent on rent by $${Math.round(difference)} compared to the average, you can ease up a little if you want.`
    } else {
        difference = rentFinal - displayRent;
        document.getElementById("resultRent2").style.color = "red"
        rentStatement = `Try and save $${Math.round(difference)} for rent to get a nice place` 
    }
    if (displayUtilities > (cityUtil + cityInt)) {
        difference5 = displayUtilities - (cityUtil + cityInt)
        document.getElementById("resultUtility2").style.color = "green"

        utilStatement = `You've budgeted enough for utilities, but by $${Math.round(difference5)}, you can ease up a little if you want`
    } else {
        difference5 = (cityUtil + cityInt) - displayUtilities
        document.getElementById("resultUtility2").style.color = "red"
        utilStatement = `Save $${Math.round(difference5)} more for utilities if you can.`
    }
    if (displayGroceries > (cityGroc*155.1)) {
        difference2 = displayGroceries - cityGroc*155.1
        document.getElementById("resultGroceries2").style.color = "green"
        grocStatement = `You've budgeted enough for groceries, but by $${Math.round(difference2)}, you don't really need that much food do you?`
    } else {
        difference2 = (cityGroc*155.1) - displayGroceries
        document.getElementById("resultGroceries2").style.color = "red"
        grocStatement = `Save $${Math.round(difference2)} more for groceries if you want to eat better`
    }
    if (displayEating > ((cityRest/2.5)*2.5*4)) {
        difference3 = displayEating - (cityRest/2.5)*2.5*4
        document.getElementById("resultRestaurants2").style.color = "green"
        eatStatement = `You've budgeted enough for eating out, but by ${Math.round(difference3)}, you can ease up a little if you want`
    } else {
        difference3 = ((cityRest/2.5)*2.5*4) - displayEating
        document.getElementById("resultRestaurants2").style.color = "red"
        eatStatement = `Save $${Math.round(difference3)} more for eating out if you want to do it more regularly`
    }
    if ((displayStreaming + displayNone) > (noneTotal1 + noneTotal2 + noneTotal3 + noneTotal4 + noneTotal5 + noneTotal6)) {
        difference4 = ((displayStreaming + displayNone) - (noneTotal1 + noneTotal2 + noneTotal3 + noneTotal4 + noneTotal5 + noneTotal6))
        document.getElementById("resultNone2").style.color = "green"
        noneStatement = `You've budgeted enough for non-essentials, but by $${Math.round(difference4)}, just bootleg your tv shows like the rest of us.`
    } else {
        difference4 = (noneTotal1 + noneTotal2 + noneTotal3 + noneTotal4 + noneTotal5 + noneTotal6) - (displayStreaming + displayNone)
        document.getElementById("resultNone2").style.color = "red"
        noneStatement = "You spent just enough, congrats"
    }
   
    

    document.getElementById("finalResults").style.display = "flex"
    document.getElementById("resultHeader").innerHTML = "Results"
    document.getElementById("plannerHeader").innerHTML = "Planner"
    document.getElementById("resultRent2").innerHTML = `${rentStatement}`
    document.getElementById("resultUtility2").innerHTML = `${utilStatement}`
    document.getElementById("resultGroceries2").innerHTML = `${grocStatement}`
    document.getElementById("resultRestaurants2").innerHTML = `${eatStatement}`
    document.getElementById("resultNone2").innerHTML = `${noneStatement}`
    
    document.getElementById("quip").innerHTML = "With a little luck... Things might work out for you. Might."


    let finalBudget = document.getElementById("budget").value
    let finalBudgetCost = document.getElementById("budgetCost").value
    let monthlyTime = finalBudgetCost / takeHome

    document.getElementById("plannerText").innerHTML = `If you want to buy a ${finalBudget} you will need to save up your monthly take home earnings of ${takeHome} for ${Math.round(monthlyTime)} months or ${Math.round(monthlyTime/12)} years to reach $${finalBudgetCost}, can you wait that long? If not, loans are always an option, but keep in mind that interest will force you to pay more than the original price, and it'll be another monthly expense you'll have to account for. Good luck.`
    

    }
    

}
