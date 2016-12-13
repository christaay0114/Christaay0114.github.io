$(document). ready(function() {
	//apend new element
	for (i = 0; i < 100; i++) { // increased # of boxes from '< 100' to '< 1000' 
		$("body").append( "<div class='element' style= 'background-color: hsl (" + i * 3.6 + ", 100%, 50%);'></div>"// hue(0-360), saturation, lightness ></div>"
			);
			console.log("element " + i + "added");// used to see the loop executed in 'console' 
	}
 
	// *when you open with single quoatation mark you need to close it*
	// 'append' makes an edit to html w/o editing html
	//'append' used to make a continuous loop of elements instead of copy/paste 

	//mouse interaction
	$('.element').mouseover(function(){
		$(this).css('background-color','white');
	});
	 $('.element').mouseout(function(){
		$(this).css('background-color','ffb6c1');
	});
});