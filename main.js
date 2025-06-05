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

document.addEventListener('DOMContentLoaded', () => {
  const timelineComponents = document.querySelectorAll(
    '.timeline_component_bg, .timeline_component_bg_left, .timeline_date_right, .timeline_date_left'
  );
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        // Add animation classes based on element's class
        if (el.classList.contains('timeline_component_bg') || el.classList.contains('timeline_date_left')) {
          el.classList.add('animate-left');
        } else if (el.classList.contains('timeline_component_bg_left') || el.classList.contains('timeline_date_right')) {
          el.classList.add('animate-right');
        }
        // Stop observing after animation triggered
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });
  timelineComponents.forEach(el => {
    observer.observe(el);
  });
});