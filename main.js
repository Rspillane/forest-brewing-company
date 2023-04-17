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

    if(navbar.classList.contains('open')){
      span.innerHTML = 'menu';
    } else {
      span.innerHTML = 'close';
    }

}

const navbarMenu = document.getElementById('menu');

navbarMenu.addEventListener('click', expandNavbar);