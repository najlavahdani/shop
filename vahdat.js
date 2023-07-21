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

setInterval(function() {
    swiper.slideNext();
}, 5000);
//home swiper section ends




// Get all elements with the class 'animated-shop-btn'
var animatedBtns = document.querySelectorAll('.animated-shop-btn');

// Loop through all the elements and add the animation class to each one
for (var i = 0; i < animatedBtns.length; i++) {
  animatedBtns[i].classList.add('animate__animated', 'animate__flash');
}

// Add and remove the animation class from each element every 1 second
setInterval(function() {
  for (var i = 0; i < animatedBtns.length; i++) {
    animatedBtns[i].classList.toggle('animate__flash');
  }
}, 500);






// Get all elements with the class 'animate__heartBeat'
var animatedElements = document.querySelectorAll('.animate__heartBeat');

// Add and remove the animation class from each element every 1 second
setInterval(function() {
  for (var i = 0; i < animatedElements.length; i++) {
    animatedElements[i].classList.toggle('animate__heartBeat');
  }
}, 800);







