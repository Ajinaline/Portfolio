document.addEventListener('DOMContentLoaded', () => {
    const languageBoxes = document.querySelectorAll(".language a"); // Selects all <img> elements with this class

    languageBoxes.forEach(imgElement => { // Renamed 'button' to 'imgElement' for clarity
        // Apply the initial transparent-slide class.
        // The animation-delay will be picked up from the CSS :nth-child rules.
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
    });
});