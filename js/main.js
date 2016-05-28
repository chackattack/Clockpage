//Make a working clock! Use onload instead of onclick!
function startTime() {
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

	//Change military Time to standard 12 hour time
	if (h > 12) {
		h -= 12;
	} else if (h === 0) {
		h = 12;
	}

	//add a zero in front of the single digits
	function checkTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	h = checkTime(h)
	m = checkTime(m);
	s = checkTime(s);

	//Display the clock on the screen
	document.getElementById('time').innerHTML = h + ":" + m + ":" + s;

	//keep the clock ticking
	setTimeout (function () {
		startTime()
	}, 1000);

}

var clockStart = document.getElementById('time');
clockStart.onload = startTime;