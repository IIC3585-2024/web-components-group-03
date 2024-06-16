import { LitElement, html, css } from 'lit';

class TodoList extends LitElement {
    static properties = {
        title: { type: String },
        items: { type: Array },
        prompt: { type: String },
        item1: { type: String },
        item2: { type: String },
        item3: { type: String }
      };
    
      constructor() {
        super();
        this.title = '';
        this.items = []
        this.item1 = '';
        this.item2 = '';
        this.item3 = '';
        this.prompt = 'Add new list item';
      }

      addItem() {
        const input = this.shadowRoot.querySelector('input');
        const newItem = input.value.trim();
        if (newItem) {
          this.items = [...this.items, newItem];
          input.value = '';
        }
      }
    
      removeItem(index) {
        this.items = this.items.filter((_, i) => i !== index);
      }

      connectedCallback() {
        super.connectedCallback();
        this.items.push(this.item1, this.item2, this.item3);
      }

      render() {
        return html`    
            <link rel="stylesheet" href="../../styles/TodoList/todo-list-style.css">
            <div class="todo-container">
            <h1>${this.title}</h1>
            <ul class="todo-items">
            ${this.items.map((item, index) => html`
                <li class="todo-item">
                ${item} 
                <button @click="${() => this.removeItem(index)}">-</button>
                </li>
            `)}
            </ul>
            <div class="todo-input">
            <input type="text" placeholder="${this.prompt}" @keydown="${(e) => { if (e.key === 'Enter') this.addItem(); }}">
            <button @click="${this.addItem}">+</button>
            </div>
        </div>
      `
    }
}

customElements.define('todo-list', TodoList);
