// Semantic Inits
$('.ui.sticky')
    .sticky({
        context: '.project-section'
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

//Link Listener
$('.card-link').click(function() {
    var link = $(this).data('url')
    window.open(link);
});

//Modal Listener
$('.gif-link').click(function() {
    $('.ui.modal')
    .modal('show');
})

//Day/Night Mode Behavior
$('.mode-switch').click(function () {
    if ($(this).data('mode') === 'night') {
        $(this).data('mode', 'day');
        $('body,html').css("background-image", "url(assets/images/brickwall.png)");
        $('.intro-words').css('color', '#000');
        $('#my-name').css('text-decoration-color', '#000');
        $('.mode-name').text('Night Mode');
        $('.inverted').addClass('daymode');
        $('.inverted').removeClass('inverted');
    } else if ($(this).data('mode') === 'day') {
        $(this).data('mode', 'night');
        $('body,html').css("background-image", "url(assets/images/dark-honeycomb.png)");
        $('.intro-words').css('color', '#FFF');
        $('#my-name').css('text-decoration-color', '#FFF');
        $('.mode-name').text('Day Mode');
        $('.daymode').addClass('inverted');
        $('.daymode').removeClass('daymode');
    }
});



// $(document).on('ready', function () {
// });