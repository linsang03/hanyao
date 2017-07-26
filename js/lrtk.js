$(function(){
	$(".indexBanner").each(function(){
		var timer;
		$(".indexBanner .mask img").mouseover(function(){
			var index = $(".indexBanner .mask img").index($(this));	
			changeImg(index);
		}).eq(0).mouseover();
		$(this).find(".mask").animate({
			"bottom":"0"	
		},700);
		$(".indexBanner").hover(function(){
			clearInterval(timer);	
		},function(){
			timer = setInterval(function(){
				var show = $(".indexBanner .mask img.show").index();
				if (show >= $(".indexBanner .mask img").length-1)
					show = 0;
				else
					show ++;
				changeImg(show);
			},3000);
		});
		function changeImg (index)
		{
			$(".indexBanner .mask img").removeClass("show").eq(index).addClass("show");
			$(".indexBanner .bigImg").parents("a").attr("href",$(".indexBanner .mask img").eq(index).attr("link"));
			$(".indexBanner .bigImg").hide().attr("src",$(".indexBanner .mask img").eq(index).attr("uri")).fadeIn("slow");
		}
		timer = setInterval(function(){
			var show = $(".indexBanner .mask img.show").index();
			if (show >= $(".indexBanner .mask img").length-1)
				show = 0;
			else
				show ++;
			changeImg(show);
		},3000);
	});
});