function function1() {

    document.getElementById("cart").style.display = "block";

// pizza size and cost for different sizes 

    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var sizeSel = sizeArray[i].value;
        }
    }
    document.getElementById("item1").innerHTML = sizeSel;

    var sizeTotal = 0;
    if (sizeSel === "Personal Pizza") {
		sizeTotal = 6;
	} else if (sizeSel === "Medium Pizza") {
		sizeTotal = 10;
	} else if (sizeSel === "Large Pizza") {
		sizeTotal = 14;
	} else if (sizeSel === "Extra Large Pizza") {
		sizeTotal = 16;
    }
    document.getElementById("item1Cost").innerHTML = "$"+sizeTotal+".00";

// pizza crust and cost for different crusts

    var crustArray = document.getElementsByClassName("crust");
    for (var i = 0; i < crustArray.length; i++) {
        if (crustArray[i].checked) {
            var crustSel = crustArray[i].value;
        }
    }
    document.getElementById("item2").innerHTML = crustSel;

    var crustTotal = 0;
    if (crustSel === "Cheese Stuffed Crust") {
        crustTotal = 3;
    } else if (crustSel === "Plain Crust, Garlic Butter Crust, Spicy Crust, House Special Crust") {
        crustTotal = 0;
    }
    document.getElementById("item2Cost").innerHTML = "$"+crustTotal+".00";

// sauce and cost for sauces

    var sauceArray = document.getElementsByClassName("sauce");
    for (var i = 0; i < sauceArray.length; i++) {
        if (sauceArray[i].checked) {
            var sauceSel = sauceArray[i].value;
        }
    }
    document.getElementById("item3").innerHTML = sauceSel;

    var sauceTotal = 0;
    document.getElementById("item3Cost").innerHTML = "$"+sauceTotal+".00";

// cheese and cost for cheeses

    var cheeseArray = document.getElementsByClassName("cheese");
    for (var i = 0; i < cheeseArray.length; i++) {
        if (cheeseArray[i].checked) {
            var cheeseSel = cheeseArray[i].value;
        }
    }
    document.getElementById("item4").innerHTML = cheeseSel;

    var cheeseTotal = 0;
    if (cheeseSel === "Extra Cheese") {
        cheeseTotal = 3;
    } else if (crustSel === "Regular Cheese, No Cheese") {
        cheeseTotal = 0;
    }
    document.getElementById("item4Cost").innerHTML = "$"+cheeseTotal+".00";

// meat options
    var meatArray = document.getElementsByClassName("meat");
    var meatSel = []
    for (var i = 0; i < meatArray.length; i++) {
        if (meatArray[i].checked) {
            meatSel.push(meatArray[i].value);
        }
    }
    document.getElementById("itemMeat").innerHTML = meatSel;

    var meatTotal = 0;
    var meatCount = meatSel.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }	
    document.getElementById("meatCost").innerHTML = "$"+meatTotal+".00";  

// cheese options
    var veggiesArray = document.getElementsByClassName("veggies");
    var veggiesSel = []
    for (var i = 0; i < veggiesArray.length; i++) {
        if (veggiesArray[i].checked) {
            veggiesSel.push(veggiesArray[i].value);
        }
    }
    document.getElementById("itemVeggies").innerHTML = veggiesSel;

    var veggiesTotal = 0;
    var veggiesCount = veggiesSel.length;
    if (veggiesCount > 1) {
        veggiesTotal = (veggiesCount - 1);
    } else {
        veggiesTotal = 0;
    }	
    document.getElementById("veggiesCost").innerHTML = "$"+veggiesTotal+".00";  

// add the total
    var total = sizeTotal+crustTotal+sauceTotal+cheeseTotal+meatTotal+veggiesTotal;

    document.getElementById("totalCost").innerHTML = "$" + total + ".00";

// scroll down
    window.scrollTo(0, document.body.scrollHeight)
}

// cancel button 

function cancel() {

    document.getElementById("cart").style.display = "none";

    var allSize = document.getElementsByClassName("size");
    allSize[0].checked = true;
    for (i = 1; i < 3; i++) {
        allSize[i].checked = false;
    }

    var allCrust = document.getElementsByClassName("crust");
    allCrust[0].checked = true;
    for (i = 1; i < 4; i++) {
        allCrust[i].checked = false;
    }

    var allSauce = document.getElementsByClassName("sauce");
    allSauce[0].checked = true;
    for (i = 1; i < 3; i++) {
        allSauce[i].checked = false;
    }

    var allCheese = document.getElementsByClassName("cheese");
    allCheese[0].checked = true;
    for (i = 1; i < 2; i++) {
        allCheese[i].checked = false;
    }

    var allMeat = document.getElementsByClassName("meat");
    for (i = 0; i < allMeat.length; i++) {
        allMeat[i].checked = false;
    }

    var allVeggies = document.getElementsByClassName("veggies");
    for (i = 0; i < allVeggies.length; i++) {
        allVeggies[i].checked = false;
    }
}