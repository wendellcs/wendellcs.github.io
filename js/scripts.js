const containerSkills = document.querySelector('.about-container-skills')
const containerProjects = document.querySelector('.container-projects')

const homeBtn = document.querySelector('.btn.home')
const projectsBtn = document.querySelector('.btn.projects')

homeBtn.addEventListener('click', () => {
    if (containerSkills.classList.contains('hidden')) {
        containerSkills.classList.remove('hidden')
        containerProjects.classList.add('hidden')
    }

    if (!homeBtn.classList.contains('active')) {
        homeBtn.classList.add('active')
        projectsBtn.classList.remove('active')
    }
})

projectsBtn.addEventListener('click', () => {
    if (containerProjects.classList.contains('hidden')) {
        containerProjects.classList.remove('hidden')
        containerSkills.classList.add('hidden')
    }

    if (!projectsBtn.classList.contains('active')) {
        projectsBtn.classList.add('active')
        homeBtn.classList.remove('active')
    }
})

const darkModeBtn = document.querySelector('.darkmode')
const lightModeBtn = document.querySelector('.lightmode')
const container = document.querySelector('.container')

darkModeBtn.addEventListener('click', () => {
    if (!container.classList.contains('dark')) {
        container.classList.add('dark')
        darkModeBtn.classList.add('hidden')
        lightModeBtn.classList.remove('hidden')
    }
})

lightModeBtn.addEventListener('click', () => {
    if (container.classList.contains('dark')) {
        container.classList.remove('dark')
        darkModeBtn.classList.remove('hidden')
        lightModeBtn.classList.add('hidden')
    }
})