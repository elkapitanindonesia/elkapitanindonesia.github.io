AOS.init();

const navbar = document.querySelector('.navbar');
const sidebar = document.querySelector('.sidebar');
const navbarLink = document.querySelectorAll('.navbar a');
const navbarBrand = document.querySelector('.navbar .navbar-brand');
const bars = document.querySelector('.bars');
const barsIcon = document.querySelector('.bars i');

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add('bg-black');
    navbar.classList.add('shadow-md');
    // navbarBrand.classList.remove("text-white");
    // navbarBrand.classList.add("text-blue-800");
    // navbarLink.forEach((el) => {
    //   if (el.innerHTML != "Login") {
    //     el.classList.remove("text-white");
    //     el.classList.add("text-blue-800");
    //   }
    // });
  } else {
    navbar.classList.remove('bg-black');
    navbar.classList.remove('shadow-md');
    // navbarBrand.classList.add("text-white");
    // navbarBrand.classList.remove("text-blue-800");
    // navbarLink.forEach((el) => {
    //   if (el.innerHTML != "Login") {
    //     el.classList.add("text-white");
    //     el.classList.remove("text-blue-800");
    //   }
    // });
  }
};
// if(click == 1){
//   if (sidebar.style.top == "-100%") {
//     sidebar.style.top = "0";
//     sidebar.style.opacity = "1";
//   } else {
//     sidebar.style.left = "-100%";
//     sidebar.style.opacity = "0";
//   }
//   click = 2;
// }
// $('.slick-1').slick();

bars.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  if (sidebar.classList.contains('active')) {
    barsIcon.classList.replace('fa-bars', 'fa-times');
  } else {
    barsIcon.classList.replace('fa-times', 'fa-bars');
  }
});

function showMenu() {}
