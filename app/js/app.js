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

	});
})(jQuery);