import data from '../../../Data/Data'
import './AboutMe.css'

const template = () => {
  return `
  <section class="hero">
  <div class="informacion">
  <p> Hello 👋🏻 </p>
  <h2>I’m a web Developer</h2>
  <p> I build thing for web </p>
  </div>
    <div class="avatar">
    <img  src="${data.avatar}" alt="${data.name}"/>
    </div>
  </section>
    <section class="aboutme"> 
    <div class="aboutt">
      <h2>About me</h2>
    <p> ${data.aboutMe} </p>
    
    </div>
     <div class="ski">
     <h3> My skills </h3>
     
      <ul class="skills" id="Skills">
      ${data.skills
        .map(
          (skill) => `
          <li>
            <img src="${skill.icon}" alt="${skill.name}" class="skill-icon"/>
          </li>`
        )
        .join('')}
      </ul>
      </div>
    </section>
  `
}

export const AboutMe = () => {
  return template()
}
