//const accordionBtn = document.getElementsByClassName('accordion-button')[0];
const accordionContent = document.getElementsByClassName('accordion-content')[0];

const expandAccordion = () => {
    accordionContent.classList.toggle('open');
}

const navbar = document.getElementsByClassName('navbar-collapse')[0];


const expandNavbar = () => {
    navbar.classList.toggle('open');
}