import data from '../Data/Data'
import './Projects.css'

const template = () => {
  return `
<section class="projects"
id="projects">
    <h2>My porjects</h2>
<p>Some things I’ve built so far</p>

<ul class="project-list">   ${data.projects
    .map(
      (project) => `
<div class="card">
       <ul class="project-list">
      <li class= "projects-card">
        <img src=${project.preview} alt=${project.title}/>
        <div class="information">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <button class= "button-card" href=${project.link}>View App..</button>
        </div>
      </li>
      </ul>
      </div>
      `
    )
    .join('')}
</ul>

</section>
`
}

const Projects = () => {
  return template()
}

export default Projects
