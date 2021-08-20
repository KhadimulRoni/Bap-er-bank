document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmmount = depositInput.value;
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmmount = depositTotal.innerText;
    const newDipositTotal = parseFloat(previousDepositAmmount) + parseFloat(newDepositAmmount);
    depositTotal.innerText = newDipositTotal;
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmmount);
    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '';
});
// Withdrowwwwwwwww

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmmount = withdrawInput.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmmount = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawAmmount)+parseFloat(newWithdrawAmmount);
    withdrawTotal.innerText = newWithdrawTotal;
    withdrawInput.value = '';
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - parseFloat(newWithdrawAmmount);
    balanceTotal.innerText = newBalanceTotal;
})