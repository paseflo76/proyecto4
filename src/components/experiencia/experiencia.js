import data from '../../../Data/Data'
import './experiencia.css'

const template = () => {
  return `
  <section class="Experiencia" >
  <h2>Experiencia</h2>
  <ul id="relevantcourses" > 
     <li>
     <h3> Experiencie 1</h3>
     <p>${data.workExperience.description}</p>
     </li>
       <li>
     <h3> Experiencie 1</h3>
     <p>${data.workExperience.description}</p>
     </li>
        <li>
     <h3> Experiencie 1</h3>
     <p>${data.workExperience.description}</p>
     </li>
  </ul>
  </section>
  `
}

const Experiencia = () => {
  return template()
}

export default Experiencia
