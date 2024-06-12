class navBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const link1 = this.getAttribute("newFeature");
        const link2 = this.getAttribute("men");
        const link3 = this.getAttribute("women");
        const link4 = this.getAttribute("kid");
        const link5 = this.getAttribute("homePage");

        this.innerHTML = `
        <nav>
        <div class=" bg-gray-100">
            <div class="max-w-[1920px] mx-auto">
                <div class="justify-between md:flex hidden">
                    <div class="flex justify-between items-center max-w-[1920px] px-5 mb-3 gap-4">
                        <svg height="30px" width="30px" fill="#111" viewBox="0 0 26 32" data-darkreader-inline-fill="""><path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path></svg>
                        <svg height="24px" width="24px" fill="#111" viewBox="0 0 39 33" data-darkreader-inline-fill="""><path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path></svg>
                    </div>
                    <div class="divide-x divide-black my-3">
                        <a href="#" class="px-2 text-xs">Find Store</a>
                        <a href="#" class="px-2 text-xs">Help</a>
                        <a href="#" class="px-2 text-xs">Join Us</a>
                        <a href="#" class="px-2 text-xs">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="flex justify-between items-center max-w-[1920px] mx-auto lg:px-[8px] px-5 mb-3">

            <!-- Nike logo -->
            <a href="${link5}">
                <svg aria-hidden="true" class="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="78.47px" height="78.47px" fill="none">
                    <path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"></path>
                </svg>
            </a>
    
            <!-- List -->
            <ul class="text-2md font-medium gap-7 pl-28 hidden lg:flex">
                <li class="hover-trigger">
                    <a href="${link1}">New & Featured</a>
                    <div class="hover-box">
                        <div class="hover-down-texts">
                            <div class="flex-item-hover">
                                <a href="">Limited Time</a>
                                <div class="flex-item-hover-gray"><a href="">Sale: Up to 50%</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">New & Featured</a>
                                <div class="flex-item-hover-gray"><a href="">New Arrivals</a></div>
                                <div class="flex-item-hover-gray"><a href="">New & Upcoming Drops</a></div>
                                <div class="flex-item-hover-gray"><a href="">Best Seller</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Trending</a>
                                <div class="flex-item-hover-gray"><a href="">ACG</a></div>
                                <div class="flex-item-hover-gray"><a href="">Lifestyle Running</a></div>
                                <div class="flex-item-hover-gray"><a href="">The Color Shop</a></div>
                                <div class="flex-item-hover-gray"><a href="">Shop Sport</a></div>
                                <div class="flex-item-hover-gray"><a href="">New in Jordan Shoes</a></div>
                                <div class="flex-item-hover-gray"><a href="">Mother's Day Shop</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Shop Classic</a>
                                <div class="flex-item-hover-gray"><a href="">Dunk</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Jordan 1</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Force</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Max</a></div>
                                <div class="flex-item-hover-gray"><a href="">Blazer</a></div>
                                <div class="flex-item-hover-gray"><a href="">Vomero</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Explore</a>
                                <div class="flex-item-hover-gray"><a href="">SNKRS Launch Calender</a></div>
                                <div class="flex-item-hover-gray"><a href="">Running Shoe Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Bra Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Product Care</a></div>
                                <div class="flex-item-hover-gray"><a href="">Member Rewards</a></div>
                                <div class="flex-item-hover-gray"><a href="">Buying Guides</a></div>
                            </div>
                        </div>
                    </div>
                </li>
            
    
                <li class="hover-trigger">
                    <a href="${link2}">Men</a>
                    <div class="hover-box">
                        <div class="hover-down-texts">
                            <div class="flex-item-hover">
                                <a href="">Limited Time</a>
                                <div class="flex-item-hover-gray"><a href="">Sale: Up to 50%</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">New & Featured</a>
                                <div class="flex-item-hover-gray"><a href="">New Arrivals</a></div>
                                <div class="flex-item-hover-gray"><a href="">New & Upcoming Drops</a></div>
                                <div class="flex-item-hover-gray"><a href="">Best Seller</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Trending</a>
                                <div class="flex-item-hover-gray"><a href="">ACG</a></div>
                                <div class="flex-item-hover-gray"><a href="">Lifestyle Running</a></div>
                                <div class="flex-item-hover-gray"><a href="">The Color Shop</a></div>
                                <div class="flex-item-hover-gray"><a href="">Shop Sport</a></div>
                                <div class="flex-item-hover-gray"><a href="">New in Jordan Shoes</a></div>
                                <div class="flex-item-hover-gray"><a href="">Mother's Day Shop</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Shop Classic</a>
                                <div class="flex-item-hover-gray"><a href="">Dunk</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Jordan 1</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Force</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Max</a></div>
                                <div class="flex-item-hover-gray"><a href="">Blazer</a></div>
                                <div class="flex-item-hover-gray"><a href="">Vomero</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Explore</a>
                                <div class="flex-item-hover-gray"><a href="">SNKRS Launch Calender</a></div>
                                <div class="flex-item-hover-gray"><a href="">Running Shoe Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Bra Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Product Care</a></div>
                                <div class="flex-item-hover-gray"><a href="">Member Rewards</a></div>
                                <div class="flex-item-hover-gray"><a href="">Buying Guides</a></div>
                            </div>
                        </div>
                    </div>
                </li>
    
                <li class="hover-trigger">
                    <a href="${link3}">Women</a>
                    <div class="hover-box">
                        <div class="hover-down-texts">
                            <div class="flex-item-hover">
                                <a href="">Limited Time</a>
                                <div class="flex-item-hover-gray"><a href="">Sale: Up to 50%</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">New & Featured</a>
                                <div class="flex-item-hover-gray"><a href="">New Arrivals</a></div>
                                <div class="flex-item-hover-gray"><a href="">New & Upcoming Drops</a></div>
                                <div class="flex-item-hover-gray"><a href="">Best Seller</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Trending</a>
                                <div class="flex-item-hover-gray"><a href="">ACG</a></div>
                                <div class="flex-item-hover-gray"><a href="">Lifestyle Running</a></div>
                                <div class="flex-item-hover-gray"><a href="">The Color Shop</a></div>
                                <div class="flex-item-hover-gray"><a href="">Shop Sport</a></div>
                                <div class="flex-item-hover-gray"><a href="">New in Jordan Shoes</a></div>
                                <div class="flex-item-hover-gray"><a href="">Mother's Day Shop</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Shop Classic</a>
                                <div class="flex-item-hover-gray"><a href="">Dunk</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Jordan 1</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Force</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Max</a></div>
                                <div class="flex-item-hover-gray"><a href="">Blazer</a></div>
                                <div class="flex-item-hover-gray"><a href="">Vomero</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Explore</a>
                                <div class="flex-item-hover-gray"><a href="">SNKRS Launch Calender</a></div>
                                <div class="flex-item-hover-gray"><a href="">Running Shoe Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Bra Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Product Care</a></div>
                                <div class="flex-item-hover-gray"><a href="">Member Rewards</a></div>
                                <div class="flex-item-hover-gray"><a href="">Buying Guides</a></div>
                            </div>
                        </div>
                    </div>
                </li>
    
                <li class="hover-trigger">
                    <a href="${link4}">Kids</a>
                    <div class="hover-box">
                        <div class="hover-down-texts">
                            <div class="flex-item-hover">
                                <a href="">Limited Time</a>
                                <div class="flex-item-hover-gray"><a href="">Sale: Up to 50%</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">New & Featured</a>
                                <div class="flex-item-hover-gray"><a href="">New Arrivals</a></div>
                                <div class="flex-item-hover-gray"><a href="">New & Upcoming Drops</a></div>
                                <div class="flex-item-hover-gray"><a href="">Best Seller</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Trending</a>
                                <div class="flex-item-hover-gray"><a href="">ACG</a></div>
                                <div class="flex-item-hover-gray"><a href="">Lifestyle Running</a></div>
                                <div class="flex-item-hover-gray"><a href="">The Color Shop</a></div>
                                <div class="flex-item-hover-gray"><a href="">Shop Sport</a></div>
                                <div class="flex-item-hover-gray"><a href="">New in Jordan Shoes</a></div>
                                <div class="flex-item-hover-gray"><a href="">Mother's Day Shop</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Shop Classic</a>
                                <div class="flex-item-hover-gray"><a href="">Dunk</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Jordan 1</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Force</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Max</a></div>
                                <div class="flex-item-hover-gray"><a href="">Blazer</a></div>
                                <div class="flex-item-hover-gray"><a href="">Vomero</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Explore</a>
                                <div class="flex-item-hover-gray"><a href="">SNKRS Launch Calender</a></div>
                                <div class="flex-item-hover-gray"><a href="">Running Shoe Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Bra Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Product Care</a></div>
                                <div class="flex-item-hover-gray"><a href="">Member Rewards</a></div>
                                <div class="flex-item-hover-gray"><a href="">Buying Guides</a></div>
                            </div>
                        </div>
                    </div>
                </li>
    
                <li class="hover-trigger">
                    <a href="#">Accessories</a>
                    <div class="hover-box">
                        <div class="hover-down-texts">
                            <div class="flex-item-hover">
                                <a href="">Limited Time</a>
                                <div class="flex-item-hover-gray"><a href="">Sale: Up to 50%</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">New & Featured</a>
                                <div class="flex-item-hover-gray"><a href="">New Arrivals</a></div>
                                <div class="flex-item-hover-gray"><a href="">New & Upcoming Drops</a></div>
                                <div class="flex-item-hover-gray"><a href="">Best Seller</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Trending</a>
                                <div class="flex-item-hover-gray"><a href="">ACG</a></div>
                                <div class="flex-item-hover-gray"><a href="">Lifestyle Running</a></div>
                                <div class="flex-item-hover-gray"><a href="">The Color Shop</a></div>
                                <div class="flex-item-hover-gray"><a href="">Shop Sport</a></div>
                                <div class="flex-item-hover-gray"><a href="">New in Jordan Shoes</a></div>
                                <div class="flex-item-hover-gray"><a href="">Mother's Day Shop</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Shop Classic</a>
                                <div class="flex-item-hover-gray"><a href="">Dunk</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Jordan 1</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Force</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Max</a></div>
                                <div class="flex-item-hover-gray"><a href="">Blazer</a></div>
                                <div class="flex-item-hover-gray"><a href="">Vomero</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Explore</a>
                                <div class="flex-item-hover-gray"><a href="">SNKRS Launch Calender</a></div>
                                <div class="flex-item-hover-gray"><a href="">Running Shoe Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Bra Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Product Care</a></div>
                                <div class="flex-item-hover-gray"><a href="">Member Rewards</a></div>
                                <div class="flex-item-hover-gray"><a href="">Buying Guides</a></div>
                            </div>
                        </div>
                    </div>
                </li>
    
                <li class="hover-trigger">
                    <a href="#">Sale</a>
                    <div class="hover-box">
                        <div class="hover-down-texts">
                            <div class="flex-item-hover">
                                <a href="">Limited Time</a>
                                <div class="flex-item-hover-gray"><a href="">Sale: Up to 50%</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">New & Featured</a>
                                <div class="flex-item-hover-gray"><a href="">New Arrivals</a></div>
                                <div class="flex-item-hover-gray"><a href="">New & Upcoming Drops</a></div>
                                <div class="flex-item-hover-gray"><a href="">Best Seller</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Trending</a>
                                <div class="flex-item-hover-gray"><a href="">ACG</a></div>
                                <div class="flex-item-hover-gray"><a href="">Lifestyle Running</a></div>
                                <div class="flex-item-hover-gray"><a href="">The Color Shop</a></div>
                                <div class="flex-item-hover-gray"><a href="">Shop Sport</a></div>
                                <div class="flex-item-hover-gray"><a href="">New in Jordan Shoes</a></div>
                                <div class="flex-item-hover-gray"><a href="">Mother's Day Shop</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Shop Classic</a>
                                <div class="flex-item-hover-gray"><a href="">Dunk</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Jordan 1</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Force</a></div>
                                <div class="flex-item-hover-gray"><a href="">Air Max</a></div>
                                <div class="flex-item-hover-gray"><a href="">Blazer</a></div>
                                <div class="flex-item-hover-gray"><a href="">Vomero</a></div>
                            </div>
    
                            <div class="flex-item-hover">
                                <a href="">Explore</a>
                                <div class="flex-item-hover-gray"><a href="">SNKRS Launch Calender</a></div>
                                <div class="flex-item-hover-gray"><a href="">Running Shoe Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Bra Finder</a></div>
                                <div class="flex-item-hover-gray"><a href="">Product Care</a></div>
                                <div class="flex-item-hover-gray"><a href="">Member Rewards</a></div>
                                <div class="flex-item-hover-gray"><a href="">Buying Guides</a></div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
    
            <!-- Search button-->
            <div class="flex items-center lg:gap-0 gap-6">

                <!-- Search Input and Icon Container -->
                <div class="relative hidden lg:block">
                  <input id="searchInput" class="bg-gray-100 w-44 py-2 pl-12 pr-3 rounded-full" placeholder="search">
                  <a href="#" id="searchIcon" class="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                      <path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"></path>
                    </svg>
                  </a>
                </div>
                
              <!-- Input: remove the search border box -->
                <div class="lg:hidden">
                  <a href="#" id="searchIcon" class="cursor-pointer">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                      <path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"></path>
                    </svg>
                  </a>
                </div>

                <!-- Heart and bag icons -->
                <div class="flex gap-5">
                    <!-- heart -->
                    <div class="hidden lg:flex ml-5">
                        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"></path>
                          </svg>
                    </div>

                    <!-- bag -->
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"></path>
                    </svg>   
                  
                    <!-- people -->
                    <div class="lg:hidden flex">
                        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" data-var="glyph" style="display: inline-block;"><path fill="currentColor" d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z"></path></svg>
                    </div>
                </div>

                <!-- humburger -->
                <div class="flex items-center gap-5 cursor-pointer">
                    <div class="hamburger-icon lg:hidden">
                    <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M3 12h18M3 6h18M3 18h18"></path>
                    </svg>
                </div>

                    <div class="sidebar cursor-pointer">
                        <div class="sidebar-content cursor-pointer">
                            <button class="close-btn cursor-pointer">×</button>
                            <ul class="list-none text-2xl">
                                <li class="py-[10px]"><a href="${link1}">New & Featured</a></li>
                                <li class="py-[10px]"><a href="${link2}">Men</a></li>
                                <li class="py-[10px]"><a href="${link3}">Women</a></li>
                                <li class="py-[10px]"><a href="${link4}">Kids</a></li>
                                <li class="py-[10px]"><a href="">Jordan</a></li>
                                <li class="py-[10px]"><a href="">Sale</a></li>
                            </ul>
                            
                            <!-- Jordan -->
                            <ul class="pt-[28px]">
                                <li class="flex">
                                    <svg height="30px" width="30px" fill="#111" viewBox="0 0 26 32">
                                        <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                                        </path>
                                    </svg>
                                    <a class="pl-[12px]" href="">Jordan</a>
                                </li>
                            </ul>

                            <!-- Converse -->
                            <ul class="pt-[12px]">
                                <li class="flex">
                                    <svg height="30px" width="30px" fill="#111" viewBox="0 0 39 33">
                                        <path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z">
                                        </path>
                                    </svg>
                                    <a class="pl-[12px]" href="">Converse</a>
                                </li>
                            </ul>

                            <div class="mt-[50px] pt-[48px] text-xl">
                                <p>Become a Nike Member for the best products, inspiration and stories in sport. <strong>Learn more</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
        `
    }
}

customElements.define('component-navbar', navBar);