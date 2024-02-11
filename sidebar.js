class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.sideBarImg = [
      {
        img: './images/logo.png',
        name: 'logo-icon'
      },
      {
        img: './images/power-dark.png',
        name: 'power-icon'
      },

      {
        img: './images/people-icon.png',
        name: 'people-icon'
      },
      {
        img: './images/info-icon.png',
        name: 'info-icon'
      },
      {
        img: './images/logo-small.png',
        name: 'small-logo-icon'
      },
      {
        img: './images/report-icon.png',
        name: 'report-icon'
      },
      {
        img: './images/setting.png',
        name: 'setting-icon'
      }
    ];
  }
  connectedCallback() {
    const sideBarImgCard = document.createElement('nav');
    sideBarImgCard.classList.add('sidebar-container');

    this.sideBarImg.forEach(item => {
      const anchor = document.createElement('a');
      anchor.href = "#";
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.name;
      anchor.appendChild(img);
      sideBarImgCard.appendChild(anchor);
    });

    const style = document.createElement('style');
    style.textContent = `
        .sidebar-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: .8em;
            margin-top: -5px;
        }
        .sidebar-container a img {
            width: 35px;
        }
        .sidebar-container a:first-child img {
            width: 50px;
            margin-bottom: 1.7em;
        }
        .sidebar-container a:last-child img {
          margin-top: 28em;
        }
    `;
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(sideBarImgCard);
  }
}
customElements.define('custom-sidebar', Sidebar);