$('.services-wrapper__content').mouseenter(function () {
    $(this).parent().toggleClass('active')
    $(this).find('.hover').slideToggle(300)
})

$('.services-wrapper__item').mouseleave(function () {
    $(this).removeClass('active')
    $(this).find('.hover').slideUp(300)
})

$('.btn-send').on('click', function (e) {
    e.preventDefault()
    if ($('.check-box').prop('checked') === false) {
        let elem = $('.post')
        elem.css('background', 'red')
        elem.text('Вы должны принять соглашение!')
        elem.slideToggle()
        setTimeout(() => {
            elem.slideToggle()
        }, 2300);
    } else if ($("input[name='name']").val().length < 1) {
        let elem = $('.post')
        elem.css('background', 'red')
        elem.text('Заполните все поля')
        elem.slideToggle()
        setTimeout(() => {
            elem.slideToggle()
        }, 2300);
    } else if ($("input[name='phone']").val().length < 7) {
        let elem = $('.post')
        elem.css('background', 'red')
        elem.text('Неверный номер телефона')
        elem.slideToggle()
        setTimeout(() => {
            elem.slideToggle()
        }, 2300);
    } else {
        $.post("/send.php", function (data) {
            let elem = $('.post')
            elem.css('background', '#4caf50')
            elem.text(data)
            elem.slideToggle()
            setTimeout(() => {
                elem.slideToggle()
            }, 2300);
        });
    }
})


