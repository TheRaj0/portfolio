import { projects } from "./data.js"

function createProject(name, bio, image, link) {
    let output = (`
    <div class="project">
        <h3>` + name +`</h3>
        <p>` + bio +`</p>
        
        <form target="_blank" action="` + link + `">
            <button>Go</button>
        </form>
    </div>
    `)
    return output
}

const containerEl = document.getElementById("projectscontainer")

window.onload = () => {
    let projstr = "";
    projects.forEach(p => {
        projstr += createProject(p.name, p.details, p.imagesrc, p.projectlink)
    })

    containerEl.innerHTML = projstr
}