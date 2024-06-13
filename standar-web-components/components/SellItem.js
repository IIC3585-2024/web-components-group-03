class SellItem extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const templateContent = document.getElementById('sell-item-template').content.cloneNode(true);
        shadowRoot.appendChild(templateContent);
    }

    static get observedAttributes() {
        return ['name', 'price', 'image', 'stars', 'original-price', 'description'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {
            this.shadowRoot.querySelector('h2').textContent = newValue;
        } else if (name === 'price') {
            this.shadowRoot.querySelector('#price').textContent = 'Oferta: ' + '$' + newValue;
        } else if (name === 'image') {
            this.shadowRoot.querySelector('img').src = newValue;
        } else if (name === 'original-price') {
            this.shadowRoot.querySelector('s').textContent = '$' + newValue;
        } else if (name === 'stars') {
            this.shadowRoot.querySelector('#stars').textContent = newValue + ' ★';
        } else if (name === 'description') {
            this.shadowRoot.querySelector('#description').textContent = newValue;
        }
    }
}

customElements.define('sell-item', SellItem);