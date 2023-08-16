// NAV Bar Toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// Animation Variable Randomizer
const welcomeLetters = document.querySelectorAll('.welcome-letter');

welcomeLetters.forEach(letter => {
  // Apply random pixel shifts as CSS custom properties
  letter.style.setProperty('--shiftX', `${Math.random() * 500 - 250}px`);
  letter.style.setProperty('--shiftY', `${Math.random() * 500 - 250}px`);
});