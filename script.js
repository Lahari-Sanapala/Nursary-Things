document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); 
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '↑';
  backToTopButton.className = 'back-to-top';
  document.body.appendChild(backToTopButton);
  
  backToTopButton.style.display = 'none'; 
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  