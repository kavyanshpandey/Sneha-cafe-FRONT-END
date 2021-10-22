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
    location.href = "./index.html";
}


$( "#contact_form" ).submit(function( event ) {
    var text = $('#contact_form').find('input[name="name"]').val();
    $("#contact_form").addClass("shrink");
    $(".container").addClass("bgchange");
    $(".thanks").addClass("reveal");
    $("body").addClass("invert");
    $( ".thanks" ).append( "<span>" + text + "</span>" );
    event.preventDefault();
  
    
  });
