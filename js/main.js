$(document).ready(function () {
    $(".product-item").click(function(){
        $(this).addClass('active')
            .siblings()
            .removeClass('active')

        let value = $(this).attr('data-filter')
        // console.log(value);
        if (value == 'ice') {
            $('.ice').show(1000)
        } else {
            $('.ice').not('.' + value).hide(1000)
            $('.ice').filter('.' + value).show(1000)
        }
    })

    $('.burger').click(function() {
        $('.burger').toggleClass('active')
        $('.nav').toggleClass('active')
        $('body').toggleClass('hiden')
      } )
});