//login form starts
let loginForm = document.querySelector('.login-container')
document.querySelector('.login').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}
//login form ends




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
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".special-prev",
      prevEl: ".special-next",
    },
  });
//special swiper ends

