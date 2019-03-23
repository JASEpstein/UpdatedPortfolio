$('.ui.sticky')
    .sticky({
        context: '#example1'
    });

$('.ui.dropdown')
    .dropdown();

$('.hero-welcome')
    .transition({
        animation: 'scale in',
        duration: '2s'
    });

$('.hero-welcome2').delay(900)
    .transition({
        animation: 'scale in',
        duration: '2s',
        delay: 9000
    });

$(document).ready(function () {
    $('.portfolio-carousel').slick({

    });
});

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.special.cards .image').dimmer({
    on: 'hover'
});


// $(document).on('ready', function () {
// });