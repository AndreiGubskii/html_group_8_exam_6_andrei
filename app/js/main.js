var btn_menu = $(".menu-btn"),
menu = $(".menu");


btn_menu.click(function () {
	if (menu.is(":hidden")) {
		menu.show();
	} else {
		menu.hide();		
	}
	return false;
});

$( window ).resize(function() {
	if(document.body.clientWidth > 480){
		menu.show();
	}else{
		menu.hide();
	}
});

$(".slider").slick({
	mobileFirst:true,
	arrows : false
});

// Плавная прокрутка по якорям
menu.on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 700 мс
    $('body,html').animate({scrollTop: top}, 700);
});