const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const interestForm = document.getElementById('interestForm');
const formMessage = document.getElementById('formMessage');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

interestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const interest = document.getElementById('interest').value;

  formMessage.textContent = `Thank you, ${name}. Your interest in ${interest || 'supporting us'} has been received.`;
  interestForm.reset();
});

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value.trim();

  newsletterMessage.textContent = `Thanks for subscribing with ${email}.`;
  newsletterForm.reset();
});
