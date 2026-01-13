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

  const formData = new FormData(this);

  fetch("https://script.google.com/macros/s/AKfycbzq94xWN80CDQzKz2yPMua4JmgaHMC-nSNcxQqducnPUhbUCVO4S-l17ghZW3dlalSrVQ/exec", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(() => {
    alert("Message sent successfully 🚀");
    this.reset();
  })
  .catch(err => {
    console.error(err);
    alert("Something went wrong 😬");
  });
});

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

