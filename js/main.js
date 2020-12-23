
$(document).ready(function () {

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 5000,
        from: 1000,
        to: 2000,
        grid: false
    });

    $(function () {

        $('input, select, label').styler();

    });


    $('.servise__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.servise__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.servise__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.slick-slid').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });


});