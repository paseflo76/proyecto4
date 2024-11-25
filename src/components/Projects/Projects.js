import data from '../../../Data/Data'
import Card from '../card/card'

import './Projects.css'

const Projects = () => {
  // Generar tarjetas usando el componente reutilizable `Card`
  const projectCards = data.projects
    .map((project) =>
      Card({
        image: project.preview,
        altText: project.title,
        title: project.title,
        description: project.description,
        link: project.link
      })
    )
    .join('')

  // Crear la estructura de la sección de proyectos
  const template = `
    <section class="projects-section" id="projects">
      <h2>My Projects</h2>
      <p>Some things I’ve built so far</p>
      <div class="projects-container">
        ${projectCards}
      </div>
    </section>
  `

  return template
}

export default Projects
