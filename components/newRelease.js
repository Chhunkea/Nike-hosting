class asideNavbar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <aside class="sidenav">
        <div class="flex">
            <a class="pb-[10px] pt-[10px] font-medium" href="#about">Pick Up Today</a>
        </div>
           
        <hr>

        <!-- checkbox -->
        <div class="row pt-[20px] font-medium">
            <div>
                <a href="">Services</a>
                <a href="">Tops & T-Shirts</a>
                <a href="">Shorts</a>
                <a href="">Hoodies & Pullovers</a>
                <a href="">Jackets & Vests</a>
                <a href="">Pants & Tights</a>
                <a href="">Swimming</a>
                <a href="">Socks</a>
                <a class="pb-[30px]" href="">Accessories & Equipment</a>
            </div>
                
            <hr>

            <!-- Gender -->
            <div class="accordion-item p-[12px]">
                <button class="accordion-header pb-[12px]">Gender</button>
                <div class="accordion-content">
                    <div class="form-check ">
                        <input class="form-check-input" type="checkbox">
                        <label>Men</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox2">
                        <label for="checkbox2">Women</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Unisex</label>
                    </div>
                </div>
            </div>

            <hr>

            <!-- Kids -->
            <div class="accordion-item p-[12px]">
                <button class="accordion-header pb-[12px]">Kids</button>
                <div class="accordion-content">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                        <label>Boys</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                        <label>Girls</label>
                    </div>
                </div>
            </div>
            

            <hr>

            <!-- Shop by price -->
            <div class="accordion-item p-[12px]">
                <button class="accordion-header pb-[12px]">Shop by Price</button>
                <div class="accordion-content">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                        <label>$0 - $25</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                        <label>$25 - $50</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                        <label>$50 - $100</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                        <label>$100 - $150</label>
                    </div>
                    <a href="">+ More</a>
                </div>
            </div>
           
            <hr>
            
            <!-- Color -->
            <div class="accordion-item p-[12px]">
                <button class="accordion-header pb-[12px]">Color</button>
                <div class="accordion-content">
                    <div class="grid-container">
                        <a href="" class="circle purple-color">
                            <div class="color-rounded">
                                <p>Purple</p>
                            </div>
                        </a>
                        <a href="" class="circle black-color">
                            <div class="color-rounded">
                                <p>Black</p>
                            </div>
                        </a>
                        <a href="" class="circle red-color">
                            <div class="color-rounded">
                                <p>Red</p>
                            </div>
                        </a>
                    </div>
                    <div class="grid-container">
                        <a href="" class="circle orange-color">
                            <div class="color-rounded">
                                <p>Orange</p>
                            </div>
                        </a>
                        <a href="" class="circle blue-color">
                            <div class="color-rounded">
                                <p>Blue</p>
                            </div>
                        </a>
                        <a href="" class="circle white-color">
                            <div class="color-rounded">
                                <p>White</p>
                            </div>
                        </a>
                    </div>
                    <div class="grid-container">
                        <a href="" class="circle brown-color">
                            <div class="color-rounded">
                                <p>Brown</p>
                            </div>
                        </a>
                        <a href="" class="circle green-color">
                            <div class="color-rounded">
                                <p>Green</p>
                            </div>
                        </a>
                        <a href="" class="circle yellow-color">
                            <div class="color-rounded">
                                <p>Yellow</p>
                            </div>
                        </a>
                    </div>
                    <div class="grid-container">
                        <a href="" class="circle multi-color">
                            <div class="color-rounded">
                                <p>Multi+</p>
                            </div>
                        </a>
                        <a href="" class="circle grey-color">
                            <div class="color-rounded">
                                <p>Grey</p>
                            </div>
                        </a>
                        <a href="" class="circle pink-color">
                            <div class="color-rounded">
                                <p>Pink</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
           
            <hr>

            <!-- Sport & activity -->
            <div class="accordion-item p-[12px]">
                <button class="accordion-header pb-[12px]">Sports & Activities</button>
                <div class="accordion-content">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Lifestyle</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Running</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Training & Gym</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Yoga</label>
                    </div>
                    <a href="" class="text-xs">+ More</a>
                </div>
            </div>
        
            
            <hr>
        
            <!-- Athletes -->
            <div class="accordion-item p-[12px]">
                <button class="accordion-header pb-[12px]">Athletes</button>
                <div class="accordion-content">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">LeBron James</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Kevin Durant</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Serena Williams</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Rafael Nadal</label>
                    </div>
                    <a href="" class="text-xs">+ More</a>
                </div>
            </div>
            
            <hr>
        
            <!-- Brand -->
            <div class="accordion-item p-[12px]">
                <button class="accordion-header pb-[12px]">Brand</button>
                <div class="accordion-content">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Nike Sportswear</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Jordan</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Nike By You</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Converse</label>
                    </div>
                    <a href="" class="text-xs">+ More</a>
                </div>
            </div>
           
            <hr>
        
            <!-- Collection -->
            <div class="accordion-item p-[12px]">
                <button class="accordion-header pb-[12px]">Collections</button>
                <div class="accordion-content">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Air Force 1</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Air Max</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Alpha Huarache</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Blazer</label>
                    </div>
                    <a href="" class="text-xs">+ More</a>
                </div>
            </div>
        
           
            <hr>
        
            <!-- Collaborator -->
            <div class="accordion-item p-[12px]">
                <button class="accordion-header pb-[12px]">Collaborator</button>
                <div class="accordion-content">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Nike x MMW</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkbox3">
                        <label for="checkbox3">Doernbecher Freestyle</label>
                    </div>
                    <a href="" class="text-xs">+ More</a>
                </div>
            </div>
            
            <hr>
        
            <!-- Sale offer -->
            <a class="p-[12px]" href="">Sale & Offers</a>
            <hr>
        
            <!-- Best for -->
            <a class="p-[12px]" href="">Best For</a>
        </div> 
    </aside>
     `

    }
}

customElements.define('sidebar-new-feature', asideNavbar);

