$(function(){
	// Ranks for Skills in Section 2
	var skills = [
		10, 10, 9, 8, 8, 6, 6, 4, 4, 10
	]

	// Set Skill's Rank
	$('.rank').each(function(i){
		$(this).html(convertToBullets(skills[i]));
	});

	// Handle Arrow Clicks
	var section = 1;
	$('.down').click(downFn);
	$('.up').click(upFn);

	// Handle Scroll Event
	var move = true;
	$(window).on('mousewheel', function(e){
		if (move) {
			if(e.originalEvent.deltaY > 0) {
				downFn();
			} else if (e.originalEvent.deltaY < 0) {
				upFn();
			}
			move = false;
			$.data(this, 'timer', setTimeout(function() {
					move = true;
			}, 300));
		}
	});

	// Handle Mobile Swipe (Work in Progress)
	// $(window).on('touchstart', function(e) {
	// 	e.preventDefault()
  // 	var swipe = e.originalEvent.touches;
  // 	var start = swipe[0].pageY;
  //   $(this).on('touchmove', function(e) {
	// 			e.preventDefault()
  //       var contact = e.originalEvent.touches,
  //       end = contact[0].pageY,
  //       distance = end-start;
  //       if (distance < -30 && move) {
	// 				upFn();
	// 			}
  //       if (distance > 30 && move) {
	// 				downFn();
	// 			}
	// 			$.data(this, 'timer', setTimeout(function() {
	// 					move = true;
	// 			}, 300));
  //   }).on('touchend', function(e) {
  //       // $(this).off('touchmove touchend');
  //   });
	// });

	// Show/Hide Arrows
	function arrows() {
		if(section === 1) {
			$('.up').hide();
			$('.down').show();
		} else if (section === 6) {
			$('.down').hide();
			$('.up').show();
		} else {
			$('.up').show();
			$('.down').show();
		}
		// colors
		if(section === 5) {
			$('.up, .down').css({'color' : '#ccc'})
		}
		else {
			$('.up, .down').css({'color' : 'white'})
		}
	}

	// Page When Scroll Down
	function downFn() {
		if(section === 6) return;
		if(section < 7) section += 1;
		$('.section'+section).css({'transform': 'translate(0,0)'})
		arrows();
	}

	// Page When Scroll Up
	function upFn() {
		if(section === 1) return;
		$('.section'+section).css({'transform': 'translate(0,+100vh)'})
		if(section > 1) section -= 1;
		arrows();
	}

	// Convert Numbers to Styled Bullet List
	function convertToBullets(x) {
		strFull = '';
		strDull = '';
		for (var i = 0; i < x; i++) {
			strFull += '&bull; ';
		}
		for (var i = 0; i < (10-x); i++) {
			strDull += '&bull; ';
		}
		return '<span class="full">' + strFull + '</span> <span class="dull">' + strDull +'</span>';
	}
})
