import './card.css'

const Card = ({ image, altText, title, description, link }) => {
  return `
    <div class="card">
      <img src="${image}" alt="${altText}" class="card-image" />
      <div class="card-content">
        <h3>${title}</h3>
        <p>${description}</p>
        ${
          link
            ? `<a href="${link}" target="_blank" class="card-link">View App</a>`
            : ''
        }
      </div>
    </div>
  `
}

export default Card
