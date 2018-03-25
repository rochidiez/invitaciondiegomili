$(document).ready(function() { 
    // Append .background-image-holder <img>'s as CSS backgrounds

    $('.background-image-holder').each(function() {
        var imgSrc = $(this).children('img').attr('src');
        $(this).css('background', 'url("' + imgSrc + '")');
        $(this).children('img').hide();
        $(this).css('background-position', 'initial');
    });

    // Fade in background images

    setTimeout(function() {
        $('.background-image-holder').each(function() {
            $(this).addClass('fadeIn');
        });
    }, 200);
    
    // Countdown Timers

    if ($('.countdown').length) {
        $('.countdown').each(function() {
            var date = $(this).attr('data-date');
            $(this).countdown(date, function(event) {
                $(this).text(
                    event.strftime('Faltan %D días %H:%M:%S')
                );
            });
        });
    }
    
    // Disable parallax on mobile

    if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        $('section').removeClass('parallax');
    }

});
