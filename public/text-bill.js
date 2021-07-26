// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button
var addButton = document.querySelector(".addToBillBtn")
//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector(".callTotalOne")
var smsTotalOne = document.querySelector(".smsTotalOne")
var totalOne = document.querySelector(".totalOne")
//add an event listener for when the add button is pressed 

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
var callCount =0;
var smsCount = 0;
var totalBill = 0;
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


function textBillTotal() {

    var bill = document.querySelector(".billTypeText").value
    
    var callCost = 2.75;
    var smsCost = 0.65;
    if(bill == ""){
        document.querySelector(".billTypeText").style.border = " 10px solid red";
        document.querySelector(".billTypeText").value = "please input sms or call"
        setTimeout(function(){ 
            document.querySelector(".billTypeText").style.border = "";
            document.querySelector(".billTypeText").value = "";
        }, 1000);
    }
     
    if(bill === "call") {
        callCount += callCost;

    } else if(bill === "sms"){
        smsCount += smsCost;
    }
    
    totalBill = callCount + smsCount;

    callTotalOne.innerHTML = callCount.toFixed(2); 
    smsTotalOne.innerHTML = smsCount.toFixed(2); 
    totalOne.innerHTML = totalBill.toFixed(2);  
   
    if(totalBill >=30 && totalBill < 50 ){
        totalOne.style.color = "orange"; 
    } else if(totalBill >=50){
        totalOne.style.color = "red";
    } else if(totalBill < 30){
        totalOne.style.color = "black";
    }

    
}

addButton.addEventListener("click", textBillTotal)