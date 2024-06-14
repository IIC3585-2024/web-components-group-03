class TodoList extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const templateContent = document.getElementById('todo-list-template').content.cloneNode(true);
        shadow.appendChild(templateContent);

        this.items = [];

        this.tittle = shadow.querySelector('h1');
        this.itemsContainer = shadow.querySelector('ul');
        this.input = shadow.querySelector('input');
        this.addButton = shadow.querySelector('button');

        this.addButton.addEventListener('click', this.addItem.bind(this));
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.addItem();
        });
    }

    static get observedAttributes() {
        return ['title', 'item1', 'item2', 'item3', 'prompt'];
    }

    attributeChangedCallback(name, _, newValue) {
        switch (name) {
            case 'title':
                this.tittle.textContent = newValue;
                break;
            case 'item1':
            case 'item2':
            case 'item3':
                if (newValue) this.items.push(newValue);
                break;
            case 'prompt':
                this.input.setAttribute('placeholder', newValue);
                break;
        }
        this.renderItems();
    }

    addItem() {
        const newItem = this.input.value.trim();
        if (newItem) {
            this.items.push(newItem);
            this.renderItems();
            this.input.value = '';
        }
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.renderItems();
    }

    renderItems() {
        this.itemsContainer.innerHTML = '';
        this.items.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.innerHTML = `${item} <button onclick="this.getRootNode().host.removeItem(${index})">-</button>`;
            this.itemsContainer.appendChild(li);
        });

    }
}

customElements.define('todo-list', TodoList);