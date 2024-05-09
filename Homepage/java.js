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




// blurry

document.addEventListener('DOMContentLoaded', function() {

    const contentToBlur = document.querySelector('.blurry-all');
    const hoverTrigger = document.querySelector('.hover-trigger');

    hoverTrigger.addEventListener('mouseenter', function() {
        contentToBlur.classList.add('blurry');
    });

    hoverTrigger.addEventListener('mouseleave', function() {
        contentToBlur.classList.remove('blurry');
    });
});

