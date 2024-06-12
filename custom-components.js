fetch('./components/sell-item.html')
    .then(response => response.text())
    .then(html => {
        const template = document.createElement('template');
        template.innerHTML = html;

        class SellItem extends HTMLElement {
            constructor() {
                super();
                const shadowRoot = this.attachShadow({ mode: 'open' });
                const templateContent = template.content.cloneNode(true);
                shadowRoot.appendChild(templateContent);
            }
    
            static get observedAttributes() {
                return ['name', 'price', 'image', 'stars', 'original-price'];
            }
    
            attributeChangedCallback(name, oldValue, newValue) {
                if (name === 'name') {
                    this.shadowRoot.querySelector('h2').textContent = newValue;
                } else if (name === 'price') {
                    this.shadowRoot.querySelector('#price').textContent = '$' + newValue;
                } else if (name === 'image') {
                    this.shadowRoot.querySelector('img').src = newValue;
                } else if (name === 'original-price') {
                    this.shadowRoot.querySelector('s').textContent = '$' + newValue;
                } else if (name === 'stars') {
                    this.shadowRoot.querySelector('#stars').textContent = newValue + ' ★';
                }
            }
        }
    
        customElements.define('sell-item', SellItem);
    });
