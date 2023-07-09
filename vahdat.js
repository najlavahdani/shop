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


//header-3 section starts
window.onscroll = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header-3').classList.add('active');
    }
    else{
        document.querySelector('.header .header-3').classList.remove('active');
    }
}
//header-3 section ends

//home swiper section starts

//home swiper section ends