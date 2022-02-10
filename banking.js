const depositBtn = document.getElementById('deposit-btn');
const depositAmount = document.getElementById('deposit-amount');
const depositTotal = document.getElementById('deposit-dollars');
const balance = document.getElementById('balance-dollars');
// Deposit function

depositBtn.addEventListener('click', function() {
    sum = parseInt(depositTotal.innerText);
    sum += parseInt(depositAmount.value);
    depositTotal.innerText = sum;


    // var newBalance = parseInt(balance.innerText);
    // newBalance += parseInt(depositTotal.innerText);
    // balance.innerText = newBalance;
    // depositAmount.value = '';


    var newBalance = parseInt(balance.innerText);
    newBalance += parseInt(depositAmount.value);
    balance.innerText = newBalance;
    depositAmount.value = '';
})

// Withdraw Function
const withdrawBtn = document.getElementById('withdraw-btn');
const withdrawAmount = document.getElementById('withdraw-amount');
const withdrawTotal = document.getElementById('withdraw-dollars');
withdrawBtn.addEventListener('click', function() {
    withdrawTotal.innerText = withdrawAmount.value;
    var newBalance = parseInt(balance.innerText);
    newBalance -= parseInt(withdrawTotal.innerText);
    balance.innerText = newBalance;
    withdrawAmount.value = '';

})