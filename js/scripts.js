const containerSkills = document.querySelector('.skills-section-container')
const containerProjects = document.querySelector('.projects-section')

const homeBtn = document.querySelector('.home')
const projectBtn = document.querySelector('.projects')

homeBtn.addEventListener('click', () => {
    if (containerProjects.classList.contains('show')) {
        containerProjects.classList.remove('show')
        containerSkills.classList.remove('hidden')
        homeBtn.classList.add('active')
        projectBtn.classList.remove('active')
    } else {
        containerSkills.classList.remove('hidden')
        homeBtn.classList.add('active')
    }

})

projectBtn.addEventListener('click', () => {
    if (!containerSkills.classList.contains('hidden')) {
        containerSkills.classList.add('hidden')
        containerProjects.classList.add('show')
        homeBtn.classList.remove('active')
        projectBtn.classList.add('active')
    } else {
        containerProjects.classList.add('show')
        projectBtn.classList.add('active')
    }
})
