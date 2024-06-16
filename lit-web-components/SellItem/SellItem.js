import { LitElement, html, css } from 'lit';

class SellItem extends LitElement {
    static properties = {
        name: { type: String },
        description: { type: String },
        price: { type: Number },
        stars: { type: Number },
        originalPrice: { type: Number },
        image: { type: String }
    };

    constructor() {
        super();
        this.name = '';
        this.description = '';
        this.price = 0;
        this.stars = 0;
        this.originalPrice = 0;
        this.image = '';
    }

    render() {
        return html`
            <link rel="stylesheet" href="../../styles/SellItem/sell-item-styles.css">
            <div class="item">
                <img src="${this.image ? this.image : '../../styles/imgs/No-Image-Placeholder.svg.png'}" alt="${this.name}">
                <h2>${this.name}</h2>
                <p id="description">${this.description}</p>
                <p id="stars">${this.stars} ★</p>
                <p id="price">Oferta: $${this.price}</p>
                <s>${this.originalPrice ? '$' + this.originalPrice : ''}</s>
                <button class="delete-button" @click="${this._handleDelete}">Eliminar</button>
            </div>
        `;
    }

    _handleDelete() {
        this.remove();
    }
}

customElements.define('sell-item', SellItem);
