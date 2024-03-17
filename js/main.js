// ** VARIABLES GLOBALES

// ** DOM READY
document.addEventListener('DOMContentLoaded', function() {
    console.log('dom ready');

    // Array of image URLs
    var images = [
        "src/img/bug1.jpg",
        "src/img/bug2.jpg",
        "src/img/bug3.jpg",
        "src/img/bug4.jpg"
    ];

    // Function to get a random image from the array
    function getRandomImage() {
        var randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    // Function to change the image source
    function changeImage() {
        var img = document.getElementById("random-image");
        var randomImageUrl = getRandomImage();
        img.src = randomImageUrl;
    }

    // Change image when the page loads
    window.onload = function() {
        changeImage();
    };
});
