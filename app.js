// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')

  // Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})

// Type Writer Effect //
  const text = [
  "FRONTEND",
  "WEB DEVELOPER",
  "ANDROID DEVELOPER"
]

let speed = 100;
const textElements = document.querySelector(".pointer-lable-text");

let textIndex = 0;
let characterIndex = 0;

function typeWrite() {
  if (characterIndex < text[textIndex].length) {
    textElements.innerHTML += text[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWrite, speed);
  }

  else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);

  }
  else {
    textIndex = (textIndex + 1) % text.length;
    characterIndex = 0;
    setTimeout(typeWrite, 500)
  }

}


window.onload = typeWrite

 // Card Read Effect
  function toggleText(button) {
    const card = button.closest('.card');
    const moreText = button.previousElementSibling;
    const title = card.querySelector('.c-title');
    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      title.style.display = "block";
      button.textContent = "..Read more";
    } else {
      moreText.style.display = "inline";
      title.style.display = "none";
      button.textContent = "..Read less";
    }
  }


// Initialize EmailJS for Contact Form
(function() {
  emailjs.init("E3CC-cM7M_y4MiOg4"); // Replace with your EmailJS public key
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_ajm8y9g", "template_2103arn", this)
    .then(function() {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("Failed to send message. Error: " + JSON.stringify(error));
    });
});
