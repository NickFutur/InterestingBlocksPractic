// $("html,body").css("overflow", "hidden");
$(document).ready(function() {

    $(function scrollBlock() {
        $('#link-one', '#link-two', '#link-three', '#link-four', '#link-five', '#link-six').click(function(e) {
            e.preventDefault();
        });
        $('#link-one').click(function() {
            $('html, body').animate({
                scrollTop: $('#block-one').offset().top
            }, 1000);
        });
        $('#link-two').click(function() {
            $('html, body').animate({
                scrollTop: $('#block-two').offset().top
            }, 1000);
        });
        $('#link-three').click(function() {
            $('html, body').animate({
                scrollTop: $('#block-three').offset().top
            }, 1000);
        });
        $('#link-four').click(function() {
            $('html, body').animate({
                scrollTop: $('#block-four').offset().top
            }, 1000);
        });
        $('#link-five').click(function() {
            $('html, body').animate({
                scrollTop: $('#block-five').offset().top
            }, 1000);
        });
        $('#link-six').click(function() {
            $('html, body').animate({
                scrollTop: $('.block-six').offset().top
            }, 1000);
        });
        $('#link-seven').click(function() {
            $('html, body').animate({
                scrollTop: $('.block-seven').offset().top
            }, 1000);
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
            $(enableScroll);
        });
        $('.dialog-font').click(function() {
            $('dialog').css({
                'opacity': '0',
                'visibility': 'hidden'
            });
            $(enableScroll);
        });


    });

    $(function openModelWindow() {
        $('.info').click(function() {
            $('dialog').css({
                'opacity': '1',
                'visibility': 'visible'
            });
            $(disableScroll);
        });
    });
    // код на jQuery с ошбками блокировка скролла, не работает
    // $(function disableScroll() {
    //     var pagePosition = window.scrollY;
    //     $('body').addClass('.disable-scroll');
    //     $('body').dataset.position = pagePosition;
    //     $('body').css({
    //         'top': -pagePosition + "px",
    //     });
    // });

    // $(function enableScroll() {
    //     pagePosition = parseInt($('body').dataset.position, 10);
    //     $('body').css({
    //         'top': 'auto',
    //     }).
    //     $('body').removeClass('.disable-scroll');
    // });
    // window.scroll({ top: pagePosition, left: 0 });
    // $('body').removeAttr('data-position');
});




// код на js блокировка скролла
const body = document.body;

let disableScroll = function() {
    let pagePosition = window.scrollY;
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
}

let enableScroll = function() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute('data-position');
}