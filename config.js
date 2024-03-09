let check = 0;
let loiGiai = "Chỗ này là lời giải";

function solution() {
	if (!check) {
		document.getElementById("result").innerHTML = loiGiai;
		document.getElementById("solution").innerHTML = "Ẩn lời giải";
		check = 1;
	} else {
		document.getElementById("solution").innerHTML = "Hiện lời giải";
		document.getElementById("result").innerHTML = "";
		check = 0;
	}
}
