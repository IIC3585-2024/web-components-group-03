import { html, render } from 'lit-html';

// Ver cómo modularizar
const sellItemTemplate = ({ name, price, originalPrice, stars, image }) => html`
  <div class="item">
    <link rel="stylesheet" href="../styles/sell-item-styles.css">
    <img src=${image} alt=${name} />
    <p id="price">$${price}</p>
    <h2>${name}</h2>
    <s>$${originalPrice}</s>
    <p id="stars">${stars} ★</p>
    <slot></slot>
  </div>
`;

class SellItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['name', 'price', 'original-price', 'stars', 'image'];
  }


  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  // Renderiza el componente con los datos actuales
  render() {
    render(sellItemTemplate(this), this.shadowRoot);
  }
}

customElements.define('sell-item', SellItem);
