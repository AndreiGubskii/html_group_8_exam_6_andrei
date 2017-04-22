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