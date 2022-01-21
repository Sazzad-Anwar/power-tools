var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();

$('.product__items').owlCarousel({
    dots: false,
    loop: true,
    navText: [
        "<img class='carousel__previous' src='../images/icons/chevron_big_left.png' />",
        "<img class='carousel__next' src='../images/icons/chevron_big_right.png' />",
    ],
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})