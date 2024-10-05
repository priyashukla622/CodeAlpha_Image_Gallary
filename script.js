
const imgDiv = document.getElementById("image");
const imgBox = document.getElementById("change-img");
let spanBtn = document.getElementById("span-btn");
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => 
    image.addEventListener('click', function() {
        showImage(image.src);
    })
);
function showImage(pic)  {
    imgDiv.style.display = 'flex';
    imgBox.src = pic;
};
spanBtn.addEventListener('click', function() {
    imgDiv.style.display="none";
});









