// Login Page --> index.html

const email ='user@gmail.com';
const password ='password123';

const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    if (emailInput.value === email && passwordInput.value === password) {
        window.location.href = 'todo.html';
    } else {
        errorMessage.classList.remove('d-none');
    }
});
