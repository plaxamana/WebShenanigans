function validateForm() {

    var phone = document.forms["vehicleReserve"]["phone"].value;
    var email = document.forms["vehicleReserve"]["email"].value;

    function validateVehicle() {
        if (document.getElementById("minivan").checked == true) {
            alert("All our minivans are 2013 or newer Dodge Grand Caravans.  The only pick up/drop off location is at 123 Main St. ");
        }
        else if (document.getElementById("car").checked == true) {
            alert("Please fill out all forms below");
        }
        else {
            // DO NOTHING
        }
    }
    
    var formArray = [firstName, province, lastName, city, email, address, age, postalCode, password, confirm];
    var errorString = ["Phone", "Email", "Vehicle Type", "Preferred Make", "Preferred Model", "Preferred Pickup location",
                        "Start Date", "Request"];
    var errorCount = 0; //incremented by occurrences Errors

    for (var x = 0 ; x < formArray.length; x++) {

        //Validate Email
        if (x == 2) {
            var regExp = new RegExp(/^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,3})+$/);
            if (email == "") alert("Error: " + errorString[x++] + " is empty ", errorCount++);
            else if (!regExp.test(email)) alert("Error: " + errorString[x] + " has to be both @ and . nor all lower case", errorCount++);
        }

        //Validate Postal Code
        if (x == 1) {
            var regExp = new RegExp(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/);
            if (postalCode == "") alert("Error: " + errorString[x++] + " is empty ", errorCount++);
            else if (!regExp.test(postalCode)) alert("Error: " + errorString[x] + " is invalid Format", errorCount++);
        }

        //preferred make
        if (x == 3) { }

        //preferred model
        if (x == 4) { }

        //pickup location
        if (x == 5) { }

        //start date
        if (x == 6) { }

        //Validate All Fields
        if (formArray[x] == "") alert("Error: " + errorString[x] + " is required ", errorCount++);
    }

    if (errorCount == 0) alert("Thanks for reserving a car with us.");
    else alert("Error: Fill in the Form again");
}
