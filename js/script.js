const toggle = document.querySelector('.toggle')
const logoColor = document.querySelector('.logo')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
    logoColor.classList.toggle('active')
})

//dark-light toggle
function dark() {
    if (document.body.style.backgroundColor == "grey") {
        document.body.style.backgroundColor = "bisque"
        document.body.style.Color = "black"
    } else {
        document.body.style.backgroundColor = "grey";
        document.body.style.Color = "blue"
    }
}


function sendToHome() {
    window.location.href = "./index.html"
}
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let val = true;
fname.addEventListener("blur", () => {
  let str = fname.value;
  let reg = /^([a-zA-Z]){0,10}$/;
  if (!reg.test(str)) {
    console.log("Validated");
    setError("ferror", "Invalid First Name");
    val = false;
  } else {
    document.getElementById("ferror").innerHTML = "";
    val = true;
  }
});
lname.addEventListener("blur", () => {
  let str = lname.value;
  let reg = /^([a-zA-Z]){0,10}$/;
  if (!reg.test(str)) {
    console.log("Validated");
    setError("lerror", "Invalid Last Name");
    val = false;
  } else {
    document.getElementById("lerror").innerHTML = "";
    val = true;
  }
});
email.addEventListener("blur", () => {
  let str = email.value;
  let reg =
    /^([a-zA-Z.]){0,20}([0-9]){0,20}@([a-zA-Z]){0,20}\.([a-zA-Z]){0,10}(\.in)?$/;
  if (!reg.test(str)) {
    console.log("Validated");
    setError("eerror", "Invalid Email");
    val = false;
  } else {
    document.getElementById("eerror").innerHTML = "";
    val = true;
  }
});
function setError(id, error) {
  ele = document.getElementById(id);
  ele.innerHTML = error;
}
function validateForm() {
  return val;
}



function validate() {
    if (document.myForm.first.value == "") {
        alert("Please provide your First Name!");
        document.myForm.first.focus();
        return false;
    }
    if (document.myForm.last.value == "") {
        alert("Please provide your Last Name!");
        document.myForm.last.focus();
        return false;
    }
    if (document.myForm.Email.value == "") {
        alert("Please provide your Email!");
        document.myForm.Email.focus();
        return false;
    }
    if (document.myForm.sub.value == "") {
        alert("Please provide your Reason");
        document.myForm.sub.focus();
        return false;
    }
    return (true);
}