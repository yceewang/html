$(document).ready(function(){
	$(".subNav:gt(1)").addClass("closeSubNav");
	$(".navContent:gt(0)").hide();
$(".subNav:gt(0)").click(function(){
		$(this).toggleClass("closeSubNav").siblings(".subNav").addClass("closeSubNav");
		$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
	});
$(".faq").click(function(){
	 	$(this).addClass("currentItem");
      	$(".navContent li").removeClass("currentItem");
	});	
$(".navContent a").click(function(){
     	$(".navContent li, .faq").removeClass("currentItem");
     	$(this).parent().addClass("currentItem");
	});
});