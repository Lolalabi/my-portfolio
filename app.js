const navSlide = () => {
    const icon = document.querySelector('.icon');
    const nav = document.querySelector('.topnav');
    const navLinks = document.querySelectorAll('.topnav li'); 
   
    icon.addEventListener('click', () => {
         //Toggle Nav
        nav.style.display = "flex";
         nav.classList.toggle('nav-active');
        nav.style.display = "none";

         //Animate Links
         navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                 } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
     
     });
      //icon animation
      icon.classList.toggle('toggle');
  });
     
    
}
navSlide();

