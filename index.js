function swap(divNum) {
	// document.getElementById("work-description").innerHTML = "Blah"
	if(divNum == 1) {
		alert("Hello this should be moz")
		document.getElementById("work-description").innerHTML = "Mozilla"
	} else if (divNum == 2) {
		document.getElementById("work-description").innerHTML = "Twitter"
	} else if (divNum == 3) {
		document.getElementById("work-description").innerHTMl = "VSCO"
	} else {
		document.getElementById("work-description").innerHTML = "make cancel button"
	}
}