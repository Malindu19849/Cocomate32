


document.addEventListener("DOMContentLoaded", function() {
    const sectionTitles = document.querySelectorAll('.section-title');

    function checkFade() {
        sectionTitles.forEach(title => {
            const top = title.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight * 0.75) { // Adjust the threshold as needed
                title.classList.add('fade-in');
            }
        });
    }
    
