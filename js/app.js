	$(function() {
	  // Ranks for Skills in Section 2
	  var skills = [
	    10, 10, 10, 8, 8, 6, 6, 6, 4, 10
	  ]

	  // Set Skill's Rank
	  $('.rank').each(function(i) {
	    $(this).html(convertToBullets(skills[i]));
	  });

	  // Handle Arrow Clicks
	  var section = 1;
	  $('.down').click(downFn);
	  $('.up').click(upFn);

	  // Handle Scroll Event
		var move = true;
	  $(window).on('mousewheel', function foo(e) {
	    $this = $(this);
	    var mousemove = e.originalEvent.wheelDeltaY;
			console.log("move", move);
	    if (mousemove < 0 && move) {
        move = false;
				if (section === 6) return;
		    if (section < 7) section += 1;
		    $('.section' + section).css({
		      'transform': 'translate(0,0)'
		    })
		    arrows();

				console.log("move", move);
		    // $this.off('mousewheel');
	    } else if (mousemove > 0 && move) {
        move = false;
				upFn();

		    // $this.off('mousewheel');
	    }
	    $.data(this, 'timer', setTimeout(function() {
	    	move = true;
				console.log("inside data");
				// $this.on('mousewheel', foo);
	    }, 300));

	  });


	  // Handle Keyboard Arrow Key Press
	  $(window).keydown(function(e) {
	    switch (e.which) {
	      case 38: // up arrow
	        upFn();
	        break;
	      case 40: // down arrow
	        downFn();
	        break;
	    }
	  });

	  // Show/Hide Arrows
	  function arrows() {
	    if (section === 1) {
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
	    if (section === 5) {
	      $('.up, .down').css({
	        'color': '#ccc'
	      })
	    } else {
	      $('.up, .down').css({
	        'color': 'white'
	      })
	    }
	  }

	  // Page When Scroll Down
	  function downFn() {
	    if (section === 6) return;
	    if (section < 7) section += 1;
	    $('.section' + section).css({
	      'transform': 'translate(0,0)'
	    })
	    arrows();
	  }

	  // Page When Scroll Up
	  function upFn() {
	    if (section === 1) return;
	    $('.section' + section).css({
	      'transform': 'translate(0,+100vh)'
	    })
	    if (section > 1) section -= 1;
	    arrows();
	  }

	  // Convert Numbers to Styled Bullet List
	  function convertToBullets(x) {
	    strFull = '';
	    strDull = '';
	    for (var i = 0; i < x; i++) {
	      strFull += '&bull; ';
	    }
	    for (var i = 0; i < (10 - x); i++) {
	      strDull += '&bull; ';
	    }
	    return '<span class="full">' + strFull + '</span> <span class="dull">' + strDull + '</span>';
	  }
	})
