var myDataRef = new Firebase('https://co2-sciences.firebaseio.com/');
      

function submitContact () {
	var contact = $('#email').val();
	myDataRef.push(contact);
	$('#email').val("");
      alertify.log("We will keep you posted");
}
