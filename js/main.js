// $("html,body").css("overflow", "hidden");
$(document).ready(function() {
    $(function scrollBlock() {
        $('#link-one', '#link-two', '#link-three', '#link-four').click(function(e) {
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
    });
});