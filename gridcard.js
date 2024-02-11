class GridCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.gridCardContent = [
            {
                bgColor: '#e0ebf2',
                numBox: '+349',
                image: './images/people-white-icon.png',
                total: '4783',
                nameList: 'Customers'
            },
            {
                bgColor: '#cfcbc9',
                numBox: '+44.93%',
                image: './images/present-white.png',
                total: '873 of 1943',
                nameList: 'Deliveries'
            },
            {
                bgColor: '#d3e1df',
                numBox: '+30,18%',
                image: './images/actual-aar.png',
                total: '31,983,221',
                nameList: 'Actual AAR Aggregated',
            },
            {
                bgColor: '#e1dacc',
                numBox: '+68,82%',
                image: './images/aarp-icon.png',
                total: '74,002,743',
                nameList: 'AAR Potential'
            },
            {
                bgColor: '#d6d7dc',
                numBox: '',
                image: './images/gallary-icon.png',
                total: '105,985,964',
                nameList: 'Aggregated AAR Potential'
            },
            {
                bgColor: '#c5cfd4',
                numBox: '',
                image: './images/average-icon.png',
                total: '113,819',
                nameList: 'Average AAR',
            },
            {
                bgColor: '#eadccf',
                numBox: 'ARR 21 292 080,00',
                image: './images/module-icon.png',
                total: 'Module Y',
                nameList: 'Largest potential',
            },
            {
                bgColor: '#d8d3da',
                numBox: 'ARR 1184 000, 00',
                image: './images/customer-icon.png',
                total: 'Customer X',
                nameList: 'Largest potential',
            },
            {
                bgColor: '#e0d4d5',
                numBox: '',
                image: './images/contract-icon.png',
                total: '18 m',
                nameList: 'Average contract length',
            },
            {
                bgColor: '#eeefed',
                numBox: '',
                image: './images/focus-icon.png',
                total: '',
                nameList: '',
            }
        ]
    }
    connectedCallback() {
        const gridCard = document.createElement('div');
        gridCard.classList.add('grid-container');
        this.gridCardContent.forEach(item => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.style.backgroundColor = item.bgColor;
            gridItem.innerHTML = `
                <p>${item.numBox}</p>
                <img src="${item.image}" alt=""/>
                <h2>${item.total}</h2>
                <p>${item.nameList}</p>
            `;
            gridCard.appendChild(gridItem);
        });

        const style = document.createElement('style');
        style.textContent = `
            p,h2{
                margin:0;
                padding:0;
            }
            .grid-container {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-auto-rows: 1fr;
                grid-gap: 1em;
            }
            .grid-item {
                width:150px;
                height:150px;
                padding:25px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap:.5em;
                border-radius:25px;
            }
            .grid-item:first-of-type p:first-of-type{
                background-color:#ff5a27;
                color:#ffffff;
                font-weight:400;
            }
            .grid-item p:first-child{
                background-color:#f2e6c4;
                padding:4px 10px;
                border-radius:25px;
                font-size:.8rem;
                font-weight:700;
            }
            .grid-item p:first-of-type:empty {
                background-color: unset;
            }
            .grid-item p:last-child{
                font-size:.75rem;
                font-weight:700;
                color:#727073;
            }
        `;
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(gridCard);
    }
}

customElements.define('grid-card', GridCard);