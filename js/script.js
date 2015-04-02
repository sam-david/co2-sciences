var myDataRef = new Firebase('https://co2-sciences.firebaseio.com/');
      

function submitContact () {
	var contact = $('#email').val();
	myDataRef.push(contact);
	$('#email').val("");
      alertify.log("We will keep you posted");
}

function verifyPassword() {
	console.log("Password")
	alertify.prompt("Please enter the password to view CO2 Science Initiative Documents", function(e, str) {
		if (e) {
			console.log("ok")
			if (str === "co2change") {
				window.open("documents.html");
			} else {
				alertify.log("Incorrect Password Entered")
			}
		} else {
		}
	}, "Provided Password");
}