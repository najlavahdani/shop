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
