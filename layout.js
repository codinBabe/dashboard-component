// Layout.js
class Layout extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <slot></slot> `;
    }
}

customElements.define('app-layout', Layout);
