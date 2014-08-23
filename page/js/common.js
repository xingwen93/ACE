$(function(){
//搜索框
	$('#header-search input').focus(function(){
		$(this.form).addClass('active');
	}).blur(function(){
		$(this.form).removeClass('active');
	})
	$('#header-search').keydown(function(event) {
		if(event.keyCode==13){
			this.submit();
		}
	});
	$('.search-drop').click(function(event){
		$('.search-drop-item').show();
		event.stopPropagation();
	});
	$(document).click(function(event) {
		$('.search-drop-item').hide();
	});
	$('.search-drop-item li').click(function(event) {
		var str='';
		str=this.innerHTML.substring(1);
		str+='：';
		$('#header-search input').focus().val(str);
	});
//导航初始化
	var nwidth=0;
	var nleft=0;
	var $nslider=$('#nav-slider');
	var $na=$('#nav li a');
	$na.each(function(index,el){
		if($(el).hasClass('select')){
			nwidth=$(el).innerWidth();
			nleft=$(el).get(0).offsetParent.offsetLeft;
		}
	})
	$nslider.css({
		width:nwidth,
		left:nleft
	});
	//导航悬浮
	$na.hover(function(){
		
		$nslider.stop().animate({
				width:$(this).innerWidth(),
				left:$(this).get(0).offsetParent.offsetLeft
		},200)
	},function(){
		$nslider.stop().animate({
			width:nwidth,
			left:nleft
		},200)
	})
//登录框
	$('.base-login-button').click(function(){
		$('#login').modal('show')
	})

//注册框

$('.base-register-button').click(function(){
		$('#register').modal('show')
	})
$('#register :input').tooltip({}).focus(function(){
	$(this).tooltip('show');
	
})
//返回顶部
var $backtop=$('#backtotop');
$(window).scroll(function(){
	if($(window).scrollTop()>0){
		$backtop.css('display','block');
	}else{
		$backtop.css('display','none');
	}
})
$backtop.click(function(){
	$('body,html').animate({
		scrollTop:0
	},400);
})
//留言框
$('#comment-btn').click(function(event) {
	$(this).hide();
	$('#comment-box').fadeIn(200);
});
$('#comment-box-close').click(function(event) {
	$('#comment-box').fadeOut(200,function(){
		$('#comment-btn').show();
	});
});



})
