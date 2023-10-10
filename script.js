process.setMaxListeners(15);
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

// Get references to the buttons by their IDs

//login start 
const inputField = document.getElementById('inputField');
const sendOTPBtn = document.getElementById('sendOTPBtn');
const otpDiv = document.getElementById('otpDiv');
const otpField = document.getElementById('otpField');
const loginBtn = document.getElementById('loginBtn');

sendOTPBtn.addEventListener('click', () => {
    // Implement OTP generation logic here (not shown in this example)
    function generateOTP() {
        const length = 6; // Length of the OTP
        let otp = '';
    
        for (let i = 0; i < length; i++) {
            otp += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
        }
    
        return otp;
    }
    
    // Simulate OTP generation for demonstration purposes
    const generatedOTP = Math.floor(1000 + Math.random() * 9000);
    alert(`OTP sent to ${inputField.value}: ${generatedOTP}`);
    
    // Show the OTP input field
    otpDiv.style.display = 'block';
    sendOTPBtn.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
    const enteredOTP = otpField.value;
    // Implement OTP verification logic here (not shown in this example)
    // For demonstration purposes, compare entered OTP with a generated OTP
    //const generatedOTP = /* Retrieve the generated OTP */;
    
    if (enteredOTP === generatedOTP) {
        alert('Login successful!');
        // Redirect to the dashboard or perform other actions
    } else {
        alert('Invalid OTP. Please try again.');
    }
});

//login end