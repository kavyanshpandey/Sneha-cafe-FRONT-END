const toggle = document.querySelector('.toggle')
const logoColor = document.querySelector('.logo')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
    logoColor.classList.toggle('active')
})

//dark-light toggle
function Dark() {
  if (document.body.style.backgroundColor == "Grey") {
      document.body.style.backgroundColor = "Bisque"
      document.body.style.Color = "Black"
  } else {
      document.body.style.backgroundColor = "Grey";
      document.body.style.Color = "Blue"
  }
}


function sendToHome() {
    location.href = "../index.html";
}

