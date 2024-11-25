import data from '../../../Data/Data'
import './header.css'

const template = () => {
  return `
  <header>
    <h1>PABLO SERRANO</h1>
    <nav>
      <ul class="anchor">
      <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#Skills">Skill</a>
        </li>
        <li>
          <a href="#change">Experience/Studies</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>  
        <li>
          <a href="mailto:${data.email}">Contacto</a>
        </li>  
      </ul>
    </nav>
    <div class="icon-menu">
    <img class="menu" src="assets/menu.png"/>
    </div>
  </header>
  
  `
}

const addHeaderListeners = () => {
  const menuIcon = document.querySelector('.icon-menu')
  const anchorMenu = document.querySelector('.anchor')

  if (menuIcon && anchorMenu) {
    menuIcon.addEventListener('click', () => {
      anchorMenu.classList.toggle('hidden')
    })
  }
}

const Header = () => {
  return template()
}
export { Header, addHeaderListeners }
