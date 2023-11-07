function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    
    const users = JSON.parse(sessionStorage.getItem('users')) || [];
    const user = findUser(users, username, password);
    if(!username||!password){
        if(!username&&!password){
        showMessage("Please Enter Both Username And Password",false);
        }
        else if(!username){
            showMessage("Please Enter Username",false);
        }
        else{
            showMessage("Please Enter Password",false);
        }
        return
    }
    if (user) {
        window.location.href = 'member.html';
    } else {
        showMessage("Login failed.",false);
    }
}

function signup() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    
    const users = JSON.parse(sessionStorage.getItem('users')) || [];
    if(!username||!password){
        if(!username&&!password){
        showMessage("Please Enter Both Username And Password",false);
        }
        else if(!username){
            showMessage("Please Enter Username",false);
        }
        else{
            showMessage("Please Enter Password",false);
        }
        return
    }
    if (isUsernameTaken(users, username)) {
        showMessage("Username already exists. Choose a different one.",false);
    } else {
        users.push({ username, password });
        sessionStorage.setItem('users', JSON.stringify(users));
        showMessage("Sign-up successful. You can now log in.",true);
    }
}

function isUsernameTaken(users, username) {
    return users.some(function(user) {
        return user.username === username;
    });
}


function findUser(users, username, password) {
    return users.find(function(user) {
        return user.username === username && user.password === password;
    });
}


function showMessage(message,success) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    if (success) {
        messageElement.style.color = "green";
    } else {
        messageElement.style.color = "red";
    }
}