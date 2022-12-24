var getPasscode = document.getElementById("passcode").value;
var getPasscodeConf = document.getElementById("passcodeConf").value;

function validate() {
  if (getPasscode === getPasscodeConf) {
    alert("good");
  }
}
