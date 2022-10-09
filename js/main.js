// $("html,body").css("overflow", "hidden");
$(document).ready(function() {

    $(function scrollBlock() {
        $('#link-one', '#link-two', '#link-three', '#link-four', '#link-five').click(function(e) {
            e.preventDefault();
        });
        $('#link-one').click(function() {
            $('html, body').animate({
                scrollTop: $('#block-one').offset().top
            }, 500);
        });
        $('#link-two').click(function() {
            $('html, body').animate({
                scrollTop: $('#block-two').offset().top
            }, 500);
        });
        $('#link-three').click(function() {
            $('html, body').animate({
                scrollTop: $('#block-three').offset().top
            }, 500);
        });
        $('#link-four').click(function() {
            $('html, body').animate({
                scrollTop: $('#block-four').offset().top
            }, 500);
        });
        $('#link-five').click(function() {
            $('html, body').animate({
                scrollTop: $('#block-five').offset().top
            }, 500);
        });
    });
    $(function showModalWindow() {
        $('dialog').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
    });

    $(function closeEl() {
        $('.close-button').click(function() {
            $('dialog').css({
                'opacity': '0',
                'visibility': 'hidden'
            });
        });
        $('.dialog-font').click(function() {
            $('dialog').css({
                'opacity': '0',
                'visibility': 'hidden'
            });
        });

    });

    $(function openModelWindow() {
        $('.info').click(function() {
            $('dialog').css({
                'opacity': '1',
                'visibility': 'visible'
            });
        });
    });

});