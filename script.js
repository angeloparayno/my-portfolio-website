// NAV Bar Toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', (event) => {
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('active') ;
  event.preventDefault();
})

function closeNavbar() {
  navbarLinks.classList.remove('active');  // Hide navbar links
  toggleButton.classList.remove('active'); // Reset the toggle button state
}

// Animation Variable Randomizer
const welcomeLetters = document.querySelectorAll('.welcome-letter')

welcomeLetters.forEach(letter => {
  // Apply random pixel shifts as CSS custom properties
  letter.style.setProperty('--shiftX', `${Math.random() * 500 - 250}px`)
  letter.style.setProperty('--shiftY', `${Math.random() * 500 - 250}px`)
})