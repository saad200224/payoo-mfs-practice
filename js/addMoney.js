document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoney = getInputFieldValueById('input-add-money');

    const pinNumber = getInputFieldValueById('input-pin-number');

    if(isNaN(addMoney)){
        alert('Failed to add money.');
        return;
    }

    if ( pinNumber === 1234 ){
        const balance = getTextFieldValueById('acount-balance');
        const newBalance = balance + addMoney;
        document.getElementById('acount-balance').innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`;
        document.getElementById('transaction-container').appendChild(p);

    }
    else{
        alert('Wrong PIN. Add Money Failed.')
    }
    
})