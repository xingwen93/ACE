$(function(){

var $win=$(window),
	$three=$('.three-class'),
	$col=$('.Columns'),
	$step=$('#step img'),
	$head=$('.teachers-photo'),
	$heads=$head.find('li'),
	$left=$('.communicate-left'),
	$right=$('.communicate-right');
$win.scroll(function(event) {
	if($win.scrollTop()+$win.innerHeight()>$three.offset().top){
		setTimeout(function(){
			$col.eq(0).animate({opacity:1,bottom:0}, 500)
		},200)
		setTimeout(function(){
			$col.eq(1).animate({opacity:1,bottom:0}, 500)
		},500)
		setTimeout(function(){
			$col.eq(2).animate({opacity:1,bottom:0}, 500)
		},800)
	}
	if($win.scrollTop()+$win.innerHeight()>$step.offset().top){
		setTimeout(function(){
			$step.animate({opacity:1,left:0}, 500)
		},300)
	}
	if($win.scrollTop()+$win.innerHeight()>$head.offset().top){
		setTimeout(function(){
			$heads.eq(0).animate({opacity:1,left:0}, 500)
		},200)
		setTimeout(function(){
			$heads.eq(1).animate({opacity:1,left:0}, 500)
		},400)
		setTimeout(function(){
			$heads.eq(2).animate({opacity:1,left:0}, 500)
		},600)
		setTimeout(function(){
			$heads.eq(3).animate({opacity:1,left:0}, 500)
		},800)
		setTimeout(function(){
			$heads.eq(4).animate({opacity:1,left:0}, 500)
		},1000)
	}
	if($win.scrollTop()+$win.innerHeight()>$left.offset().top){
		setTimeout(function(){
			$left.animate({opacity:1,left:0}, 500)
		},300)
	}
	if($win.scrollTop()+$win.innerHeight()>$right.offset().top){
		setTimeout(function(){
			$right.animate({opacity:1,right:0}, 500)
		},300)
	}
});
	
	$('.Columns-a').hover(function(){
		//$(this).find('h3').stop().animate({bottom:0},400);
		$(this).find('img').addClass('hover');
	},function(){
		//$(this).find('h3').stop().animate({bottom:-50},400);
		$(this).find('img').removeClass('hover');
	})
	$('.teachers-photo img').hover(function(){
		$(this).parents('li').find('.teacher-info').stop().animate({
			top:'110%',
			opacity:1
		},400)
	},function(){
		$(this).parents('li').find('.teacher-info').stop().animate({
			top:'120%',
			opacity:0
		},400)
	})










})