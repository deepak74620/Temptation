// alert("hey")

const loginButton = document.getElementById('login-button');
const loginBox = document.getElementById('login-box');

// Add click event listener to login button
loginButton.addEventListener('click', function () {
    // Toggle display of login box
    loginBox.style.display = (loginBox.style.display === "none") ? "block" : "none";
});