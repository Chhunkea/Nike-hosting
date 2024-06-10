document.addEventListener("DOMContentLoaded", function() {
    // Hover effects
    const hoverTriggers = document.querySelectorAll('.hover-trigger');
    const hoverBoxes = document.querySelectorAll('.hover-box');

    hoverTriggers.forEach(function(hoverTrigger) {
        let hoverBox = hoverTrigger.querySelector('.hover-box');

        function showHoverBox() {
            hoverBox.style.visibility = "visible";
            hoverBox.style.opacity = 1;
        }

        function hideHoverBox() {
            hoverBox.style.visibility = "hidden";
            hoverBox.style.opacity = 0;
        }

        hoverTrigger.addEventListener("mouseenter", function() {
            clearTimeout(hoverTimeout);
            showHoverBox();
        });

        hoverTrigger.addEventListener("mouseleave", function() {
            hoverTimeout = setTimeout(function() {
                hideHoverBox();
            }, 100);
        });

        hoverBox.addEventListener("mouseleave", function() {
            hideHoverBox();
        });
    });
});

// humburger
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");

    // Add click event listener to hamburger icon
    hamburgerIcon.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    // Add click event listener to close button
    closeBtn.addEventListener("click", function() {
        sidebar.classList.remove("active");
    });

    // Hide the sidebar when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});


// Accordion
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', function () {
            // Toggle active class
            this.classList.toggle('active');

            // Toggle the accordion content
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
