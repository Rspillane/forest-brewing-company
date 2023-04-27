//const accordionBtn = document.getElementsByClassName('accordion-button')[0];
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
}


//Navbar scripts
const navbar = document.getElementById('navbar-menu-items');
const span = document.getElementsByClassName('material-symbols-outlined')[0];


const expandNavbar = () => {
    navbar.classList.toggle('open');
    console.log('menu should open');
    span.classList.toggle('active');

    if(span.classList.contains('active')){
      span.innerHTML = 'close';
    } else {
      span.innerHTML = 'menu';
    }

}

const navbarMenu = document.getElementById('menu');

navbarMenu.addEventListener('click', expandNavbar);


//cta script
const ctaEmail = document.getElementsByClassName('cta-email-input')[0];
const ctaForm = document.getElementsByClassName('cta-form')[0];

const submitEmail = () => {
  const emailResult = document.createElement('div');
  emailResult.classList.add('email-submit');

  ctaEmail.removeChild(ctaForm);

  emailResult.innerHTML = 'Thanks for joining our list!';

  ctaEmail.appendChild(emailResult);
  //if email contains @ then succesful submit
  //confirmation message pops up

  //Timer if i want it in the future
  /*setTimeout(function() {
    ctaEmail.removeChild(emailResult);
  }, 3000);*/
}