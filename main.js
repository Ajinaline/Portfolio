var navbar = document.querySelector(".nav-bar");

window.addEventListener("scroll", function(){
    if(window.scrollY == 0){
        navbar.classList.remove("scrolled");
    }
    else{
        navbar.classList.add("scrolled");
    }
});


 // Create particle effect
const particlesContainer = document.getElementById('particles-container');
const particleCount = 80;

// Create particles
for (let i = 0; i < particleCount; i++) {
    createParticle();
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size (small)
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Initial position
    resetParticle(particle);
    
    particlesContainer.appendChild(particle);
    
    // Animate
    animateParticle(particle);
}

function resetParticle(particle) {
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = '0';
    
    return {
        x: posX,
        y: posY
    };
}

function animateParticle(particle) {
    // Initial position
    const pos = resetParticle(particle);
    
    // Random animation properties
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    // Animate with GSAP-like timing
    setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        // Move in a slight direction
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30; // Move upwards
        
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        
        // Reset after animation completes
        setTimeout(() => {
            animateParticle(particle);
        }, duration * 1000);
    }, delay * 1000);
}



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

document.addEventListener('DOMContentLoaded', () => {
    const typewriter = document.querySelector('.typewriter');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typewriter.classList.add('typewriter-animate');
                observer.unobserve(typewriter);
            }
        });
    }, {
        threshold: 0.1
    });

    if (typewriter) {
        observer.observe(typewriter);
    }
});

