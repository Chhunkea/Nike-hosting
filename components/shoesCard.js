class shoesCard extends HTMLElement {

    constructor() {
        super();
    }


    connectedCallback() {
        const image = this.getAttribute("shoes-image");
        const title = this.getAttribute("shoes-title");
        const gender = this.getAttribute("shoes-gender");
        const price = this.getAttribute("shoes-price");
        this.innerHTML = `
        <div class="image-with-text">
            <img src="${image}" alt="Image shoes-6">
            <h4>${title}</h4>
            <h5>${gender}</h5>
            <h3>$${price}</h3>
        </div> `

    }
}

customElements.define('shoes-card', shoesCard);

