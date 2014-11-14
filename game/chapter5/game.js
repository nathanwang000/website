var width = $(window).width(),
height  = $(window).height(),
countdown = 20, countup = 0;

var nextElement = function() {
    if (countdown == 0) {
	gameOver();
	return;
    }
    var x = Math.random()*(width-50),
    y = Math.random()*(height - 50);
    
    $("<div></div>").css(
	{
	    position: 'absolute',
	    left: x, top: y,
	    width: 50, height: 50,
	    backgroundColor: 'red'
	}
    ).appendTo("#container");
    
    countdown--;
}

var gameOver = function() {
    // Stop additional nextElement calls from firing
    clearInterval(timer);
    if (countup > 15) {
	alert("You won!");
    } else {
	alert("You lost!");
    }
}

var timer = setInterval(nextElement,500);
$("#container").on("mousedown", "div", function(e) {
    if (!this._set) {
	console.log(++countup);
	$(this).fadeOut(function(){});
    }
    this._set = true;
});