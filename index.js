import { projects, skills } from "./data.js"

function highlighthtml(text) {
    text = text.replaceAll("~~", `<span class="highlight">`)
    text = text.replaceAll("~", `</span>`)

    return text
}

function createProject(name, bio, image, link, btntxt) {
    let output = (`
    <div class="project">
        <h3>` + name +`</h3>
        <p>` + bio +`</p>
        
        <form target="_blank" action="` + link + `">
            <button>` + btntxt + `</button>
        </form>
    </div>
    `)
    return output
}

function createSkill(title, text) {

    let formattedtext = highlighthtml(text);

    let output = (`
    <div class="skill-card">
        <h3>` + title + `</h3>
        <p>` + formattedtext + `</p>
    </div>    
    `)
    return output
}

const projContainerEl = document.getElementById("projectscontainer")
const skillsContainerEl = document.getElementById("skillscontainer")

window.onload = () => {
    let projstr = ""
    projects.forEach(p => {
        projstr += createProject(p.name, p.details, p.imagesrc, p.projectlink, p.buttontext)
    })

    projContainerEl.innerHTML = projstr

    let skillstr = ""
    skills.forEach(s => {
        skillstr += createSkill(s.title, s.text)
    })

    skillsContainerEl.innerHTML = skillstr

}