$(function(){
	$('#baoming').click(function(event) {
		$('#apply').modal('show')
	});
	$('#class h2').each(function(ind,el){
		if($(el).attr('flag')==1){
			$(el).next().show();
			$(el).find('em').addClass('drop');
		}
	})
	$('.class-drop a').each(function(ind,el){
		if($(el).attr('flag')==1){
			$(el).next().show();
			$(el).find('em').addClass('drop');
		}
	})
	$('.class-drop a').click(function(event) {
		if($(this).attr('flag')==0){
			$(this).next().stop().slideDown(400);
			$(this).find('em').addClass('drop');
			$(this).attr('flag',1)
		}else{
			$(this).next().stop().slideUp(400);
			$(this).find('em').removeClass('drop');
			$(this).attr('flag',0)
		}
	});

	$('#class h2').click(function(event) {
		if($(this).attr('flag')==0){
			$(this).next().stop().slideDown(400);
			$(this).find('em').addClass('drop');
			$(this).attr('flag',1)
		}else{
			$(this).next().stop().slideUp(400);
			$(this).find('em').removeClass('drop');
			$(this).attr('flag',0)
		}
	});

		







})