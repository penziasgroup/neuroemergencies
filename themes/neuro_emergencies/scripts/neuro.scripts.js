(function ($) {
  Drupal.behaviors.generalScripts = {
    attach: function (context, settings) {
      if($('body').hasClass('page-faculty')) {
	$('.collapse-me-control').click(function(){
	   $(this).toggleClass('open').prev().slideToggle();
        });
      }	
    }
   };
})(jQuery);
