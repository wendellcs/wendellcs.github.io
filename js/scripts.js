const containerSkills = document.querySelector('.skills-section-container')
const containerProjects = document.querySelector('.projects-section')

const desktopHomeBtn = document.querySelector('.menu-btn.home')
const desktopProjectsBtn = document.querySelector('.menu-btn.projects')

desktopHomeBtn.addEventListener('click', () => {
    if (desktopProjectsBtn.classList.contains('active')) {
        containerProjects.classList.remove('show')
        containerSkills.classList.remove('hidden')
        desktopProjectsBtn.classList.remove('active')
        desktopHomeBtn.classList.add('active')
    }
})

desktopProjectsBtn.addEventListener('click', () => {
    if (desktopHomeBtn.classList.contains('active')) {
        containerSkills.classList.add('hidden')
        containerProjects.classList.add('show')
        desktopHomeBtn.classList.remove('active')
        desktopProjectsBtn.classList.add('active')
    }
})

const mobileHomeBtn = document.querySelector('.home')
const mobileProjectsBtn = document.querySelector('.projects')

mobileHomeBtn.addEventListener('click', () => {
    if (containerProjects.classList.contains('show')) {
        containerProjects.classList.remove('show')
        containerSkills.classList.remove('hidden')
        mobileHomeBtn.classList.add('active')
        mobileProjectsBtn.classList.remove('active')
    }
})

mobileProjectsBtn.addEventListener('click', () => {
    if (!containerSkills.classList.contains('hidden')) {
        containerSkills.classList.add('hidden')
        containerProjects.classList.add('show')
        mobileHomeBtn.classList.remove('active')
        mobileProjectsBtn.classList.add('active')
    }
})

const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuBtn = document.querySelector('.mobile-menu-icon')
const mobileMenuBtnContainer = document.querySelector('.buttons-container')
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    mobileMenuBtn.classList.toggle('active')
    mobileMenuBtnContainer.classList.toggle('active')
})


