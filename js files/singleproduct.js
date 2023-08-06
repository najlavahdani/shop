document.addEventListener("DOMContentLoaded", function() {
    var anotherImages = document.querySelectorAll(".another-images img");

    for (var i = 0; i < anotherImages.length; i++) {
        anotherImages[i].addEventListener("click", function() {
            var mainImage = document.querySelector(".main-image img");
            var newImageSrc = this.getAttribute("src");
            mainImage.setAttribute("src", newImageSrc);
        });
    }
});


// انتخاب المان دکمه add-comment
const addCommentBtn = document.querySelector('.add-comment.btn');

// انتخاب المان add-comment-container
const addCommentContainer = document.querySelector('.add-comment-container');

// اضافه کردن رویداد کلیک به دکمه add-comment
addCommentBtn.addEventListener('click', function() {
  // تغییر کلاس به add-comment-container
  addCommentContainer.classList.add('active');
});


// انتخاب المان آیکن ایکس مارک
const closeCommentBtn = document.getElementById('close-comment-btn');

// اضافه کردن رویداد کلیک به آیکن ایکس مارک
closeCommentBtn.addEventListener('click', function() {
  // حذف کلاس active از add-comment-container
  addCommentContainer.classList.remove('active');
});


function toggleText() {
  var textContent = document.querySelector('.text-content');
  var detailsHeader = document.querySelector('.details-header');

  textContent.classList.toggle('visible');
  detailsHeader.classList.toggle('border-opened');
}


function toggleComments() {
  var commentsContainer = document.querySelector('.comments-container');
  commentsContainer.style.display = (commentsContainer.style.display === 'none') ? 'flex' : 'none';

  var addCommentBtn = document.querySelector('.add-comment');
  addCommentBtn.style.display = (addCommentBtn.style.display === 'none') ? 'inline-block' : 'none';
}