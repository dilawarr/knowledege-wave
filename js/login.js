function displayLogin() {
    document.getElementById("signInForm").style.display = "block";
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("signUpButton").style.border = "none";
    document.getElementById("loginButton").style.border = "solid #3535354b 1px";
    document.getElementById("loginButton").style.borderBottom = "solid #FFFFFF 1px";
}

function displaySignUp() {
    document.getElementById("signInForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
    document.getElementById("loginButton").style.border = "none";
    document.getElementById("signUpButton").style.border = "solid #3535354b 1px";
    document.getElementById("signUpButton").style.borderBottom = "solid #FFFFFF 1px";
}