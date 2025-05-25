(function($){
	$(document).ready(function(){ 
		
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
			if($(this).scrollTop() > $('.header-center').height()){
				$('.header').addClass('scroll');
			} else {
				$('.header').removeClass('scroll');
			}
		});

	});
})(jQuery);