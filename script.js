const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

  const element = document.getElementById('animationElement');

  // Apply random pixel shifts as CSS custom properties
  element.style.setProperty('--shiftX', `${Math.random() * 40 - 20}px`);
  element.style.setProperty('--shiftY', `${Math.random() * 40 - 20}px`);

