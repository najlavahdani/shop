const filterBoxes = document.querySelectorAll(".box-in-filter");

filterBoxes.forEach(function(filterBox) {
  const label = filterBox.querySelector(".grouping-list-label");
  const list = label.nextElementSibling;
  const closeBox = label.querySelector(".close-box-in-filter");

  label.addEventListener("click", function(event) {
    event.stopPropagation();
    list.classList.toggle("active");
    if (list.classList.contains("active")) {
      closeBox.textContent = "-";
    } else {
      closeBox.textContent = "+";
    }
  });
});




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


