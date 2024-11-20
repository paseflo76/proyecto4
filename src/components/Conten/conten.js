import { AboutMe } from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Experiencia from '../experiencia/experiencia'

import Projects from '../Projects/Projects'

import './conten.css'

let show = 'Experiencia'

const template = () => {
  return `
    <main>
      ${AboutMe()}
      <div class="change-container" >
        <button id="change">Mostrar ${show}</button> 
      </div>
      <div id="content">
        ${Education()}
      </div>
      ${Projects()}
      
    </main>
  `
}

export const Main = () => {
  return template()
}

export const addMainListeners = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#change')
    const content = document.querySelector('#content')

    button.addEventListener('click', () => {
      if (show === 'Experiencia') {
        content.innerHTML = `${Experiencia()}`
        show = 'Educación'
      } else {
        content.innerHTML = `${Education()}`
        show = 'Experiencia'
      }
      button.textContent = `Mostrar ${show}`
    })
  })
}
