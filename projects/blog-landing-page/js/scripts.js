const btnOpenMobileMenu = document.getElementById('mobile-menu-icon')
const divWrapper = document.querySelector('.mobile-wrapper')
btnOpenMobileMenu.addEventListener('click', () => {
    divWrapper.classList.toggle('active')
    if (divWrapper.classList.contains('active')) {
        btnOpenMobileMenu.className = 'active'
    } else {
        btnOpenMobileMenu.className = ''
    }
})


// Observer

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = Array.from(document.querySelectorAll('.hidden'))
hiddenElements.forEach((el) => {
    observer.observe(el)
})