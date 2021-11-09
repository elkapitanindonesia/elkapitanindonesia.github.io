AOS.init();

const navbar = document.querySelector(".navbar");
const sidebar = document.querySelector(".sidebar");
const navbarLink = document.querySelectorAll(".navbar a");
const navbarBrand = document.querySelector(".navbar .navbar-brand");
const bars = document.querySelector('.bars');

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-black");
    navbar.classList.add("shadow-md");
    bars.classList.add('text-blue-800');
    // navbarBrand.classList.remove("text-white");
    // navbarBrand.classList.add("text-blue-800");
    // navbarLink.forEach((el) => {
    //   if (el.innerHTML != "Login") {
    //     el.classList.remove("text-white");
    //     el.classList.add("text-blue-800");
    //   }
    // });
  } else {
    navbar.classList.remove("bg-black");
    navbar.classList.remove("shadow-md");
    bars.classList.remove('text-blue-800');
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

var click = 1;
function showMenu() {
  if(click == 1){
    if (sidebar.style.left == "-100%") {
      sidebar.style.left = "0";
      sidebar.style.opacity = "1";
    } else {
      sidebar.style.left = "-100%";
      sidebar.style.opacity = "0";
    }
    click = 2;
  }
  // sidebar.classList.add('left-0')
  if (sidebar.style.left == "-100%") {
    sidebar.style.left = "0";
    sidebar.style.opacity = "1";
  } else {
    sidebar.style.left = "-100%";
    sidebar.style.opacity = "0";
  }
}

$('.slick-1').slick();
  