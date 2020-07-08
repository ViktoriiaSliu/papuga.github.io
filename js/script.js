
var chet = 1;
	window.onload = function () { setTimeout(frout, 3000); }
		function frout() {
		chet++;
		if (chet>3) {chet=0;}
			switch(chet) {
			case 1:
				document.getElementById('img').src = "img/f90fc85cf18e351c565692dcb1c0feeb_w200.gif";
				break;
			case 2:
				document.getElementById('img').src = "img/sithparrot.gif";
				break;
			case 3:
				document.getElementById('img').src = "img/source.gif";
				break;
			}
	setTimeout(frout, 3000);
}
