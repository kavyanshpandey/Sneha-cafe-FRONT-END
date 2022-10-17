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