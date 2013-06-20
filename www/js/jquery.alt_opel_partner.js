(function( $ ){	
	var methods = {
		init : function( options ) {
 			return this.each(function(){
				
				var $this = $(this);
				var data = $this.data('alt_opel_partner');
			
				if ( !data ) {
					var settings = {
					}
					if ( options ) { 
						$.extend( settings, options );
					}
					
					data = {
						settings 		: settings,
						show			: null,
						hide			: null
					};
					$this.data('alt_opel_partner', data);					
					
					var bullet = $this.find(".partner-header-bullet");
					var body = $this.find(".partner-body");
					
					function show () {
						$(".partner-block").each(function () {
							$(this).data("alt_opel_partner").hide();
						});
						$this.removeClass("collapsed").addClass("expanded");
						body.slideDown();						
					}
					data.show = show;
					
					function hide () {
						$this.removeClass("expanded").addClass("collapsed");
						body.slideUp();						
					}
					data.hide = hide;
					
					bullet.click(function (e) {
						if ($this.hasClass("collapsed")) {
							show();
						} else {
							hide();
						}
						
						if (e && e.preventDefault) {
							e.preventDefault();
						}
						return false;
					});
				}
			});
		}
	};
 
	$.fn.alt_opel_partner = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.alt_opel_partner' );
		}    
	};
 })( jQuery );
 
 $(document).ready(function() {
	$(".partner-block").alt_opel_partner();
 });