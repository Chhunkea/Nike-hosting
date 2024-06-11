class footer extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
        <!-- footer2 -->
        <div class="footer2 flex justify-center bg-black">
            <div class="container">
                <div class="footer2-men">
                    <div class="footer2-container">

                    <!-- First div with 5 columns -->
                    <div class="footer2-class">
                    <ul class="footer2-ul">
                        <h4 class="footer2-li text-slate-50"><a href="">RESOURCES</a></h4>
                        <h4 class="footer2-li text-slate-50"><a href="">GIFT CARDS</a></h4>
                        <h4 class="footer2-li text-slate-50"><a href="">FINDS A STORE</a></h4>
                        <h4 class="footer2-li text-slate-50"><a href="">BECOME A MEMBER</a></h4>
                        <h4 class="footer2-li text-slate-50"><a href="">NIKE X NBA</a></h4>
                        <h4 class="footer2-li text-slate-50"><a href="">NIKE JOURNAL</a></h4>
                        <h4 class="footer2-li text-slate-50"><a href="">Site Feedback</a></h4>
                    </ul>
                    </div>
        
                    <!-- Second div with 5 columns -->
                    <div class="footer2-class">
                    <ul class="footer2-ul">
                        <h4 class="footer2-li text-slate-50">HELP</h4>
                        <li class="footer2-li">Get Help</li>
                        <li class="footer2-li">Order Status</li>
                        <li class="footer2-li">Shipping and Delivery</li>
                        <li class="footer2-li">Returns</li>
                        <li class="footer2-li">Order Cancellation</li>
                        <li class="footer2-li">Payment Options</li>
                        <li class="footer2-li">Gift Card Balance</li>
                        <li class="footer2-li">Contatct Us</li>            
                    </ul>
                    </div>
        
                    <!-- Thirth div with 5 columns -->
                    <div class="footer2-class">
                        <ul class="footer2-ul">
                        <h4 class="footer2-li text-slate-50">COMPANY</h4>
                        <li class="footer2-li">About Nike</li>
                        <li class="footer2-li">News</li>
                        <li class="footer2-li">Careers</li>
                        <li class="footer2-li">Investors</li>
                        <li class="footer2-li">Purpose</li>
                        <li class="footer2-li">Sustainability</li>
                        </ul>
                    </div>
        
                    <!-- Four div with 5 columns -->
                    <div class="footer2-class">
                        <ul class="footer2-ul">
                        <li class="footer2-li text-slate-50">PROMOTIONS & DISCOUNTS</li>
                        <li class="footer2-li">Student</li>
                        <li class="footer2-li">Military</li>
                        <li class="footer2-li">Teacher</li>
                        <li class="footer2-li">First Responders &</li>
                        <li class="footer2-li">Medical Professionals</li>
                        <li class="footer2-li">Birthday</li>
                        </ul>
                    </div>
        
                    <!-- test-svg -->
                    <div class="svg-icon-footer2">
                        <ul>
                            <li><svg class="social-link-icon" width="30px" fill="gray" height="30px" viewBox="0 0 24 24"><path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6 9.28v.4c0 1.387-.333 2.72-1 4a8.186 8.186 0 0 1-2.84 3.12c-1.333.853-2.827 1.28-4.48 1.28a8.535 8.535 0 0 1-4.56-1.28h.72c1.387 0 2.613-.427 3.68-1.28-.64 0-1.213-.2-1.72-.6-.507-.4-.867-.92-1.08-1.56l.56.16c.373 0 .64-.053.8-.16a2.67 2.67 0 0 1-1.72-1 2.913 2.913 0 0 1-.68-1.88c.427.267.88.4 1.36.4-.907-.533-1.36-1.36-1.36-2.48 0-.533.133-1.04.4-1.52.8.96 1.72 1.707 2.76 2.24a8.133 8.133 0 0 0 3.4.88c-.107-.16-.16-.4-.16-.72 0-.8.293-1.493.88-2.08s1.28-.88 2.08-.88 1.547.293 2.24.88c.48-.107 1.12-.347 1.92-.72-.213.747-.64 1.28-1.28 1.6H18c.747-.16 1.28-.32 1.6-.48-.533.693-1.067 1.253-1.6 1.68z"></path></svg></li>
                            <li><svg class="social-link-icon" width="30px" fill="gray" height="30px" viewBox="0 0 24 24"><path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm3.12 12h-2v7.2H10.4V12H8.64V9.52h1.76V8c0-1.12.187-1.92.56-2.4.427-.587 1.2-.88 2.32-.88h2V7.2h-1.2c-.427 0-.693.067-.8.2-.107.133-.16.387-.16.76v1.2h2.16L15.12 12z"></path></svg></li>
                            <li><svg class="social-link-icon" width="30px" fill="gray" height="30px" viewBox="0 0 24 24"><path d="M11.28 17.6a.604.604 0 0 1-.2.24.43.43 0 0 1-.24.08c-.08 0-.133-.027-.16-.08a.557.557 0 0 1-.04-.24v-2.96h-.72v3.28a1 1 0 0 0 .12.52c.08.133.2.2.36.2.16 0 .307-.053.44-.16.133-.107.28-.24.44-.4v.48H12v-3.92h-.72v2.96zM6.96 14v-.8H9.6v.8h-.88v4.56h-.88V14h-.88zm4.96-4.72c-.107 0-.2-.04-.28-.12a.384.384 0 0 1-.12-.28v-2.4c0-.053.027-.107.08-.16.053-.053.147-.08.28-.08.133 0 .24.027.32.08a.27.27 0 0 1 .12.24v2.32c0 .107-.04.2-.12.28a.384.384 0 0 1-.28.12zm2 8.32c0-.64.027-1.307.08-2 0-.107-.04-.2-.12-.28-.08-.08-.16-.12-.24-.12h-.12l-.24.16v2.4l.24.16.16.08c.107 0 .173-.027.2-.08.027-.053.04-.16.04-.32zm.08-3.04c.213 0 .387.08.52.24.133.16.2.4.2.72v2.24c0 .267-.053.48-.16.64a.422.422 0 0 1-.44.2 2.1 2.1 0 0 1-.48-.12.506.506 0 0 1-.28-.24v.32h-.8V13.2h.8v1.76c.107-.107.213-.2.32-.28a.532.532 0 0 1 .32-.12zm3.92 5.12c.267-.213.427-.907.48-2.08.053-.587.107-1.147.16-1.68 0-.48-.053-1.013-.16-1.6-.107-1.173-.28-1.893-.52-2.16-.24-.267-1.267-.453-3.08-.56l-2.64-.08-2.72.08c-1.813.107-2.84.293-3.08.56-.24.267-.413.987-.52 2.16a16.07 16.07 0 0 0-.08 1.6c0 .533.027 1.093.08 1.68.107 1.173.28 1.88.52 2.12.24.24 1.267.44 3.08.6l2.72.08 2.64-.08c1.813-.16 2.853-.347 3.12-.56v-.08zM8.4 4h-.96l1.12 3.6v2.24h.96v-2.4L10.64 4h-.96l-.56 2.32h-.08L8.4 4zm2.32 2.56V8.8c0 .373.107.667.32.88.213.213.507.32.88.32s.667-.107.88-.32c.213-.213.32-.507.32-.88V6.56c0-.32-.107-.587-.32-.8-.213-.213-.507-.32-.88-.32s-.667.107-.88.32c-.213.213-.32.48-.32.8zm3.12-.96v3.6a1 1 0 0 0 .12.52c.08.133.213.2.4.2.187 0 .36-.04.52-.12.16-.08.32-.2.48-.36v.48h.88V5.6h-.88v3.2a.523.523 0 0 1-.24.24.645.645 0 0 1-.28.08c-.08 0-.133-.013-.16-.04-.027-.027-.04-.093-.04-.2V5.52h-.8v.08zM12 0c2.187 0 4.2.533 6.04 1.6a11.793 11.793 0 0 1 4.36 4.36C23.467 7.8 24 9.813 24 12s-.533 4.2-1.6 6.04a11.793 11.793 0 0 1-4.36 4.36C16.2 23.467 14.187 24 12 24s-4.2-.533-6.04-1.6a11.793 11.793 0 0 1-4.36-4.36C.533 16.2 0 14.187 0 12s.533-4.2 1.6-6.04A11.793 11.793 0 0 1 5.96 1.6C7.8.533 9.813 0 12 0zm4.56 16.08l-.08-.4c0-.16-.027-.28-.08-.36a.27.27 0 0 0-.24-.12.27.27 0 0 0-.24.12c-.053.08-.08.2-.08.36v.4h.72zm-.32-1.52c.32 0 .573.093.76.28.187.187.28.467.28.84v.96h-1.44v.8c0 .16.027.28.08.36.053.08.147.12.28.12.133 0 .227-.04.28-.12.053-.08.08-.227.08-.44v-.16h.72v.24c0 .373-.093.667-.28.88-.187.213-.453.32-.8.32-.347 0-.613-.107-.8-.32-.187-.213-.28-.507-.28-.88v-1.76c0-.32.107-.587.32-.8.213-.213.48-.32.8-.32z"></path></svg></li>
                            <li><svg class="social-link-icon" width="30px" fill="gray" height="30px" viewBox="0 0 24 24"><path d="M16 12.48a4.723 4.723 0 0 1-.56 1.48 3.93 3.93 0 0 1-1.04 1.16 3.428 3.428 0 0 1-1.92.68 3.628 3.628 0 0 1-1.96-.48 3.414 3.414 0 0 1-1.4-1.48c-.48-.96-.587-1.973-.32-3.04H7.68l.08 5.52c0 .107.04.213.12.32.08.107.173.16.28.16h8.32c.107 0 .213-.053.32-.16.107-.107.16-.213.16-.32V10.8h-1.12c.16.533.213 1.093.16 1.68zm-3.68 2c.64 0 1.2-.24 1.68-.72s.72-1.053.72-1.72a2.56 2.56 0 0 0-.68-1.76c-.453-.507-1.013-.76-1.68-.76s-1.24.24-1.72.72-.72 1.053-.72 1.72.227 1.253.68 1.76c.453.507 1 .76 1.64.76h.08zm4.16-7.6h-1.12c-.107 0-.213.053-.32.16-.107.107-.16.213-.16.32v1.36c.107.213.267.32.48.32h1.12c.16 0 .28-.053.36-.16a.532.532 0 0 0 .12-.32v-1.2c0-.107-.053-.213-.16-.32-.107-.107-.213-.16-.32-.16zM12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6.24 16.88l-.08.08v.08a.926.926 0 0 1-.28.68 1.3 1.3 0 0 1-.68.36H7.52a.871.871 0 0 1-.68-.32 1.536 1.536 0 0 1-.36-.72l-.08-.16.08-9.84c0-.267.093-.507.28-.72.187-.213.413-.347.68-.4h9.68a1.3 1.3 0 0 1 .68.36 1.3 1.3 0 0 1 .36.68l.08 9.92z"></path></svg></li>
                        </ul>
                    </div>
                    </div> 
                
                <!-- United-state -->
                    <div class="privacy">
                        <div class="down-footer2">
                            <div class="svg-location flex mt-1 :ml-14">
                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="18px" height="15px" fill="#FFFFF">
                                    <path fill="currentColor" fill-rule="evenodd" d="M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z" clip-rule="evenodd"></path>
                                </svg>
                                <h5 class="country-pin-label ml-5 mr-8">United States</h5>
                            </div>

                            <div class="nike-reserved">
                                <span id="hf_header_label_copyright" class="nike-right-reserved">© 2024Nike, Inc. All Rights Reserved</span>
                            </div>
        
                            <!-- right privacy -->
                            <div class="footer2-bottom-right">
                                <ul>
                                    <li>Guides</li>
                                    <li>Terms of Sale</li>
                                    <li>Terms of Use</li>
                                    <li>Nike Privacy Policy</li>
                                </ul>
                            </div>  
                        </div>

                        <div>
                            <ul class="footer-links-column">
                                <li><img class="img-blue-icon" src="https://static.nike.com/a/images/w_960,c_limit/81a78fa9-0756-42ac-adb0-33c0245bf27a/image.png" alt=""></li>
                                <li class="text-white">Your Privacy Choices</li>
                                <li >CA Supply Chain Act</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('component-footer', footer);