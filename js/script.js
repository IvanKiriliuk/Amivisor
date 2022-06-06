
/*===========================Бургер меню=========================================*/

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu,.data__mail').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

/*=============Бургер при нажатии меняет цвет============================*/

$('.header__burger').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('burger__active');
});

/*===================Слайдер=====================================================*/

$(document).ready(function () {
	$('.examples__slider').slick({
		arrows: true,
		dots: true,
	});
});

/*=================маска для инпут============================*/
$(function () {
	//2. Получить элемент, к которому необходимо добавить маску
	$(".contact__input-3").mask("8(999) 999-9999");
});
/*==================Адаптация слайдера=============================================*/

/*
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
				}
			}
		]
	});
	
	*/

/*==========================================================================*/
