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
    dots: true,
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
});

$('.brands__carousel').owlCarousel({
    dots: true,
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
});

$('.single__slider').owlCarousel({
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

let mobileFunctionality = () => {
    console.log('mobile device')

    // function while click on search icon
    document.querySelector('.__search').addEventListener('click', () => {
        document.querySelector(".mobile__search__result").classList.add('show__drawer')
        document.querySelector(".mobile__search__result").classList.add('animate__fadeInLeft')

        document.querySelector('.search__elements').removeAttribute('hidden');

        document.querySelector('.search__heading h1').innerHTML = 'Search'

        if (document.querySelector('.mobile__search__result').classList.contains('animate__fadeOutLeftBig')) {
            document.querySelector(".mobile__search__result").classList.remove('animate__fadeOutLeftBig')
        }

        let searchHeadingHeight = document.querySelector('.search__heading').offsetHeight;
        let searchInputgHeight = document.querySelector('.__search__input').offsetHeight;
        let searchHeadHeight = document.querySelector('.recently__searched h1').offsetHeight;

        document.querySelector('.recently__searched .overflow-auto').style.maxHeight = `calc(100vh - ${searchHeadingHeight + searchInputgHeight + searchHeadHeight}px)`
    })

    // function while click on close menu icon
    document.querySelector('.close__drawer').addEventListener('click', () => {
        document.querySelector(".mobile__search__result").classList.remove('animate__fadeInLeft')
        document.querySelector(".mobile__search__result").classList.add('animate__fadeOutLeftBig')
        document.querySelector(".mobile__search__result").classList.remove('show__drawer')
    })

    // function while click on menu icon
    document.querySelector('.__menu').addEventListener('click', () => {
        let searchHeadingHeight = document.querySelector('.search__heading').offsetHeight;
        document.querySelector(".mobile__search__result").classList.add('show__drawer')
        document.querySelector(".mobile__search__result").classList.add('animate__fadeInLeft')

        document.querySelector('.menu__elements').removeAttribute('hidden');

        if (!document.querySelector('.search__elements').getAttribute('hidden')) {
            document.querySelector('.search__elements').setAttribute('hidden', true)
        }

        document.querySelector('.search__heading h1').innerHTML = 'Menu'

        let menuList = document.querySelectorAll('.main__nav div ul li')
        let regularNav = document.querySelectorAll('.bottom__nav .regular__nav li')
        let topNav = document.querySelector('.regular__nav.nav__top');

        menuList.forEach(menu => {
            document.querySelector('.menu__elements ul').append(menu)
        })

        regularNav.forEach(menu => {
            document.querySelector('.menu__elements ul').append(menu)
        })

        if (document.querySelector('.mobile__search__result').classList.contains('animate__fadeOutLeftBig')) {
            document.querySelector(".mobile__search__result").classList.remove('animate__fadeOutLeftBig')
        }

        document.querySelector('.menu__elements').style.maxHeight = `calc(100vh - ${searchHeadingHeight}px)`

        document.querySelector('.menu__elements ul li a.my__account img').setAttribute('src', '../images/icons/person-white.png')
        document.querySelector('.menu__elements ul li a.my__cart img').setAttribute('src', '../images/icons/cart-white.png')
    })
}

if (window.innerWidth < 992) {
    mobileFunctionality()
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 992) {
        mobileFunctionality()
    }
})
