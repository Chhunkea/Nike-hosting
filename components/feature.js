class feature extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <div class="footer1">
        <div class="footer-margin">
            <div>
                <h4 class="margin-down">Featured</h4>
                <div>
                    <ul>
                        <li><a href="" class="mb-12">Air Force 1</a></li>
                        <li><a href="" class="mb-12">Jordan 1</a></li>
                        <li><a href="" class="mb-12">Metcon</a></li>
                        <li><a href="" class="mb-12">Air Max 270</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <h4 class="margin-down">Shoes</h4>
                <div>
                    <ul>
                        <li><a href="" class="mb-12">All Shoes</a></li>
                        <li><a href="" class="mb-12">Jordan Shoes</a></li>
                        <li><a href="" class="mb-12">Running Shoes</a></li>
                        <li><a href="" class="mb-12">Basketball shoes</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <h4 class="margin-down">Clothing</h4>
                <div>
                    <ul>
                        <li><a href="" class="mb-12">All Clothing</a></li>
                        <li><a href="" class="mb-12">Tops & <T-Shirts></T-Shirts></a></li>
                        <li><a href="" class="mb-12">Shorts</a></li>
                        <li><a href="" class="mb-12">Hoodies & Pullovers</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <h4 class="margin-down">Kids</h4>
                <div>
                    <ul>
                        <li><a href="" class="mb-12">Infant & Toddler Shoes</a></li>
                        <li><a href="" class="mb-12">Kids Shoes</a></li>
                        <li><a href="" class="mb-12">Kids Basketball Shoes</a></li>
                        <li><a href="" class="mb-12">Kids Runnning Shoes</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        `
    }
}

customElements.define('feature-nike', feature);