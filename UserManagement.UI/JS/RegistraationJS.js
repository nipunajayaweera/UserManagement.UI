var content = "";

document.addEventListener("DOMContentLoaded", function (event) {
    LoadElements();
});

function LoadElements() {
    var firstnamelabel = '<label>First Name : </label>';
    var firstnametxtbox = '<input type="text" name="firstname" required><br>';
    var lastnamelabel = '<label>Last Name : </label>';
    var lastnametxtbox = '<input type="text" name="lastname" required><br>';
    var emaillabel = '<label>E mail Address : </label>';
    var emailtxtbox = '<input type="text" name="lastname" required><br>'
    var usernamelabel = '<label>User Name : </label>';
    var userNametxtbox = '<input type="text" name="firstname" required><br>';
    var passwordlabel = '<label>Password : </label>';
    var passwordtextfield = '<input type="password" name="psw" required><br>';
    var confirmpasswordlabel = '<label>Confirm Password : </label>';
    var confirmpasswordtextfield = '<input type="password" name="confirmpassword" required><br>';
    var registerbutton = '<input type="submit" value="Resister">';

    var elementOrder = [firstnamelabel, firstnametxtbox, lastnamelabel,
        lastnametxtbox, emaillabel, emailtxtbox, usernamelabel, userNametxtbox, passwordlabel, passwordtextfield, registerbutton];

    for (var i = 0; i < elementOrder.length; i++) {
        content = content.concat(elementOrder[i]);
    }
    var body = document.getElementById('body');
    body.innerHTML = content;
}
