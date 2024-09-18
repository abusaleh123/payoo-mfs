document.getElementById('last-add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoneyInput = document.getElementById('add-money-input').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(addMoneyInput);
    console.log(pinNumber);

    if(pinNumber === '1234'){
        console.log('You are Logged In');
        // window.location.href = '';
    }
    else{
        alert('wrong Pin Number')
    }
   
})