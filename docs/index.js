// Header
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  window.scrollY != 0
    ? header.classList.add('header-shadow')
    : header.classList.remove('header-shadow');
});
// Header

// Add overlay
const mainSection = document.querySelectorAll('.main-section');
const subSection = document.querySelectorAll('.sub-section');

function addOverlay(text, element) {
  element.forEach(item => {
    item.innerHTML = `${text} ${item.innerHTML}`;
  });
}

addOverlay('<header class="sub-section-header"></header>', subSection);
addOverlay('<div class="main-section-overlay"></div>', mainSection);
// Add overlay

// Overlay color
const mainOverlay = document.querySelectorAll('.main-section-overlay');
const subHeader = document.querySelectorAll('.sub-section-header');

function addBg(element) {
  let cont = 0;
  element.forEach(item => {
    cont % 2 == 0
      ? item.classList.add('bg-light')
      : item.classList.add('bg-dark');
    cont++;
  });
}

addBg(mainOverlay);
addBg(subHeader);
// Overlay color

// Portfolio cards
const cards = document.getElementById('cards');
fetch('./data/projects.json')
  .then(res => res.json())
  .then(projects => {
    projects.map(project => {
      cards.innerHTML += `
      <div class="card">
        <div class="card-overlay" style="background-color: #e4fde1"></div>

        <div class="card-content">
          <img src="${project.thumbnail}" class="card-img">

          <div class="card-text">
            <div class="content">
              <h1 class="name">${project.name}</h1>

              <h2 class="description">${project.description}</h2>

              <ul class="techs">
                ${project.technologies.map(tech => `<li class="tech">${tech}</li>`).join('')}
              </ul>
            </div>

            <div class="external">
              <ul class="external-list">
                <li class="item">
                  <a href="${project.repository}" target="_blank" class="item-link"><i class="fab fa-github"></i></a>
                  <span class="text">GitHub</span>
                </li>
                <li class="item">
                  <a href="${project.website}" target="_blank" class="item-link"><i class="fas fa-external-link-alt"></i></a>
                  <span class="text">External</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;
    })
  });
// Portfolio cards

// Show header
const showHeader = document.getElementById('open');
const hideHeader = document.getElementById('close');

showHeader.addEventListener('click', (e) => {
  showHeader.classList.toggle('hide');
  hideHeader.classList.toggle('hide');
  header.style.right = '0';
});

hideHeader.addEventListener('click', (e) => {
  showHeader.classList.toggle('hide');
  hideHeader.classList.toggle('hide');
  header.style.right = '-10rem';
});
// Show header


    document.querySelectorAll('.card-overlay').forEach(overlay => {
        console.log(overlay);
        overlay.style.background = '';
    });
