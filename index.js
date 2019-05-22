function swap(divNum) {
	var workDes = document.getElementById("work-description")
	// document.getElementById("work-description").innerHTML = "Blah"
	workDes.style.backgroundColor = "#ffada0"
	workDes.style.opacity = "1"
	
	if(divNum == 1) {
		workDes.innerHTML = "A schema defines a GraphQL API's type system. It describes the complete set of possible data (objects, fields, relationships, everything) that a client can access. Calls from the client are validated and executed against the schema. A client can find information about the schema via introspection. A schema resides on the GraphQL API server. For more information, see"
		workDes.style.backgroundColor = "#e3eaf7"
	} else if (divNum == 2) {
		workDes.innerHTML = "Twitter"
	} else if (divNum == 3) {
		workDes.innerHTMl = "VSCO"
	} else {
		alert("Close button pressed")
		workDes.innerHTML = ""
		workDes.style.backgroundColor = ""
		workDes.style.opacity = "0"

	}
}