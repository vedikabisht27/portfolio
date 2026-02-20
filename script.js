// for text appearing bin typing mode
const texts = [
    "Vedika 👩‍💻",
    "a Web Developer",
    "a React Enthusiast",
    "an MCA Student",
    "a Problem Solver"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {
    let currentText = texts[textIndex];
    
    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }
    
    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();


// Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.8) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
});
backToTop.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => navbar.classList.toggle("active"));

// Contact form submit
document.getElementById("contact-info").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const button = document.getElementById("sendBtn");

  // Disable button + change text
  button.value = "Wait...";
  button.disabled = true;
  button.style.opacity = "0.7";
  button.style.cursor = "not-allowed";

  const formData = new FormData(form);

  fetch("YOUR_SCRIPT_URL_HERE", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(() => {
    showPopup("Message sent successfully 🚀");
    form.reset();
  })
  .catch(err => {
    console.error(err);
    showPopup("Something went wrong 😬");
  });
});

// popup 
function showPopup(message) {
  const popup = document.getElementById("popup");
  const msg = document.getElementById("popup-message");

  msg.textContent = message;
  popup.classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");

  const button = document.getElementById("sendBtn");
  button.value = "Send";
  button.disabled = false;
  button.style.opacity = "1";
  button.style.cursor = "pointer";
}

//https://script.google.com/macros/s/AKfycbyayRzxPKJ8E5cErzHreJYaliRtYUTubKpfoMseQfoacygKdSekmjW5H0QEAy_k4HkuAA/exec

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Name validation (only letters & space)
  if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
    alert("Name can contain only letters");
    nameInput.focus();
    return;
  }

  // Phone validation (only numbers, 10 digits)
  if (!/^\d{10}$/.test(phoneInput.value)) {
    alert("Phone number must be 10 digits only");
    phoneInput.focus();
    return;
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    alert("Enter a valid email address");
    emailInput.focus();
    return;
  }

  alert("Form submitted successfully 🚀");
  form.reset();
});

