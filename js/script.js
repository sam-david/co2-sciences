var myDataRef = new Firebase('https://co2-sciences.firebaseio.com/');
      

function submitContact () {
	var contact = $('#email').val();
	myDataRef.push(contact);
	$('#email').val("");
      alertify.log("We will keep you posted");
}

function verifyPassword() {
	console.log("Password")
	alertify.prompt("Please enter password to view CO2 Sciences Documents", function(e, str) {
		if (e) {
			console.log("ok")
			if (str === "poop") {
				window.open("documents.html");
			}
		} else {
			console.log("cancel")
		}
	}, "Provided Password");
}