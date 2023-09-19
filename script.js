$(document).ready(function () {
    $('#imageSlider').carousel({
        interval: 100 // Change this value to adjust the sliding interval
    });
});

// Sample user data (replace with your actual user data)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Login logic
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
        alert('Login Successful!');
        window.location.href = 'dashboard.html'; // Redirect to the dashboard or any other page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Registration logic (you can implement this)
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const newUsernameInput = document.getElementById('new-username').value;
    const newPasswordInput = document.getElementById('new-password').value;

    // Implement registration logic here (e.g., adding the new user to your user data array)
    // This is a placeholder and should be replaced with your actual registration code

    alert('Registration Successful! You can now log in.');
});