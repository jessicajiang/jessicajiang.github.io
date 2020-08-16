function swap(divNum) {
	var workDes = document.getElementById("work-description")
	workDes.style.backgroundColor = "#ffada0"
	workDes.style.opacity = "1"
	
	if(divNum == 1) {
		workDes.innerHTML = "ajsdkflaslf;adjs"
		workDes.style.backgroundColor = "#e3eaf7"
	} else if (divNum == 2) {
		workDes.innerHTML = "Twitter"
	} else if (divNum == 3) {
		workDes.innerHTMl = "what is going on"
		workDes.style.backgroundColor = "#e3eaf7"
	} else {
		alert("Close button pressed")
		workDes.innerHTML = "closed"
		workDes.style.backgroundColor = ""
		workDes.style.opacity = "0"

	}
}

function close() {
	var workDes = document.getElementById("work-description")
	alert("Close button pressed")
		workDes.innerHTML = ""
		workDes.style.backgroundColor = ""
		workDes.style.opacity = "0"
}