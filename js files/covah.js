//login form starts
let loginForm = document.querySelector('.login-container')
document.querySelector('.login').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}
//login form ends


//verifying form starts
let verifyingForm = document.querySelector('.verifying')
document.querySelector('.submit-number').onclick = () => {
    verifyingForm.classList.toggle('active');
}

document.querySelector('#close-verifying-btn').onclick = () => {
    verifyingForm.classList.remove('active');
}
//verifying form ends



// resending code starts
document.querySelector('.resend').onclick = () => {
    verifyingForm.classList.remove('active');
}
// resending code ends




//cart section starts
var cartIcons = document.querySelectorAll('.cart-icon');

cartIcons.forEach(function(cartIcon) {
    cartIcon.addEventListener('click', function() {
        var cart = document.querySelector('.cart');
        cart.classList.toggle('active');
    });
});


var closeButton = document.getElementById('close-cart');

closeButton.addEventListener('click', function() {
    var cart = document.querySelector('.cart');
    cart.classList.remove('active');
});
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


//special swiper starts
var specialSwiper = new Swiper(".special-swiper", {
    slidesPerView: "auto",
    spaceBetween: 25,
    grabCursor:true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".special-prev",
      prevEl: ".special-next",
    },
});
//special swiper ends

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




//fixing the third header
$(document).ready(function() {
    var header = $('.header-3');
    var headerOffset = header.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > headerOffset) {
            header.addClass('fixed-header');
        } else {
            header.removeClass('fixed-header');
        }
    });
});

