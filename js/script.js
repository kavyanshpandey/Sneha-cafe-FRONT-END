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
function Brown() {
  if (document.body.style.backgroundColor == "Brown") {
      document.body.style.backgroundColor = "Chocolate"
      document.body.style.Color = "Sienna"
  } else {
      document.body.style.backgroundColor = "Brown";
      document.body.style.Color = "Peru"
  }
}


function sendToHome() {
    location.href = "../index.html";
}

