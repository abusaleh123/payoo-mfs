// document.getElementById('last-add-money-btn').addEventListener('click', function(event){
//     event.preventDefault();
    
//     const addMoneyInput = document.getElementById('add-money-input').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(addMoneyInput);
//     console.log(pinNumber);

//     if(pinNumber === '1234'){
//         console.log('Adding money to your Account');
//         // window.location.href = '';
//          // * step 4 : get the current amount

//          const currentBalance = document.getElementById('current-balance').innerText;
//          console.log(currentBalance);

//         //  ? Step 5 : add addMoneyInput with Balance

//      const addMoneyNumber = parseFloat(addMoneyInput);
//      const balanceNumber = parseFloat(currentBalance);
//      console.log(balanceNumber);
//      const newBalance = addMoneyNumber + balanceNumber;
//      console.log(newBalance);

//     //  ? step 6 : update the balance
//     document.getElementById('current-balance').innerText = newBalance;
//     }

   
//     else{
//         alert('Failed to add money please try again later')
//     }
   
// })


document.getElementById('last-add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
   const addMoneyInput = document.getElementById('add-money-input').value;
   const pinNumber = document.getElementById('pin-number').value;
   console.log(addMoneyInput);
   console.log(pinNumber);
   if(pinNumber === '1234'){
    console.log('adding your balance');
    const currentBalance = document.getElementById('current-balance').innerText;
    console.log(currentBalance);
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(currentBalance);
    const newBalance = balanceNumber - addMoneyNumber  ;
    console.log(newBalance);
    document.getElementById('current-balance').innerText = newBalance;
   }
   else{
    alert('failed to add your balance, please try again later')
   }
})