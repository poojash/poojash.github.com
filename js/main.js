(function(){
	var form = $('form');
	
	skrollr.init({
		forceHeight:false
	});

	form.validate();
	form.submit(function(e) {
	if(form.valid()){
		$.post('php/form.php',$(this).serialize(),function(data){
			console.log(data);
				if(data){
					console.log("in");
					$('form').slideUp();
					$('.thanks').css('display','block');
					}
					else{
					$('div.formerr').css('display','block');		
					}
			
			});
	} 
		e.preventDefault();
    });
	
	
	
	

		
})();
    
