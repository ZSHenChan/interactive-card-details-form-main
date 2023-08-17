const form = document.getElementById("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const cardholderName = document.getElementById("cardholder-name");
    // localStorage.setItem("userName",cardholderName);
    const cardNumber = document.getElementById("card-number");
    // localStorage.setItem("userCardNum",cardNumber);
    const expMonth = document.getElementById("exp-month");
    const expYear = document.getElementById("exp-year");
    // localStorage.setItem("exp-date",)
    const cvc = document.getElementById("cvc");

    console.log(cardholderName);
    const cardHolderNameDisplay = document.getElementById("cardholder-name-display");
    const cardNumberDisplay = document.getElementById("card-number-display");
    const expDateDisplay = document.getElementById("exp-date-display");
    const cvcDisplay = document.getElementById("cvc-display");

    cardHolderNameDisplay.innerHTML = cardholderNam.value;
    cardNumberDisplay.innerHTML = cardNumber.value;
    expDateDisplay.innerHTML = expMonth.value+'/'+expYear.value;
    cvcDisplay.innerHTML = cvc.value;
})