$(document).ready(function() {
    $('.slider').slick({
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        dots: true,
        appendDots: '.slick_dots',
        fade: true,
        autoplay: true
    })
    $('.slider').on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));
})


// var words = ['Manage All Your Social Network in One Click'],
//     part,
//     i = 0,
//     offset = 0,
//     len = words.length,
//     forwards = true,
//     skip_count = 0,
//     skip_delay = 25,
//     speed = 120;
// var wordflick = function() {
//     setInterval(function() {
//         if (forwards) {
//             if (offset >= words[i].length) {
//                 ++skip_count;
//                 if (skip_count == skip_delay) {
//                     forwards = false;
//                     skip_count = 0;
//                 }
//             }
//         } else {
//             if (offset == 0) {
//                 forwards = true;
//                 i++;
//                 offset = 0;
//                 if (i >= len) {
//                     i = 0;
//                 }
//             }
//         }
//         part = words[i].substr(0, offset);
//         if (skip_count == 0) {
//             if (forwards) {
//                 offset++;
//             } else {
//                 offset--;
//             }
//         }
//         $('.word').text(part);
//     }, speed);
// };

// $(document).ready(function() {
//     wordflick();
// });