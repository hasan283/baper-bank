// Deposit Amount 
document.getElementById('depositBtn').addEventListener('click', function () {
    const depositInput = document.getElementById('depositMoney');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);


    const depositAmount = document.getElementById('totalDeposit');
    const depositTotal = depositAmount.innerText;
    const previousDeposit = parseFloat(depositTotal);


    const TotalDepositAmount = previousDeposit + newDepositAmount;

    depositAmount.innerText = TotalDepositAmount;


    // Get Add Blance 
    const totalAddBlance = document.getElementById('totalBlance');
    const newBlanceText = totalAddBlance.innerText;
    const prevBlance = parseFloat(newBlanceText);
    const previousBlance = prevBlance + newDepositAmount;
    totalAddBlance.innerText = previousBlance;
    console.log(newDepositAmount);


    // Get Input Filed 
    depositInput.value = '';
})


// WithDraw Amount 
document.getElementById('withdrawBtn').addEventListener('click', function () {
    const newWithDrawText = document.getElementById('withdrawMoney');
    const newWithDrawBlanceAmount = newWithDrawText.value;
    const previousWithDrawAmount = parseFloat(newWithDrawBlanceAmount);


    const previousWithDraw = document.getElementById('totalWithdraw');
    const newWithDrawAmount = previousWithDraw.innerText;
    const newWithDrawAdd = parseFloat(newWithDrawAmount)
    const totalWithDrawMoney = newWithDrawAdd + previousWithDrawAmount;

    previousWithDraw.innerText = totalWithDrawMoney;
    console.log(totalWithDrawMoney);



    // Get Minus Blance 
    const blanceInput = document.getElementById('totalBlance');
    const prevBlanceText = blanceInput.innerText;
    const prevBlanceAmount = parseFloat(prevBlanceText);
    const newBlanceAmount = prevBlanceAmount - previousWithDrawAmount;
    blanceInput.innerText = newBlanceAmount;


    // Get Input Filed 
    newWithDrawText.value = '';


})