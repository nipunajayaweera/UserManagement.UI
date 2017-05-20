var content = "";
var activeComponentList;
document.addEventListener("DOMContentLoaded", function (event) {
    GetPageContentsList('Login');

});

function GetPageContentsList(pageName) {
    try {
        var request = new XMLHttpRequest();
        request.open("get", "http://localhost:54213/api/ScreenComponent/" + pageName, false);
        request.send();
        LoadElements();
    } catch (e) {
        throw "404";

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
    alert(userName);
    var request = new XMLHttpRequest();
    var params = { userName, password };
    request.open("POST", "http://localhost:54213/api/ScreenComponent/", true);

    //Send the proper header information along with the request
    request.setRequestHeader('Content-Type', 'application/json');

    request.onreadystatechange = function () {//Call a function when the state changes.
        if (request.readyState == 4 && request.status == 200) {
            alert(request.responseText);
        }
    }
    request.send(JSON.stringify(params));
}