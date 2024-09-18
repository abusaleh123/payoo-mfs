console.log('Hello ami kintu ashchi ekhon jayga charo');

// * form submit reloading the page
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault(); // ? vejal ache kintu
    console.log('login button clicked');

    // * 3: get the phone number



    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})