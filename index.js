var body = document.querySelector(".body");
var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var btnCheck = document.querySelector("#check");
var outputMessage = document.querySelector("#outputTxt");
const outputGif = document.querySelector("#outputImg");


btnCheck.addEventListener("click", function clickHandler(){
    let initP = Number(initialPrice.value);
    let quan = Number(quantity.value);
    let currP = Number(currentPrice.value);
    if(initP > 0 && quan >0 && currP > 0)
    {
        checkProfitOrLoss(initP,quan,currP);
    }
    else{
        outputMessage.innerText = "Please enter a valid input!";
    }
});

function checkProfitOrLoss(initial, quantity, current)
{
    if(initial > current)
    {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial).toFixed(2);
        result(2,loss,lossPercentage);
    }
    else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial).toFixed(2);
        result(1,profit,profitPercentage);

    } else {
        result(3,0,0);
    }

}

function result(status, amount, percentage)
{
    switch(status)
    {
        case 1:{
            outputMessage.innerText = "The profit is  ₹ " + amount + " and " + percentage + "% ";
            outputMessage.style.color="green";
            body.style.backgroundImage=" linear-gradient(#00642a, #bbefcc)";
            outputGif.src ="profit.gif";
            break;
        }
        case 2:{
            outputMessage.innerText = "The loss is  ₹ " + amount + " and " + percentage + "% ";
            outputMessage.style.color="red";
            body.style.backgroundImage=" linear-gradient(red, yellow)";
            outputGif.src ="loss.gif";
            break;
        }
        case 3:{
            outputMessage.innerText = "No profit or loss detected! ";
            outputMessage.style.color="#1e2761";
            body.style.backgroundImage=" linear-gradient(#1e2761, #408ec6)";
            outputGif.src ="";
            break;
        }
    }
}