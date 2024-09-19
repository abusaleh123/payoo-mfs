// ? show the cash out form

document.getElementById('first-cash-out-btn').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');

    // ? hide the add money form

        document.getElementById('add-money-form').classList.add('hidden')
 
});
document.getElementById('first-add-money-btn').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden')
})