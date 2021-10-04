const toggle = document.querySelector('.toggle')
const logoColor = document.querySelector('.logo')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('acve')
  navigation.classList.toggle('active')
  logoColor.classList.toggle('active')
})
