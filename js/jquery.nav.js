;(function($){
	var defaults = {
		ulClass: "ullogo",
		list:['Home','Contact']
		
	 };
	 
	$.fn.topNav = function(options){
		var nav = this;
		var opts = $.extend( {},defaults, options);
		 return this.each(function() {
			var ul = $("<ul/>",{
			id:"logo",
			"class":defaults.ulClass,
			}).appendTo(nav);
			
			var x, y, list=defaults.list;
			y=list.length;
			
			for(x=0;x<y;x++){
				var li = $("<li/>",{
					id:list[x],
				}).appendTo(ul);
				
				$("<a/>",{
					text:list[x],"class":"mainList"
					}).attr("href",defaults.list[x]).appendTo(li);
				} 
			
			
		});
		
			
	};//end of top nav function
	

	})(jQuery);