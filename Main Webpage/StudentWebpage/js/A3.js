
function validateForm() {
	
	var firstName   = document.forms["registration"]["firstName"].value;
	var province   = document.forms["registration"]["province"].value;
	var lastName   = document.forms["registration"]["lastName"].value;
	var city       = document.forms["registration"]["city"].value;
	var email      = document.forms["registration"]["email"].value;
	var address    = document.forms["registration"]["address"].value;
	var age        = document.forms["registration"]["age"].value;
	var postalCode = document.forms["registration"]["postalCode"].value;
	var password   = document.forms["registration"]["password"].value;
	var confirm    = document.forms["registration"]["confirm"].value;

	var formArray   = [firstName, province, lastName, city, email, address, age, postalCode, password, confirm];
	var errorString = ["First Name", "Province", "Last Name", "City", "Email", "Address", "Age", "Postal Code", "Password", "Confirm"]; 
	var errorCount  = 0; //incremented by occurrences Errors
	
	
	for (var x=0 ; x < formArray.length; x++) {
		
		//Validate Province Name
		if(x == 1) {
			var regExp = new RegExp(/^(AB|BC|MN|NB|NL|NS|NT|NU|ON|PE|QC|SK|YT)$/);
			if(province == "" ) alert("Error: " + errorString[x++]+" is empty ", errorCount++);
			else if(!regExp.test(province)) alert("Error: Invalid Province Name", errorCount++);
		} 
		
		//Validate Email
		if(x == 4) {
			var regExp = new RegExp(/^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,3})+$/);
			if(email == "") alert("Error: " + errorString[x++] + " is empty ", errorCount++);
			else if(!regExp.test(email)) alert("Error: " + errorString[x] + " has to be both @ and . nor all lower case", errorCount++);
		} 

		//Validate Age
		if(x == 6) {
			if(age == "") alert("Error: " + errorString[x++]+" is empty ",errorCount++);
			else if(age < 18) alert("Error: " + errorString[x]+" has to be at least 18 ", errorCount++);
		} 

		//Validate Postal Code
		if(x == 7) {
			var regExp = new RegExp(/^([a-z]\d){3}$/);
			if(postalCode == "") alert("Error: " + errorString[x++] + " is empty ", errorCount++);
			else if(!regExp.test(postalCode)) alert("Error: " + errorString[x] + " is invalid Format", errorCount++);
		}
		
		//Validate Password
		if(x == 8) {
			var regExp = new RegExp(/^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{6,}$/);
			if(password == "") alert("Error: " + errorString[x++] + " is empty ", errorCount++);
			else if(!regExp.test(password)) alert("Error: " + errorString[x] + " has to be minimum 6 characters, at least 1 upper case, and 1 Number", errorCount++);
		} 

		//Validate Confirm
		if(x == 9) {
			if(password!=confirm) alert("Error: " + errorString[x++] + " and Password has to be the same", errorCount++);
		} 
		
		//Validate All Fields
		if(formArray[x] == "") alert("Error: " + errorString[x]+" is required ", errorCount++);
	}
	
	if(errorCount == 0 ) alert("Thanks for registering with our website, your customer record was created successfully");
	else alert("Error: Fill in the Form again");
}

