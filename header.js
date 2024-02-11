class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const header = document.createElement('header');
        header.classList.add('header');
        header.innerHTML = `
        <style>
        .header {
            display: flex;
            align-items: center;
            justify-content:space-between;
        }
        .flex {
            display: flex;
            align-items: center;
        }
        .search-div{
            margin-left: 10px;
        }
        img{
            max-width:100%
        }
        .notification{
            background-color:#ff5c29;
            border-radius:50%;
            width:10px;
            height:10px;
            padding:6px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
        }
        .gap{
            gap:.6em;
        }
        </style>
            <div class="flex gap search-div">
                <img src="./images/magnifying-glass.svg" alt=""/>
                <p>Search</p>
            </div>
            <div class="flex gap">
                <div class="flex">
                    <p class="notification">9</p>
                    <img src="./images/alarm-icon.png" alt=""/>
                </div>
                <div class="flex gap">
                    <h4>Greg Cruthis</h4>
                    <img src="./images/greg-icon.png" alt=""/>
                </div>
            </div>`
        this.shadowRoot.appendChild(header);
    }
}
customElements.define('custom-header', Header);