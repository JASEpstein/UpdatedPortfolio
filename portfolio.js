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

// Connect Hover actions

$(document).on('hover', '.connect-item-twitter', function () {
    console.log('hover');
    $('#connect-btn').css('background', '#1DA1F2');
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