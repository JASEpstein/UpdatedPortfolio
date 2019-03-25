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

$('.card-link').click(function () {
    var link = $(this).data('url')
    window.open(link);
});

$('.special.cards .image').dimmer({
    on: 'hover'
});


// $(document).on('ready', function () {
// });