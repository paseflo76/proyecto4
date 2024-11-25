import data from '../../../Data/Data'
import './Education.css'

const template = () => {
  return `
  <section class="education" id="education">
  <h2>Education</h2>
  <ul id="relevantcourses" > 
     <li>
     <h3>Title 1</h3>
     <p>${data.education.formacion}</p>
     </li>
       <li>
     <h3>Title 1</h3>
     <p>${data.education.formacion}</p>
     </li>
        <li>
     <h3>Title 1</h3>
     <p>${data.education.formacion}</p>
     </li>
  </ul>
  </section>
  `
}

const Education = () => {
  return template()
}

export default Education
