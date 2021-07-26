//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn")
//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button


function totalPhoneBill() {
    var bill = document.querySelector(".billString").value;
   
    var callCount = 0;
  	var smsCount = 0;
    var callCost = 2.75;
    var smsCost = 0.65;
    var totalBill;
    var str = bill.replace(/ /g,'')
  	var input = str.split(',');
 
    for(var i = 0; i < input.length; i++) {
        if(input[i] === "call") {
            callCount++;
            
        } else if(input[i] === "sms"){
        	smsCount++;
        }
    }
    totalBill = (smsCount * smsCost) + (callCount * callCost)
   
    if(totalBill >=20 && totalBill < 30){
        document.querySelector(".billTotal").style.color = "orange";
        document.querySelector(".billTotal").innerHTML = totalBill.toFixed(2);
    } else if(totalBill >=30){
        document.querySelector(".billTotal").style.color = "red";
        document.querySelector(".billTotal").innerHTML = totalBill.toFixed(2);
    } else if(totalBill < 20){
        document.querySelector(".billTotal").style.color = "black";
        document.querySelector(".billTotal").innerHTML = totalBill.toFixed(2);
    }
    document.querySelector(".billTotal").innerHTML = totalBill.toFixed(2);
}

calculateBtn.addEventListener("click", totalPhoneBill)

//setInterval(totalPhoneBill, 100);

 /* 
        ******TODO*****
    add keydown event listner on key down C = write call to text area S = write
    sms to text area        
    add range slider 
    
    
    code example
    
    <textarea id="myTextarea">
342 Alvin Road
Ducksburg</textarea>

<p>Click the button to change the contents of the text area.</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("myTextarea").value = "Fifth Avenue, New York City";
}*/
