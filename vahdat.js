//login form starts
let loginForm = document.querySelector('.login-container')
document.querySelector('.login').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}
//login form ends


//search section starts
let searchForm = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
//search section ends


//cart section starts
cartSection= document.querySelector('.cart-section .cart')
document.querySelector('.cart-icon').onclick =() =>{
    cartSection.classList.toggle('active')
}

document.querySelector('#close-cart').onclick =() =>{
    cartSection.classList.remove('active')
}
//cart section ends


//header-3 and dropdown list on scroll section starts
window.onscroll = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header-3').classList.add('active');


        dropdown.classList.remove('active')
        
        document.querySelector('#dropdown-list-btn').onclick =() =>{
            dropdown.classList.toggle('active-2')
        }

        document.querySelector('#close-categories').onclick=() =>{
            dropdown.classList.remove('active-2')
        }
    }
    else{
        document.querySelector('.header .header-3').classList.remove('active');
        

        dropdown.classList.remove('active-2')

        document.querySelector('#dropdown-list-btn').onclick =() =>{
            dropdown.classList.toggle('active')
        }
        
        document.querySelector('#close-categories').onclick=() =>{
            dropdown.classList.remove('active')
        }
        
    }

    
}
//header-3 and dropdown list on scroll section ends


//dropdown categories list starts
var dropdown= document.querySelector('.dropdown-list')
document.querySelector('#dropdown-list-btn').onclick =() =>{
    dropdown.classList.toggle('active')
}

document.querySelector('#close-categories').onclick=() =>{
    dropdown.classList.remove('active')
}

//dropdown categories list ends


//brands and special products swiper section starts
var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mySwiper-next",
      prevEl: ".mySwiper-prev",
    },
});
  

var specialSwiper = new Swiper(".special-swiper", {
  slidesPerView: 5,
  spaceBetween: 25,
  grabCursor:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".special-prev",
    prevEl: ".special-next",
  },
});


//brands and special products swiper section ends



//home swiper section starts
var swiper = new Swiper(".homeswiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor:true,
    loop: true,
});
//home swiper section ends


















const shopBtn = document.querySelector(".animated-shop-btn");
const title = document.querySelector(".animated-title");

function addShopAnimation() {
  shopBtn.classList.add("animate__flash");
}

function removeShopAnimation() {
  shopBtn.classList.remove("animate__flash");
}

function addTitleAnimation() {
  title.classList.add("animate__heartBeat");
}

function removeTitleAnimation() {
  title.classList.remove("animate__heartBeat");
}

function repeatAnimations() {
  addShopAnimation();
  addTitleAnimation();

  setTimeout(() => {
    removeShopAnimation();
    removeTitleAnimation();
    setTimeout(repeatAnimations, 1000);
  }, 1000);
}


repeatAnimations();


