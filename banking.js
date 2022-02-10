const depositBtn = document.getElementById('deposit-btn');
const depositAmount = document.getElementById('deposit-amount');
const depositTotal = document.getElementById('deposit-dollars');
const balance = document.getElementById('balance-dollars');
// Deposit function

depositBtn.addEventListener('click', function() {
    sum = parseFloat(depositTotal.innerText);
    sum += parseFloat(depositAmount.value);
    depositTotal.innerText = sum;
    var newBalance = parseFloat(balance.innerText);
    newBalance += parseFloat(depositAmount.value);
    balance.innerText = newBalance;
    depositAmount.value = '';
})

// Withdraw Function
const withdrawBtn = document.getElementById('withdraw-btn');
const withdrawAmount = document.getElementById('withdraw-amount');
const withdrawTotal = document.getElementById('withdraw-dollars');
withdrawBtn.addEventListener('click', function() {
    sum = parseFloat(withdrawTotal.innerText);
    sum += parseFloat(withdrawAmount.value);
    withdrawTotal.innerText = sum;
    // withdrawTotal.innerText = withdrawAmount.value;
    var newBalance = parseFloat(balance.innerText);
    newBalance -= parseFloat(withdrawAmount.value);
    balance.innerText = newBalance;
    withdrawAmount.value = '';

})