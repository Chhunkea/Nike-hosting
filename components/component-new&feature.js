class itemCard extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const shoesPicture = this.getAttribute('shoes-picture')
        const title = this.getAttribute("shoes-title");
        const shoesName = this.getAttribute("shoes-name");
        const gender = this.getAttribute("shoes-gender");
        const shoesColor = this.getAttribute("shoes-color");
        const price = this.getAttribute("shoes-price");

        this.innerHTML = `
        <div class="image-container">
            <img src="${shoesPicture}">
            <a href="">${title}</a>
            <p>${shoesName}</p>
            <p class="gray-text">${gender}</p>
            <p class="gray-text">${shoesColor}</p>
            <p>${price}</p>
        </div>
        `
    }
}

customElements.define('shoes-card', itemCard);