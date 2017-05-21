var content = "";
var activeComponentList;
document.addEventListener("DOMContentLoaded", function (event) {
    GetPageContentsList('Login');    
});

function GetPageContentsList(pageName) {
    try {
        var request = new XMLHttpRequest();
        request.open("get", "http://localhost:54213/api/ScreenComponent/GetActiveComponents/" + pageName, false);
        request.send();
        activeComponentList = JSON.parse(request.responseText);
        LoadElements();
    } catch (e) {
        throw e;   
    }
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

    //var elementOrder = [usernamelabel, userNameTxtBox, passwordlabel, passwordtextfield, loginbutton];
    var elementOrder = ['usernamelabel', 'userNameTxtBox', 'passwordlabel', 'passwordtextfield', 'loginbutton'];
    for (var i = 0; i < elementOrder.length; i++) {

        if (activeComponentList.includes(elementOrder[i])) {
            console.log("true");

            switch (elementOrder[i]) {
                case 'usernamelabel':
                    content = content.concat(usernamelabel);
                    break;
                case 'userNameTxtBox':
                    content = content.concat(userNameTxtBox);
                    break;
                case 'passwordlabel':
                    content = content.concat(passwordlabel);
                    break;
                case 'passwordtextfield':
                    content = content.concat(passwordtextfield);
                    break;
                case 'loginbutton':
                    content = content.concat(loginbutton);
                    break;
                default:
                    break;  
            }  
        } else {
            console.log("false");

        }

    }
     
    var body = document.getElementById('body');
    body.innerHTML = content;
}

function LoginClickEvent() { 
    var userName = document.getElementById('userNameTxtBox').value;
    var password = document.getElementById('passwordtextfield').value;
    
    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:54213/api/User/CheckLogin');
    request.setRequestHeader('Content-Type', 'application/json');

    var userInfo = null;
    request.onload = function () {
        if (request.status === 200) {
            userInfo = JSON.parse(request.responseText);
            if (userInfo == true) {
                alert("Login Successfully")
            } else {
                alert("Login Incorrect")
            }
        }
    };
    request.send(JSON.stringify({ "UserName": userName, "PasswordHash": password }));
   
}