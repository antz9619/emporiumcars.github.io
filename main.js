// Define the images
const images = [
    'img/background_01.jpeg',
    'img/background_02.jpeg',
    'img/background_03.jpeg',
];

// App state
let index = 0;
const max = images.length;

// Get the DOM elements
const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

// Listen for arrow click events
prevSlideButton.addEventListener('click', function () {
    index--;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
});

nextSlideButton.addEventListener('click', function () {
    index++;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
});

// Utility function
function setImageIndex() {
    if (index < 0) index = max - 1;
    if (index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`;
}