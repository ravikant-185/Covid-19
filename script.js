function toggleSearch() {
    const searchForm = document.getElementById('searchForm');
    searchForm.style.display = (searchForm.style.display === 'block') ? 'none' : 'block';
}

function togglePopup() {
    const popupForm = document.getElementById('popupForm');
    popupForm.style.display = (popupForm.style.display === 'block') ? 'none' : 'block';
}

document.querySelector('.search-icon').addEventListener('click', toggleSearch);
document.querySelector('.user-contact').addEventListener('click', togglePopup);

const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle navbar display
    // Toggle nav links display
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle nav links display
});




// banner slider
const slider = document.querySelectorAll('.slideshow');
var counter = 0;
const totalS = slider.length;

slider.forEach((slides, index) => {
    slides.style.left = `${index * 100}%`;
    slides.style.transition = '.5s';
})

const prevSlide = () => {
    counter--;

    if (counter < 0) {
        counter = totalS - 1;
        slider.forEach((slides) => {
            slides.style.transition = '.9s';
        });
    }
    slideImages();
}

const nextSlide = () => {
    counter++;
    slideImages();
    if (counter >= totalS - 1) {
        counter = - 1;
        slider.forEach((slides) => {
            slides.style.transition = 'none';
            slides.style.transition = '1s';

        });
    }
}

const slideImages = () => {
    slider.forEach((slides) => {
        slides.style.transform = `translateX(-${counter * 100}%)`;
    })
}
//banner slider end

// Read more button
document.querySelectorAll('.read-btn').forEach(button => {
    button.addEventListener('click', function () {
        const info = this.getAttribute('data-info');

        switch (info) {
            case 'info1':
                alert('Read More button 1 clicked!');
                break;
            case 'info2':
                alert('Read More button 2 clicked!');
                break;
            case 'info3':
                alert('Read More button 3 clicked!');
                break;
            default:
                alert('Unknown button clicked!');
                break;
        }
    });
});