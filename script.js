gsap.to(".pillar",
{
    y: "-120%",
    duration: 1.2,
    ease: "power4.inOut",
    stagger: 0.25,
    onComplete: () => document.querySelector(".loader").remove()
});



//Cherche
const navLinks = document.querySelectorAll('.HoverMenu, .ActiveMenu');
let currentActive = document.querySelector('.ActiveMenu');


//Boucle dans chaque "a" qui est de class .HoverMenu et ou .ActiveMenu
navLinks.forEach(link => 
{
  link.addEventListener('mouseenter', () => 
  {
    if (currentActive && currentActive !== link) 
    {
      currentActive.classList.remove('ActiveMenu');
      currentActive.classList.add('HoverMenu');
    }
  });

  link.addEventListener('mouseleave', () => 
  {
    if (currentActive && !currentActive.classList.contains('ActiveMenu')) 
    {
      currentActive.classList.remove('HoverMenu');
      currentActive.classList.add('ActiveMenu');
    }
  });

  link.addEventListener('click', () => 
  {
    if (currentActive) 
    {
      currentActive.classList.remove('ActiveMenu');
      currentActive.classList.add('HoverMenu');
    }

    link.classList.remove('HoverMenu');
    link.classList.add('ActiveMenu');
    currentActive = link;
  });
});
