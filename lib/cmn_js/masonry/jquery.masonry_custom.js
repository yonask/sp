$(function(){

		var $w = $(window),
			$d = $(document),
			$b = $(document.body),
			$items = $('.mosaic-block'),
			$main = $('#main'),
			$loader = $('<img src="images/loader.png" width="32" height="32" style="position: absolute; top: 50%; left: 50%; margin: -16px -16px">'),
			isIE6 = typeof document.documentElement.style.maxHeight === 'undefined';

		if (isIE6) {
			$.fx.off = true;
		}

		if (!isIE6) {
			$('.mosaic-block').masonry({
				itemSelector: '.mosaic-block',
				columnWidth: 243,
				isAnimated: true,
				animationOptions: {
					queue: false
				}
			});
		}

		

		if (!isIE6) {
		

			$loader.appendTo($b);

			// イントロ
			$w.load(function () {
				setTimeout(function () {
					$loader.fadeOut(function () {
						$(this).remove();
					});
					$main.css({visibility: 'visible'}).children().each(function () {
						$(this).hide().css({
							top: '+=40',
							opacity: 0
						}).show().delay(50 * $(this).index()).animate({
							top: '-=40',
							opacity: 0.2
						}, {
							duration: 300
						}).animate({
							opacity: 1
						}, {
							duration: 300
						});
					});
				}, 800);
			});
		} else {
			$main.css({visibility: 'visible'});
		}
	});