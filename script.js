function hideNav() {

    const body = document.body;
    const scrollUp = 'scroll-up';
    const scrollDown = 'scroll-down';
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
        body.classList.remove(scrollUp);
        return;
    }
    
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
    });


}

$(hideNav);

// 'use strict';
// ==========================================================================
// // We need a function that will hide the header on scroll down

// // In order to do this we need an event listener on scroll
// // And we need to determine which direction the user is scrolling
// // And then we need to modify the top position of the navbar



// function hideNav() {
    
//     let scrollPos = $(window).scrollTop();

//     // This listens for a click on the nav and logs it to the console.
//     $('body').on('click', 'nav', (function(event) {
//         console.log('Click on nav recorded.');
//     }));

//     // This listens for a click on main and logs it to the console.
//     $('body').on('click', 'main', (function(event) {
//         console.log('Click on main recorded.');
//     }));

//     // This listens for a scroll on the window and logs it
//     $(window).scroll(function() {
        
//         console.log('Scroll on window recorded.');
//         console.log($(window).scrollTop());
//         console.log(scrollPos);

//         if ($(window).scrollTop() > (scrollPos + 40)) {
//             console.log('Downscroll recorded.')
//             // Set a variable breadHeight equal to the top position plus a number we
//             // want to increment the bread position by on every scroll event
//             let navUp = $('.primary-nav').position().top - 5;
//             $('.primary-nav').css('top', navUp + 'px');

//         } else if ($(window).scrollTop() > (scrollPos + -40)) {
//             console.log('Upscroll recorded.')
//             let navDown = $('.primary-nav').position().top + 5;
//             $('.primary-nav').css('top', navDown + 'px');
//         }

//     });

//     // - Get the scroll position, which is .scrollTop()
//     // - Assign that to a variable

    

//     // - Check on scroll to see whether that variable has
//     // increased or decreased (probably by a set number)
//     // - If the number has increased, user is theoretically
//     // scrolling down (test this) so modify the top position
//     // of the nav such that it moves off the window
//     // (UNTIL it hits a certain point and then stop listening for downscrolls?)
//     // - If the number has decreased, user is theoretically
//     // scrolling up (test this) so modify the top position of the nav
//     // such that it moves back into the window UNTIL it hits 0?
//     // ??? At which point stop listening for upscrolls?

// };




// $(hideNav);