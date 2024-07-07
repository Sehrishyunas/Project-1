document.addEventListener('DOMContentLoaded', function() {
    const sections = {
        shop: 'Shop Section',
        menu: 'Current Menu Section',
        'select-meals': 'Select Meals Section',
        'grab-go': 'Grab & Go Section',
        blog: 'Blog Section',
        login: 'Login Section',
        signup: 'Sign Up Section'
    };

    Object.keys(sections).forEach(id => {
        document.getElementById(id).addEventListener('click', function(event) {
            event.preventDefault();
            alert(sections[id]);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    leftArrow.addEventListener('click', function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    rightArrow.addEventListener('click', function() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});