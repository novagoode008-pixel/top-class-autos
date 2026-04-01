// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form validation
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = '#F97316';
      } else {
        field.style.borderColor = 'rgba(15,23,42,0.08)';
      }
    });
    
    if (!isValid) {
      e.preventDefault();
      alert('Please fill in all required fields');
    }
  });
}

// Scroll effects
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.service-card, .testimonial, .faq-item');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

// Initial card setup
document.querySelectorAll('.service-card, .testimonial, .faq-item').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s ease';
});
