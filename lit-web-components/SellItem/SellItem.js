import { html, render } from 'lit-html';

// Ver cómo modularizar
const sellItemTemplate = ({ name, price, originalPrice, stars, image }) => html`
  <div class="item">
      <link rel="stylesheet" href="../../styles/SellItem/sell-item-styles.css">
      <img src="../../styles/imgs/No-Image-Placeholder.svg.png"/>
      <h2></h2>
      <p id="description"></p>
      <p id="stars"></p>
      <p id="price"></p>
      <s></s>
      <button class="delete-button">Eliminar</button>
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
