// Приховання прелоадеру

$(window).on('load', function () {
    var preloader = $('#loader');
    preloader.delay(500).fadeOut('slow');
});

// Ініціалізація Vue

var vm = new Vue({
  el: '#app',
  data: {
      links: [
          {
              name: 'Головна',
              href: '#home'
          },
          {
              name: 'Орендодавцям',
              href: '#landlords'
          },
          {
              name: 'Орендарям',
              href: '#tenants'
          },
          {
              name: 'Про нас',
              href: '#about'
          },
          {
              name: 'Контакти',
              href: '#contacts'
          }
      ],
      slides: [
          {
              price: `600$`,
              title: `Затишна 3 кімнатна
                      квартира у центрі`,
              image: 'url(/img/apartment-chair-comfort-276700.jpg)'
          },
          {
              price: `320$`,
              title: `Чудова 2 кімнатна
                      квартира у спальному
                      районі Львова`,
              image: 'url(/img/appliances-architecture-ceiling-534151.jpg)'
          },
          {
              price: `300$`,
              title: `Затишна 4 кімнатна
                      квартира у центрі`,
              image: 'url(/img/architecture-contemporary-couch-279607.jpg)'
          },
          {
              price: `200$`,
              title: `Затишна 1 кімнатна
                      квартира на Левандівці`,
              image: 'url(img/apartment-ceiling-chairs-280232.jpg)'
          },
          {
              price: `300$`,
              title: `Комфортна 2 кімнатна
                      квартира на Привокзальній`,
              image: 'url(/img/appliances-architecture-ceiling-534151.jpg'
          },
          {
              price: `150$`,
              title: `Комфортна 1 кімнатна
                      квартира на Хуторівці`,
              image: 'url(/img/appliances-architecture-ceiling-534151.jpg'
          }
      ],
      showSidebar: false,
      showNavMenu: false
  }
});

// Ініціалізація слайдеру

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  loop: true,
  pagination: {
    el: '.pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  }
});

// Ініціалізація WOW.js

new WOW().init();

/*$(function() {

	// jQuery-варіант бокової форми

	$('.stick-title').click(function() {
		$('.stick-form').toggleClass('slide');
		$('.stick-form__close').toggleClass('rotate');
	});
	$('.stick-form__close').click(function() {
		$('.stick-form').toggleClass('slide');
		$(this).toggleClass('rotate');
	});

	// jQuery-варіант мобільного меню
	$('.header-burger').click(function () {
		$('.header-wrapper').fadeIn();
		$('.header-close').toggleClass('rotate');
	});
	$('.header-close').click(function () {
		$('.header-wrapper').fadeOut();
		$('.header-close').toggleClass('rotate');
	});
});*/
