document.getElementById('last-cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutInput = document.getElementById('cash-out-input').value;
    const cashOutNumber = parseFloat(cashOutInput);
    const cashOutPin = document.getElementById('cash-out-pin-number').value;
    if(cashOutPin === '1234'){
        console.log('Your cash Out is processing ');
        const currentBalance = document.getElementById('current-balance').innerText;
        console.log(currentBalance);
        const balance = parseFloat(currentBalance);
        const newBalance = balance - cashOutNumber;
        console.log(newBalance);
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('your cash out failed, please try again later')
    }
})