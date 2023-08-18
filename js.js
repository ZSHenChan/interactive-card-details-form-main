const form = document.getElementById("form");

function validCardNum(){
    const errorMsg = document.getElementById("error-msg");
    const cardNumInput = document.getElementById("card-number");
    if (cardNumInput.value.match(/[0-9]{4}[\s][0-9]{4}[\s][0-9]{4}[\s][0-9]{4}$/)){
        return true;
    }
    else{
        errorMsg.style.display="flex";
        cardNumInput.style.borderColor="red";
        return false;
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    if (validCardNum()){
        const cardholderName = document.getElementById("cardholder-name");
        localStorage.setItem("userName",cardholderName.value);
        const cardNumber = document.getElementById("card-number");
        localStorage.setItem("userCardNum",cardNumber.value);
        const expMonth = document.getElementById("exp-month");
        const expYear = document.getElementById("exp-year");
        localStorage.setItem("exp-date",expMonth.value+"/"+expYear.value);
        const cvc = document.getElementById("cvc");
        localStorage.setItem("cvc",cvc.value)

        window.location.href="complete.html";
    }
})