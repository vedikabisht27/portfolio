const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.8) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

(function() {
    emailjs.init("trK7wAOkDLGSR88Hc"); // from your EmailJS dashboard
  })();

  const form = document.getElementById("contact-info");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_httzl8e", "template_8dcqn8q", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
      }, (error) => {
        alert("❌ Failed to send message. Please try again.");
        console.error(error);
      });
  });

  const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});




