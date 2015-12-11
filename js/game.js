
var first = '';
var second = '';
var firstID = '';
var secondID = '';
var points = 0 ;
var values = [1,2,3,4,5,6,7,8];

$(document).keydown(function(e) { 
	switch(e.keyCode) {
		case 37:
			navigate('left');
		break;
		
		case 38:
			navigate('up');
		break;
		
		case 39:
			navigate('right');
		break;
		
		case 40:
			navigate('down');
		break;
		
		case 13:
			image_process();		
		break ;
	}	
});

function navigate(direction) {
	var check = $(".board-images").length ;
	if(check !== 0){
		h = $(".board-images").attr("x");
		k = $(".board-images").attr("y");
		x = parseInt(h, 10);
		y = parseInt(k, 10);
		if(direction == 'left') {
			if(x==0 && y==3) {
				x=3 ; y = 2;
			} else if(x==0 && y==2) {
				x=3 ; y = 1;
			} else if(x==0 && y==1) {
				x=3 ; y = 0;
			} else if(x==0 && y==0) {
				x='' ; y = '';
				$('.button').addClass('hover');
			} else {
				x-- ;
			}	
		}
		else if(direction == 'up') {
			if(x==3 && y==0) {
				x=2 ; y = 3;
			} else if(x==2 && y==0) {
				x=1 ; y = 3;
			} else if(x==1 && y==0) {
				x=0 ; y = 3;
			} else if(x==0 && y==0) {
				x=3 ; y = 3;
			} else {
				y-- ;
			}
		}
		else if(direction == 'right') {
			if(x==3 && y==0) {
				x=0 ; y = 1;
			} else if(x==3 && y==1) {
				x=0 ; y = 2;
			} else if(x==3 && y==2) {
				x=0 ; y = 3;
			} else if(x==3 && y==3) {
				x='' ; y = '';
				$('.button').addClass('hover');
			}  else {
				x++ ;
			}
		}
		else if(direction == 'down') {
			if(x==0 && y==3) {
				x=1 ; y = 0;
			} else if(x==1 && y==3) {
				x=2 ; y = 0;
			} else if(x==2 && y==3) {
				x=3 ; y = 0;
			} else if(x==3 && y==3) {
				x=0 ; y = 0;
			} else {
				y++ ;
			}
		}
		var x = x.toString();
		var y = y.toString();
		$('img[x="'+h+'"][y="'+k+'"]').removeClass('board-images');
		$('img[x="'+x+'"][y="'+y+'"]').addClass('board-images');
		
	}
	else {
		$('img[x="0"][y="0"]').addClass('board-images');
		$('.button').removeClass('hover');
	}
}	

function image_process() {
	if($("#refresh").hasClass("hover")) {
		window.location.reload();
	} 
	else if($(".board-images").hasClass("disabled")) {
		return false;
	}
	else {
		if($(".board-images").hasClass("board-images")) {	
			var id = $(".board-images").attr('id');
			$("#back_"+id).css('display','none');
			var val = $(".board-images").attr('val');
				if(first == '') {
					first = val ;
					firstID = id ;
					$('.board-images').addClass('selected');
				} else if(second == '') {
					if(!$(".board-images").hasClass("selected")) {
						second = val ;
						secondID = id ;
					}
				}
				if(first == second) {
					if(firstID != secondID) {
						$('img[val="'+first+'"]').addClass('disabled');
						first = '';
						second = '' ;
						points++ ;
						$(".game-points").html(points);
						$("#point").val(points);
						values.pop(first);
						if(values.length == 0) {
							$('#bpopup').bPopup();
						}
					}
				} else {
						if(second != '') {
							second = '' ;
							setTimeout(function(){
							   $("#back_"+id).show();
							}, 1000);
							points-- ;
							$(".game-points").html(points);
							$("#point").val(points);
					}
			}		
		}
	}	
}

$(function() { 
	  $( '.button' ).on( 'click', function() { 
			window.location.reload();
	  }); 
	  $("#submit").on( 'click', function() { 
		var name = $("#name").val();
		var email = $("#email").val();
		var point = $("#point").val();
		$.ajax({
			type: "POST",
			url: "./classes/functions.php",
			data: {'name':name, 'email':email, 'point':point,},
			cache: false,
			dataType: "json", 
			success: function(html)
			{
				var high = html['a'];
				var position = html['b'];
				$(".high").html(high);
				$(".position").html(position);				
				$('#thank').bPopup({
					autoClose: 10000 
				});
			}
		});
		
	  });
 }); 
 
 function game_board() {
	var board = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
	var board = shuffle(board);
	var e = '';
	var x=0 ; var y=0;
	for(var t=0; t<board.length; t++) {
		h = x ; k = y ;
		h = h.toString();
		k = k.toString();
		z=h+k;
		i = board[t];
		e +=  ('<div class="img" id="img'+i+'" style="position: relative; left: 0; top: 0;"><div id="'+z+'"><div class="front"><img src="images/'+i+'.gif" val="'+i+'" x="'+x+'" y="'+y+'" id="'+z+'" style="position: relative; top: 0; left: 0;" alt="No Image"/></div><div class="back"><img src="images/card_bg.gif" x="'+x+'" y="'+y+'" id="back_'+z+'" style="position: absolute; top: 0; left: 0;" alt="No Image"/></div></div></div>');	
		if(x<3) {
			x++ ;
		} 
		else {
			x = 0 ;
			y++ ;
		}		
	}
	return e ;
}

function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
