window.addEventListener("scroll", function () {
    var nav = document.getElementById("nav");
    var nav2 = document.getElementById("nav2");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 400) {
        nav.classList.add("nav-scrolled");
        nav2.classList.add("nav2-scrolled");
    } else {
        nav.classList.remove("nav-scrolled");
        nav2.classList.remove("nav2-scrolled");
    }
});

window.addEventListener('scroll', function () {
    var scrollValue = window.scrollY;
    var blurLayer = document.querySelector('.meetEcyImage');
    var contentLayer = document.querySelector('.meetEcy-content');
    if (scrollValue > 3000) {
        blurLayer.style.filter = 'blur(' + 5 + 'px)';
        contentLayer.style.opacity = 1;
    } else {
        blurLayer.style.filter = 'blur(' + 0 + 'px)';
        contentLayer.style.opacity = 0;
    }
});

window.addEventListener('scroll', function () {
    var scrollValue = window.scrollY;
    var blurLayer = document.querySelector('.nadia');
    var contentLayer = document.querySelector('.nadia2');
    if (scrollValue > 6500 ) {
        blurLayer.style.filter = 'blur(' + 5 + 'px)';
        contentLayer.style.opacity = 1;
    } else {
        blurLayer.style.filter = 'blur(' + 0 + 'px)';
        contentLayer.style.opacity = 0;
    }
});
