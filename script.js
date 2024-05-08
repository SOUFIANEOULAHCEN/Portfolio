document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".nav__toggle");
    const menu = document.querySelector(".nav__menu");

    toggleButton.addEventListener("click", function() {
        menu.classList.toggle("show-menu");
    });

    const closeButton = document.querySelector(".nav__close");
    closeButton.addEventListener("click", function() {
        menu.classList.remove("show-menu");
    });
});


// function toggleTab(index) {
//     const modalId = `services-modal-${index}`;
//     const modal = document.getElementById(modalId);

//     // Toggle active class on modal
//     if (modal.classList.contains('active__modal')) {
//         modal.classList.remove('active__modal');
//     } else {
//         // Deactivate all modals
//         const allModals = document.querySelectorAll('.services__modal');
//         allModals.forEach(modal => {
//             modal.classList.remove('active__modal');
//         });

//         // Activate the clicked modal
//         modal.classList.add('active__modal');
//     }
// }
// ====================================================================
// function toggleTab(index) {
//     var modal = document.getElementById('modal' + index);
//     if (modal.classList.contains('active__modal')) {
//         modal.classList.remove('active__modal');
//     } else {
//         // Deactivate all modals
//         var allModals = document.querySelectorAll('.services__modal');
//         allModals.forEach(function(modal) {
//             modal.classList.remove('active__modal');
//         });
//         // Activate the clicked modal
//         modal.classList.add('active__modal');
//     }
// }

function toggleTab(index) {
    // Get the modal element by its ID
    var modal = document.getElementById('modal' + index);

    // Check if the modal is currently active
    var isActive = modal.classList.contains('active__modal');

    // Get all modal elements
    var allModals = document.querySelectorAll('.services__modal');

    // Close all modals by removing the 'active__modal' class
    allModals.forEach(function(otherModal) {
        otherModal.classList.remove('active__modal');
    });

    // If the clicked modal was not active, open it by adding the 'active__modal' class
    if (!isActive) {
        modal.classList.add('active__modal');
    }
}


// ==============================================================

// const toggle = document.getElementById('#toggle');
// const body = document.querySelector('body');
// toggle.addEventListener('click', function() {
//     this.classList.toggle('bi-moon');
//     if (this.classList.toggle('bi-brightness-high-fill')) {
//         body.style.background = 'white';
//         body.style.color = 'black';
//         body.style.transition = '2s';
//     }else{
//         body.style.background = 'black';
//         body.style.color = 'white';
//         body.style.transition = '2s';
//     }
// });

// Get the toggle button and body element
const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

// Set the initial state based on localStorage (optional)
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggle.classList.add('bxs-moon');
}

// Toggle dark mode on and off
toggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Toggle the icon class
    if (body.classList.contains('dark-mode')) {
        toggle.classList.add('bxs-moon');
        toggle.classList.remove('bxs-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggle.classList.add('bxs-sun');
        toggle.classList.remove('bxs-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
});
// =================text type animated================================
// function typeWriterEffect(elementId, text, typingSpeed = 100) {
//     let index = 0;
//     const element = document.getElementById(elementId);

//     function typeCharacter() {
//         if (index < text.length) {
//             // Append one character to the element
//             element.innerHTML += text.charAt(index);
//             index++;

//             // Call the function again after the specified delay
//             setTimeout(typeCharacter, typingSpeed);
//         }
//     }

//     // Start the typing effect
//     typeCharacter();
// }

// // Define the text you want to display with the typing effect
// const textToType = 'Software Developer';

// // Call the function on the element with the specified text
// typeWriterEffect('typedText', textToType);

function typeWriterEffect(elementId, text, typingSpeed = 100, repeatDelay = 1500) {
    let index = 0;
    const element = document.getElementById(elementId);

    function typeCharacter() {
        if (index < text.length) {
            // Append one character to the element
            element.innerHTML += text.charAt(index);
            index++;

            // Call the function again after the specified delay
            setTimeout(typeCharacter, typingSpeed);
        } else {
            // Wait for a specified delay before clearing the text and starting over
            setTimeout(() => {
                element.innerHTML = '';
                index = 0;
                typeCharacter(); // Start the typing effect again
            }, repeatDelay);
        }
    }

    // Start the typing effect
    typeCharacter();
}

// Define the text you want to display with the typing effect
const textToType = 'Full Stack Developer';

// Call the function on the element with the specified text
typeWriterEffect('typedText', textToType);

  

