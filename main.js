document.addEventListener('DOMContentLoaded', () => {
    const languageBoxes = document.querySelectorAll(".language a"); // Selects all <a> elements with this class

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const imgElement = entry.target; // Get the observed element

                // Apply the initial transparent-slide class.
                imgElement.classList.add('transparent-slide');

                // Listen for the CORRECT animationend event on the image element
                imgElement.addEventListener('animationend', (event) => {
                    if (event.animationName === 'transparentSlideDown') {
                        // Once transparentSlideDown finishes, remove its class
                        imgElement.classList.remove('transparent-slide');
                        // And then add the class to start the infinite worm animation
                        imgElement.classList.add('worm-active');
                    }
                });

                // Unobserve the element after the animation starts
                observer.unobserve(imgElement);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each language box
    languageBoxes.forEach(imgElement => {
        observer.observe(imgElement);
    });
});
