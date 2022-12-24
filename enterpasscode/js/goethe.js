var Login = document.getElementById("ShowLoginform");
var Register = document.getElementById("Register");
var User = document.getElementById("UserName");
var Password = document.getElementById("password");
var PasswordConf = document.getElementById("passwordConf");
var Loginpassword = document.getElementById("Loginpassword");
var email = document.getElementById("email");
var Loginuser = document.getElementById("Loginuser");
var userres = /^[a-zA-z0-9]+$/;
var strongRegex = new RegExp("^(?=.{8,})");
var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

// A function or method that Validates the users input

// Validate Users password
function checkPass() {
  var Password = document.getElementById("password");
  if (Password.value == 151999) {
    document.getElementById("pass").innerHTML = "Valid passcode";
    document.getElementById("pass").style.color = "green";
  } else {
    //alert(DisplayMsg)
    document.getElementById("pass").innerHTML = "InValid passcode";
    document.getElementById("pass").style.color = "red";
  }
}

// Validate Password confirmation
function ValidatePass() {
  var getfirstname = document.getElementById("firstname");
  var Password = document.getElementById("password");
  var PasswordConf = document.getElementById("passwordConf");

  if (Password.value == PasswordConf.value) {
    document.getElementById("passConf").innerHTML = "Passcode Matched";
    document.getElementById("passConf").style.color = "green";
  } else {
    //alert(DisplayMsg)
    document.getElementById("passConf").innerHTML = "Passcode Mis-matched";
    document.getElementById("passConf").style.color = "red";
    return false;
    PasswordConf.focus();
    Password.value = "";
  }
}

//checks if the values is correct; if true redirects the user to the main site view But if false it requests for the right details
function OnclickLogin() {
  if (Password.value == PasswordConf.value && Password.value !== "") {
    window.location.href = "../gift.html";
    alert("Succesfully claimed")
  } else {
    alert("wrong details!! fix the error message to proceed");
  }
}

