
// Get Input Value 
function getInputValue(inputId) {
    const Input = document.getElementById(inputId);
    const inputFiled = Input.value;
    const inputAmount = parseFloat(inputFiled);
    // Get Input Filed 
    Input.value = '';
    return inputAmount;
}



// Get Input Update 
function totalUpdate(totalFiled, amount) {
    const depositAmount = document.getElementById(totalFiled);
    const depositTotal = depositAmount.innerText;
    const previousDeposit = parseFloat(depositTotal);
    const TotalDepositAmount = previousDeposit + amount;
    depositAmount.innerText = TotalDepositAmount;
}

function getBlanceAcount() {
    const totalAddBlance = document.getElementById('totalBlance');
    const newBlanceText = totalAddBlance.innerText;
    const prevBlance = parseFloat(newBlanceText);
    return prevBlance;
}

// Blance Amount 
function totalBlance(amount, isAddBlance) {
    const totalAddBlance = document.getElementById('totalBlance');
    /*
    const newBlanceText = totalAddBlance.innerText;
    const prevBlance = parseFloat(newBlanceText); */
    const prevBlance = getBlanceAcount();

    if (isAddBlance == true) {
        const previousBlance = prevBlance + amount;
        totalAddBlance.innerText = previousBlance;

    } else {
        const previousBlance = prevBlance - amount;
        totalAddBlance.innerText = previousBlance;
    }
}


// Deposit Amount 
document.getElementById('depositBtn').addEventListener('click', function () {

    const newDepositAmount = getInputValue('depositMoney');

    if (newDepositAmount > 0) {
        // Call Deposit Function 
        totalUpdate('totalDeposit', newDepositAmount);
        totalBlance(newDepositAmount, true)
    }

})


// WithDraw Amount 
document.getElementById('withdrawBtn').addEventListener('click', function () {
    const previousWithDrawAmount = getInputValue('withdrawMoney')
    const currentBlance = getBlanceAcount();
    if (previousWithDrawAmount > 0 && previousWithDrawAmount <= currentBlance) {
        // Call Withdraw Function 
        totalUpdate('totalWithdraw', previousWithDrawAmount);
        // Get Minus Blance 
        totalBlance(previousWithDrawAmount, false)

    }
    
    if(previousWithDrawAmount>currentBlance){
        alert ('Please Check your blance amount!')
    }
})