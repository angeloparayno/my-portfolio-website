const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-list')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})