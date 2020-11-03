function swapText(divName) {
	var workDes = document.getElementById("work-description")
	workDes.style.backgroundColor = "#ffada0"
	workDes.style.opacity = "1"
	
	if(divName == 'mozilla') {
		workDes.innerHTML = "Mozilla, Summer of 2017"
		workDes.style.backgroundColor = "#e3eaf7"

	} else if (divName == 'twitter') {
		workDes.innerHTML = "<div id = \"close-description\" onclick = \"close()\"> <img src=\"icons/close-button.png\" alt=\"close button\"> </div>Twitter, Summer of 2018"
	} else if (divName == 'vsco') {
		workDes.innerHTML = "VSCO, since Summer of 2019. <br> vsco.co/jessssji"
		workDes.style.backgroundColor = "#e3eaf7"
	} else {
		// alert("Close button pressed")
		// workDes.innerHTML = ""
		// workDes.style.backgroundColor = ""
		// workDes.style.opacity = "0"
		close()
	}
	var closeButton = document.createElement("closeDescription");
	var closeButtonDiv = $("work-description");
	closeButtonDiv.appendChild(closeButton)
	// var closeButton = document.getElementById("closeDescription").src
	// // var closeButton = document.getElementbyId("closeButton").src
	// closeButton.style.opacity = "1"
}
let stringURL = 'strings.json';
let request = new XMLHttpRequest();
var workDescription = `Something`

request.open(`GET`, stringURL);
request.responseType = 'json';
request.onload = function() {
	let response = request.response
	workDescription = response['workDescriptions']
}
request.send();

var app = new Vue({
	el: '#content',
	data: {
		shouldShowWorkDescription: true,
		workDescription: `Hi! I'm Jess :) <br>
		I'm an iOS developer, so this is my
		"attempt" at making a website. <br>
		Click on the phone to see what I've worked on.`
	},
	methods: {
		displayWorkDescription(show) {
			this.shouldShowWorkDescription = show
		},
		switchOutText(description) {
			this.workDescription = workDescription[description]
			this.displayWorkDescription(true)
		}
	}
})
