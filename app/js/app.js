(function($){
	$(document).ready(function(){ 

		let windowWidth;
		
		$('.header-tags__button').on('click', function(e){
			
			let tagsButtonDataAttr = $(this).attr('data-attr');

			$('.header-tags-menu').filter(function(index,element){
				if($(element).attr('data-attr') !== tagsButtonDataAttr){
					$(element).removeClass('active');
					return false;
				} else {
					$(element).toggleClass('active');
				}
			});
		});

		//------

		$('.tags-menu-first__element').on('click', function(e){
			
			let firstElement__dataAttr = $(this).attr('data-attr');
			let secondElement = $('.tags-menu-second__element');

			secondElement.removeClass('active');

			secondElement.each(function(index, element){
				
				if($(element).attr('data-attr') === firstElement__dataAttr) {
					$(element).addClass('active');
				}
			});
		}); // first element

		$('.tags-menu-second__element[data-attr="1"]').addClass('active');

		//------

		$(window).on('scroll', function(e){

			if(window.innerWidth < 768) return false;

			if($(this).scrollTop() > $('.header-center').height()){
				console.log( window.innerWidth);
				$('.header').addClass('scroll');
			} else {
				$('.header').removeClass('scroll');
			}
		});

		//-----


	// контейнеры

		let headerTopContainer 			= $('.header-top .container');
		
		let headerCenterFirst 			= $('.header-center-first');
		let headerCenterSecond 			= $('.header-center-second');
		let headerCenterSecondTop 		= $('.header-center-second-top');
		let headerCenterSecondBottom 	= $('.header-center-second-bottom');
		let headerCenterThird 			= $('.header-center-third');
		let headerCenterFourth 			= $('.header-center-fourth');

		let userButtons					= $('.user-buttons');

		let headerCenterMobileTop 		= $('.header-center-mobile-top');
		let mobileTopLeft 				= $('.mobile-top-left');
		let mobileTopCenter 			= $('.mobile-top-center');
		let mobileTopRight 				= $('.mobile-top-right');
		let headerCenterMobileCenter 	= $('.header-center-mobile-center');
		let headerCenterMobileBottom 	= $('.header-center-mobile-bottom');
		let mobileBottomFirst			= $('.mobile-bottom-first');
		let mobileBottomFirstLeft		= $('.mobile-bottom-first-left');
		let mobileBottomFirstRight		= $('.mobile-bottom-first-right');
		let mobileBottomSecond			= $('.mobile-bottom-second');
		let mobileBottomThird			= $('.mobile-bottom-third');
		let mobileBottomFourth			= $('.mobile-bottom-fourth');

	// элементы

		let location 		= $('.location');
		let worktime 		= $('.worktime');
		let headerTopMenu 	= $('.header-top-menu');

		let headerLogo 		= $('.header-logo');
		let	burger			= $('.burger');
		let search			= $('.search');
		let headerSocials 	= $('.header-socials');

		let headerTags 		= $('.header-tags');
		let headerTagsMenus = $('.header-tags-menus');

		let changeLanguage 	= $('.change-language');

		let buttonLike		= $('.button-like');
		let buttonProfile	= $('.button-profile');
		let buttonBasket	= $('.button-basket');
		let configureComp	= $('.configure-computer');

		$(window).on('load resize', function(){

			windowWidth = window.innerWidth;

			if(windowWidth < 768){
				
				headerTopContainer.prepend(changeLanguage);

				mobileTopLeft.append(burger, buttonProfile);
				mobileTopCenter.append(headerLogo);
				mobileTopRight.append(buttonLike, buttonBasket);

				headerCenterMobileCenter.append(search);

				mobileBottomFirstLeft.append(location, worktime);
				mobileBottomFirstRight.append(headerSocials);

				mobileBottomSecond.append(headerTags);

				mobileBottomThird.append(configureComp);

				mobileBottomFourth.append(headerTopMenu);

			} else {
				
				changeLanguage.prependTo(headerCenterThird);
			}

		});



	});
})(jQuery);