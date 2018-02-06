
$(document).ready(function(){
	'use strict';
	$('.lightbox').click(function(){
		$('.bg, .box').animate({'opacity':'.60'}, 300, 'linear');
		$('.box').animate({'opacity':'1.00'}, 300, 'linear');
			$('.bg, .box').css('display','block');
	});
	
	
	$('.close').click(function(){
		$('.bg, .box').animate({'opacity':'0'}, 300, 'linear', function(){
			$('.bg, .box').css('display','none');
		});
	});
	
	
	$('.bg').click(function(){
		$('.bg, .box').animate({'opacity':'0'}, 300, 'linear', function(){
			$('.bg, .box').css('display','none');
		});
	});
	
});