
$.bunnyPopup = function(options,data) {
	defaultOptions = {
			"width": "45%",
			"min-height" : "10%",
			"border": "5px solid rgba(187, 179, 162, 0.12)",
			"border-radius": "2px",
			"padding": "40px",
			"margin": "20px auto",
			"z-index": '1024',
			"background": "rgba(187, 179, 162, 1)",
			"box-shadow" : "0 5px 15px rgba(0,0,0,.5)",
			"display": "block",
			"padding-top": "0px",
			"maxHeight": (($( window ).height() / 2)+200),
			"overflow" : "auto",
	},	
	setOptions = function(){
		if (typeof options != 'undefined') {
	 		for (var option in options) {
	 				var width = option == "width" ? options["width"] : defaultOptions.width;
	 				defaultOptions.width = width;
	 				var maxHeight = option = "man-height" ? options["max-height"] : defaultOptions.maxHeight;
	 				defaultOptions.maxHeight = maxHeight;
	 	
	 		}
		}
	},
	setDom = function(element){
		bnyQuestionDiv = "<div><h3 class='bny-question-header'></h3></div>";
		bnyAnswerDiv = "<div><p class='bny-answer-header'></p></div>";
		element.empty();
		closeButton = "<span class='bny-close'>x</span>";
		element.append(closeButton);
		element.append(bnyQuestionDiv);
		element.append(bnyAnswerDiv);
	},
	setData = function(element){
		if (typeof data != 'undefined') {
			element.find('h3.bny-question-header').append(data['key']);
			element.find('p.bny-answer-header').append(data['value']);
		}
	},
	closePopup = function(element){
		$(document).on("click", ".bny-close", function(e) {
			$(this).parent().fadeOut(100, function() {
				$(element)
					.empty()
				    .removeAttr("style")
				$('body').append($(element));
				$('.bny-overlay').remove();
				$('body').css('display','block');
			});
		});

		$(document).keyup(function(e) {

			if (e.keyCode == 27) {
				$(this).parent().fadeOut(100, function() {
					$(element)
						.empty()
					    .removeAttr("style")
					$('body').append($(element));
					$('.bny-overlay').remove();
					$('body').css('display','block');
				});
			}   // esc
		});
	},
	init = function() {
		bnyOverlay = '<div class="bny-overlay"></div>';
		element = $("<div class='terms'>");
		setOptions();
		$('body')
			.append( bnyOverlay )
			.find('div.bny-overlay')
			.append($(element).css( defaultOptions ))
			.fadeIn(100);
		setDom(element);
		setData(element);
		closePopup(element);
	},
	init();	
}


$(function() {
    var terms = JSON.parse($('#bunny').text());
	$.fn.xenova = function() {

		var xe_data = $("<div class='mascotwrapper'><div class='mascotcls oval-thought' style='background-color:rgb(230, 232, 234);position:fixed;right:80px;bottom:70px;text-decoration: underline;'></div><img src='images/bunny.png' style='width:100px;height:auto;position:fixed;right:0px;bottom:0px;'></div>");
			xe_theme = {
				display: "block",
				position:"fixed",
				right:"0px",
				bottom:"0px",
				overflow: "hidden",
				color: "#000",
				cursor: "pointer",
				height: "400px",
				width: "400px"
				
			},
		init = function() {
			$('body')
				.append( xe_data )
				.find('div.mascotwrapper')
				.css( xe_theme )
				.fadeIn('slow').delay(10000).hide(0);
		}
		init();
	}
	$(".bunny_terms").on('click', function() {
		$( "body" ).xenova();

		var cls= $(this).attr('class').split(' ')[1];

		var result ;
		var arr = [];
		$.each(terms, function( index, value ) {
  			arr.push(terms[index][cls]);
		});

		newArr = jQuery.grep(arr, function(n, i){
  			return (n !== "" && n != null);		
		});
		result = newArr[0]
		if(result != 'undefined'){
			$('.mascotcls').html(result.key);
			$('.mascotcls').on('click',function(){
				$.bunnyPopup({width: "60%","max-height": "600px"}, result);	
				$('.mascotwrapper').hide()
			})
		}
	});


})