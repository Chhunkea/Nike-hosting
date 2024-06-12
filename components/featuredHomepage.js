class featureCard extends HTMLElement {

    constructor() {
        super();
}

    connectedCallback() {
        this.innerHTML = `
        <!-- Featured: picture of girl and jordan4 shoes -->
        <div class="text-3xl mt-[84px] mb-[12px] ml-[24px] font-semibold">
            <h2>Featured</h2>
        </div>

        <div class="image-container">
            <div class="image-overlay">
                    <img src="./asset/Image/girl running.jpg"  width="650" height="620.61" alt="Girl running">
                <div class="overlay-text px-[10px]">
                    <p class="text-lg text-white">Nike aplhafly 3</p>
                    <h1 class="text-lg text-white">Push Beyond What's Posiible</h1>
                    <button class="bg-black text-white py-1 px-3 rounded-full my-4">Shop </button>
                </div>
            </div>
            
            <div class="image-overlay">
                <img src="./asset/Image/jordan 4 yellow.jpg" width="650" height="680" alt="Shoes">
                <div class="overlay-text">
                    <p class="text-lg text-white">Jordan New Arrivals</p>
                    <h1 class="text-lg text-white">Air Jordan 4</h1>
                    <h1 class="text-lg text-white">'Vivid Sulfur'</h1>
                    <button class="bg-black text-white py-1 px-3 rounded-full my-4">Shop </button>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('featured-card', featureCard);