const projectTemplate = project => {
  const { id, title, role, description, website, repository } = project
  const primaryImage = project.images[0]
  const secondaryImage = project.images[1]

  return `
    <article class="portfolio-projects-item">
      <a href="${website}" target="_blank" class="portfolio-projects-images">
        <img 
          class="main_picture"
          srcset="${primaryImage.original},
                  ${primaryImage.medium} 2x,
                  ${primaryImage.large} 3x"
          src="${primaryImage.original}"
          alt="${primaryImage.alt}"
        />
        <img 
          class="secondary_picture"
          srcset="${secondaryImage.original},
                  ${secondaryImage.medium} 2x,
                  ${secondaryImage.large} 3x"
          src="${secondaryImage.original}"
          alt="${secondaryImage.alt}"
        />
      </a>
      <div class="portfolio-projects-description">
        <div class="portfolio-projects-details">
          <span>0${id + 1}</span>
          <h3>${title}</h3>
          <div class="portfolio-projects-skill">
            <img width="9" height="10" src="./assets/bullet.svg" alt="Bullet gray" />
            <h4>${role}</h4>
          </div>
          <p>${description}</p>
        </div>
        <div class="portfolio-projects-buttons">
          <a href="${website}" target="_blank" class="btn btn-primary">Live preview</a>
          <a href="${repository}" target="_blank" class="btn btn-secondary">See code</a>
        </div>
      </div>
    </article>
  `
}

const projectsComponent = projects => {
  const projectsList = projects.map(item => projectTemplate(item)).join('')

  return `<div class="portfolio-projects">${projectsList}</div>`
}

module.exports = projectsComponent
