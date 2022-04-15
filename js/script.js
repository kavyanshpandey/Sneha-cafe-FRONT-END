const toggle = document.querySelector('.toggle')
const logoColor = document.querySelector('.logo')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('Click', () => {
    toggle.classList.toggle('Active')
    navigation.classList.toggle('Active')
    logoColor.classList.toggle('Active')
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
function Yellow() {
  if (document.body.style.backgroundColor == "Yellow") {
      document.body.style.backgroundColor = "GoldenRod"
      document.body.style.Color = "Gold"
  } else {
      document.body.style.backgroundColor = "Yellow";
      document.body.style.Color = "Orange"
  }
} 



function sendToHome() {
    location.href = "../index.html";
}

