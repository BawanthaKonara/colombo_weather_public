const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "username" && password === "12345678") {
        

        window.location.href = "home.html";

        //alert("You have successfully logged in.");

        //location.reload();

    } else {
        
        alert("Error password or UserName");
    }
})