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


//brands swiper section starts
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//brands swiper section ends