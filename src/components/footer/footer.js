import data from '../../../Data/Data'
import './footer.css'

const template = () => {
  return `
<div class=footer>
<p>${data.create}</p>
<ul class="icons-footer">
${data.footer
  .map(
    (footer) => `
<li>
<img src="${footer.symbol}"class="symbol"/>
</li>`
  )
  .join('')}
</ul>
</div>
   `
}

export const footer = () => {
  return template()
}
