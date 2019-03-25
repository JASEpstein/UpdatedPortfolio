// Semantic Inits
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

$('.hero-welcome2')
    .transition({
        animation: 'scale in',
        duration: '2s'
    });

$('.logo-headshot')
    .transition({
        animation: 'scale in',
        duration: '2s'
    });

$('.special.cards .image').dimmer({
    on: 'hover'
});

// Page Functions

$('.card-link').click(function () {
    var link = $(this).data('url')
    window.open(link);
});



// $(document).on('ready', function () {
// });