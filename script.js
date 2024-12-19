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






  var cursor = $(".cursor"),
  follower = $(".cursor-follower");

var posX = 0,
  posY = 0;

var mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
repeat:-1,
onRepeat:function(){
  posX += (mouseX - posX) / 9;
  posY += (mouseY - posY) / 9;
  
  TweenMax.set(follower, {
    css: {
      left: posX - 12,
      top: posY - 12
    }
  });
  TweenMax.set(cursor, {
    css: {
      left: mouseX,
      top: mouseY
    }
  });
}	
});

$(document).on("mousemove",function(e){
mouseX = e.pageX;
mouseY = e.pageY;
});





