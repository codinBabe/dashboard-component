class MainContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <slot></slot> 
        `;
    }
}
class MainHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const heading = document.createElement('div');
        heading.classList.add('heading');
        heading.innerHTML = `
        <style>
        .heading {
            display: flex;
            align-items: center;
            justify-content:space-between;
        }
        img{
            width: 30px;
        }
        .flex{
            display: flex;
            align-items: center;
            justify-content:center;
        }
        .gap{
            gap:1em;
        }
        </style>
        <div class="flex gap">
            <img src="./images/power-light-icon.png" alt=""/>
            <h1>Dashboard</h1>
        </div>
        <div class="flex gap">
            <div class="flex">
                <img src="./images/calendar-icon.png" alt=""/>
                <p>last 30 days</p>
            </div>
            <div class="flex">
                <img src="./images/network-icon.png" alt=""/>
                <p>123</p>
            </div>
        </div>
        `;
        this.shadowRoot.appendChild(heading);
    }
}

class MainMoreContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const moreContent = document.createElement('div');
        moreContent.classList.add('more-content');
        moreContent.innerHTML = `
        <style>
        .more-content {
            display: flex;
            align-items: center;
            justify-content:space-between;
            margin:.5em 0;
        }
        img{
            width: 30px;
        }
        .flex{
            display: flex;
            align-items: center;
            justify-content:center;
        }
        .bg-gap{
            gap:1em;
        }
        .sm-gap{
            gap:.5em;
        }
        .churn{
            color:#7e7e7d;
        }
        </style>
        <div class="flex bg-gap">
            <div class="flex sm-gap">
                <img src="./images/sales-icon.png" alt=""/>
                <h2>Sales</h2>
            </div>
            <div class="flex sm-gap">
                <img src="./images/churr-icon.png" alt=""/>
                <h2 class="churn">Churn</h2>
            </div>
        </div>
        <h2>Moonstone</h2>
        <div class="flex bg-gap">
            <div class="flex sm-gap">
                <img src="./images/logo-gray.png" alt=""/>
                <p>Intelligence</p>
            </div>
            <div class="flex sm-gap">
                <img src="./images/network-icon.png" alt=""/>
                <p>Statistic</p>
            </div>
            <div class="flex sm-gap">
                <img src="./images/target-icon.png" alt=""/>
                <p>Key actions</p>
            </div>
        </div>
        `;
        this.shadowRoot.appendChild(moreContent);

    }
}

class NextSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.ProductItems = [
            {
                product: "Module X",
                fee: "Not applicable",
                aar: "12,500",
                date: "01 feb 2023",
                button: "On"
            },
            {
                product: "Module Y",
                fee: "Not applicable",
                aar: "12,500",
                date: "01 feb 2023",
                button: "On"
            },
            {
                product: "Module Y",
                fee: "kr 9,900",
                aar: " 35,000",
                date: "01 feb 2023",
                button: "Off"
            },
        ];
    }
    connectedCallback() {
        const nextSection = document.createElement('div');
        nextSection.classList.add('next-section');
        nextSection.innerHTML = `
        <style>
        *{
            box-sizing: border-box;
        }
            .next-section {
                display:grid;
                grid-template-columns: 2fr 3fr;
                grid-template-rows: 1fr auto;
                gap:2em;
            }
            .monitor{
                background-color:#000000;
                color:#fff;
                border-radius:25px;
                padding:2.4em 3em 0;
                text-align:center;
            }
            .monitor b{
                margin-bottom:0;
            }
            .monitor p{
                color:#848584;
            }
            .monitor img{
                width: 40px;
            }
            .flex{
                display: flex;
                align-items: center;
            }
            .justify{
                justify-content:space-between;
            }
            .gap{
                gap:1em;
            }
            .col{
                flex-direction:column
            }
            .table{
                background-color:#ffffff;
                border-radius:25px;
                padding:10px 25px;
            }
            .heading h5{
                margin-bottom:.3em;
                color:#909090;
                padding:0 15px;
            }
            .table-content{
                background-color:#e6e7e5;
                border-radius:15px;
                margin:10px 0;
                padding:0 15px;
                font-weight:bold;
                font-size:.8rem;
            }
            .table-content button{
                background-color:#000;
                border:none;
                color:#fff;
                border-radius:5px;
                padding:5px 12px;
            }
            .table-content:last-of-type button{
                background-color:#beb9b1;
            }
            .table-content:last-of-type{
                background-color:#f6f6f5;
        </style>

    <div class="monitor">
        <div class="flex justify">
            <div class="flex col">
                <div class="flex gap">
                    <img src="./images/arrow-curve-up.png" alt=""/>
                    <b>25%</b>
                </div>
                <p>Upsales</p>
            </div>
            <div class="flex col">
                <div class="flex gap">
                    <img src="./images/arrow-curve-down.png" alt=""/>
                    <b>-7</b>
                </div>
                <p>Upsales</p>
            </div>
        </div>

        <div class="flex justify">
            <div class="flex col">
                <div class="flex gap">
                    <img src="./images/arrow-curve-up.png" alt=""/>
                    <b>+ 161,000</b>
                </div>
                <p>Upsales ARR</p>
            </div>
            <div class="flex col">
                <div class="flex gap">
                    <img src="./images/arrow-straight.png" alt=""/>
                    <b>0</b>
                </div>
                <p>New Customers</p>
            </div>
        </div>
    </div>
    <div class="table">
        <div class="flex justify heading">
            <h5>Product</h5>
            <h5>Startup fee</h5>
            <h5>ARR</h5>
            <h5>From date</h5>
            <h5></h5>
        </div>
            ${this.ProductItems.map(item => `
                <div class="table-content flex justify">
                    <p>${item.product}</p>
                    <p>${item.fee}</p>
                    <p>kr ${item.aar}</p>
                    <p>${item.date}</p>
                    <button>${item.button}</button>
                </div>
                
            `).join(' ')}
    </div>
    `
        this.shadowRoot.appendChild(nextSection);
    }
}

customElements.define('main-content', MainContent);
customElements.define('main-header', MainHeader);
customElements.define('more-content', MainMoreContent);
customElements.define('next-section', NextSection);