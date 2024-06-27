document.addEventListener("DOMContentLoaded", function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });

  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
});

function clearForm() {
  document.getElementById("contactForm").reset();
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#navbar-toggler, .overlay').addEventListener('click', function () {
        document.querySelector('.mobileNav').classList.toggle('open');
        document.querySelector('.overlay').classList.toggle('open');
    });
})
