// Make the background image move on scroll
window.addEventListener("scroll", function () {
    const parallax = document.querySelector(".parallax");
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
  });
  
  // Add hover effect to navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  
  navLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      link.style.color = "#ff7f50";
      link.style.transition = "all 0.3s ease";
    });
  
    link.addEventListener("mouseleave", function () {
      link.style.color = "#fff";
      link.style.transition = "all 0.3s ease";
    });
  });
  
  // Add hover effect to button
  const contactBtn = document.querySelector(".contact-btn");
  
  contactBtn.addEventListener("mouseenter", function () {
    contactBtn.style.background = "#fff";
    contactBtn.style.color = "#333";
    contactBtn.style.transition = "all 0.3s ease";
  });
  
  contactBtn.addEventListener("mouseleave", function () {
    contactBtn.style.background = "transparent";
    contactBtn.style.color = "#fff";
    contactBtn.style.transition = "all 0.3s ease";
  });
  