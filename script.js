const submitBtn = document.getElementById('submit');
const email = document.getElementById('email');
const password = document.getElementById('password');

submitBtn.addEventListener('click', function() {
    if (email.value == 'sontan@baap.com' && password.value == 'secret') {
        window.location.href = "banking.html";
    } else {
        console.log('Invalid email or password');
    }
})