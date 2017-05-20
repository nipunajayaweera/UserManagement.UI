var content = "";
document.addEventListener("DOMContentLoaded", function (event) {
    GetPageContentsList();
    LoadElements();

});

function GetPageContentsList() {
    var request = new XMLHttpRequest();
    request.open("get", "http://localhost:54213/api/custom/get", false);
    request.send();
    //var mydata = JSON.parse(request.);
}


function UserNameLabel() {
    var usernamelabel = document.createElement('label');
    usernamelabel.innerHTML = "User Name : ";

    var div = document.getElementById("userNameLabel");
    div.appendChild(usernamelabel);
}

function UserNameTextBox() {
    var userNameTxtBox = document.createElement('input');
    userNameTxtBox.type = "text";
    userNameTxtBox.name = "userNameTxtBox";
    userNameTxtBox.placeholder = "Enter your UserName";

    var div = document.getElementById("userNameTextBox");
    div.appendChild(userNameTxtBox);
}

function PasswordLabel() {
    var passwordlabel = document.createElement('label');
    passwordlabel.innerHTML = "Password : ";

    var div = document.getElementById("passwordLabel");
    div.appendChild(passwordlabel);
}

function PasswordTextField() {
    var passwordtextfield = document.createElement('input');
    passwordtextfield.type = "password";
    passwordtextfield.placeholder = "Enter Password";

    var div = document.getElementById("passwordField");
    div.appendChild(passwordtextfield);
}

function LoginButton() {
    var loginbutton = document.createElement('button');
    loginbutton.innerHTML = "Login";

    var div = document.getElementById('loginButton');
    div.appendChild(loginbutton);
}

function LoadElements() {
    //UserNameLabel();
    //UserNameTextBox();
    //PasswordLabel();
    //PasswordTextField();
    //LoginButton();
    var usernamelabel = '<label>User Name : </label>';
    var userNameTxtBox = '<input id="userNameTxtBox" type="text" name="firstname"><br>';
    var passwordlabel = '<label>Password : </label>';
    var passwordtextfield = '<input id="passwordtextfield" type="password" name="psw"><br>';
    var loginbutton = '<input type="submit" value="Login" onclick="LoginClickEvent()">';

    var elementOrder = [usernamelabel, userNameTxtBox, passwordlabel, passwordtextfield, loginbutton];

    for (var i = 0; i < elementOrder.length; i++) {
        content = content.concat(elementOrder[i]);
    }

    
    var body = document.getElementById('body');
    body.innerHTML = content;
}

function LoginClickEvent() {
    var userName = document.getElementById('userNameTxtBox').value;
    var password = document.getElementById('passwordtextfield').value;
    alert(userName);
}