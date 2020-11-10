$('.services-wrapper__content').mouseenter(function () {
    $(this).parent().toggleClass('active')
    $(this).find('.hover').slideToggle(300)
})

$('.services-wrapper__item').mouseleave(function(){
    $(this).removeClass('active')
    $(this).find('.hover').slideUp(300)
})
