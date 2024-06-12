class trending extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Trending -->
        <div class="text-3xl mt-[84px] mb-[12px] ml-[24px] font-semibold trending-section w-full">
            <h2>Trending</h2>
            <div class="swiper1-button-prev hidden md:flex">
                <button>&#10095;</button>
            </div>
            <div class="swiper1-button-next hidden md:flex">
                <button>&#10094;</button>
            </div>
        </div>

        <!-- Image: Basktball throwing-->
        <div class="snap-x ml-[24px]">
            <div class="snap-start ">
                <img src="./asset/Image/basketballgirl.jpg" height="620.61" width="580.61"  />
                <p class="my-3">Rep Your Team In March And Beyond</p>
            </div>

            <div class="snap-start">
                <img src="./asset/Image/blackshoes.jpg" height="620.61" width="580.61" />
                <p class="my-3">Air Max Dn</p>
            </div>

            <div class="snap-start">
                <img src="./asset/Image/yellow girl.jpg"height="620.61" width="580.61" />
                <p class="my-3">Fast Forward. Rewind.</p>
            </div>

            <div class="snap-start">
                <img src="./asset/Image/girl shoes.jpg" height="620.61" width="580.61"  />
                <p class="my-3">Nike Motiva: For All Walks</p>
            </div>

            <div class="snap-start">
                <img src="./asset/Image/4girls walking.png" height="620.61" width="580.61" />
                <p class="my-3">Expression in Motion</p>
            </div>
        </div>

    `

    }
}

customElements.define("trending-hero", trending)