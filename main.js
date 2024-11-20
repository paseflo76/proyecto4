import './style.css'
import { Header, addHeaderListeners } from './src/components/header/header'

import { footer } from './src/components/footer/footer'
import { addMainListeners, Main } from './src/components/Conten/conten'

const render = () => {
  document.querySelector('#app').innerHTML = `
   ${Header()}
   ${Main()} 
   ${footer()}
  `
}

render()
addMainListeners()
addHeaderListeners()
