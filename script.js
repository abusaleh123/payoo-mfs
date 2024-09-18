// console.log('Hello ami kintu ashchi ekhon jayga charo');

// // * form submit reloading the page
// document.getElementById('login-btn').addEventListener('click', function(event){
//     event.preventDefault(); // ? vejal ache kintu

//     // * 3: get the phone number and the pin number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber);
//     // ! This is temporary
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are login');
//     }
//     else{
//         alert('Wrong phone Number or pin')
//     }
// })
// document.getElementById('login-btn').addEventListener('click', function(event){
//     event.preventDefault();
   
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber);
//     console.log(pinNumber);

//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in');
//         window.location.href = 'home.html';
//     }
//     else{
//         alert('wrong phone number or pin')
//     }
// })



document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber);
    console.log(pinNumber);


    if(phoneNumber === '017' && pinNumber === '12345'){
        console.log('You are logged In');
        window.location.href = 'home.html';

    }
    else{
        alert('wrong phone number or pin')
    }
})