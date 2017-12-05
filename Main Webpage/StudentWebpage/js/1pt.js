function formValidation() {
    var phone = document.forms["vehicleReserve"]["phone"].value;
    var email = document.forms["vehicleReserve"]["email"].value;
    var make = document.forms["vehicleReserve"]["preferredMake"].value;
    var model = document.forms["vehicleReserve"]["preferredModel"].value;
    var month = document.forms["vehicleReserve"]["month"].value;
    var day = document.forms["vehicleReserve"]["day"].value;


    if (phone == null || phone == "") {
        alert("Phone must be filled in.")
        document.getElementById("phone").focus();
        return false;
    }

    if (email == null || email == "") {
        alert("Email must be filled in.")
        document.getElementById("email").focus();
        return false;
    }

    if (month == null || month == "") {
        alert("A valid month must be entered")
        document.getElementById("month").focus();
        return false;
    }

    if (day == null || day == "") {
        alter("A valid day must be entered");
        document.getElementById("day").focus();
        return false;
    }

    if (document.getElementById("car").checked) {
        if (document.getElementById("pickupLoc").selectedIndex = "0") {
            alert("A pickup location must be chosen.")
        }
    }

    if (document.getElementById('minivan').checked) {
        if ((month != null || month != "") && (day != null || day != "")) {
            if (Day > 0 && Day < 31 && Month > 0 && Month < 13) {
                if ((phone != null || phone != "") && (email != null || email != "")) {
                    return true;
                }
            }
            else {
                alert("Day/Month has to be a value between 1 and 30");
                document.getElementById("month").focus();
            }
        }
    }

    if (document.getElementById('car').checked) {
        if (make == null || make == "") {
            alert("Make must not be empty")
            document.getElementById("make").focus();
        }

        if (model == null || model == "") {
            alert("Model must not be empty")
            document.getElementById("model").focus();
        }

        if ((month != null || month != "") && (day != null || day != "")) {
            if (Day > 0 && Day < 31 && Month > 0 && Month < 13) {
                if ((phone != null || phone != "") && (email != null || email != "") &&
                    (make != null || make != "") && (model != null || model != "")) {
                    return true;
                }
            }
            else {
                alert("Day/Month has to be a value between 1 and 30");
                document.getElementById("month").focus();
            }
        }

        return false;
    }
}

function Minivan() {
    alert("All Our Minivans are 2015 or newer Dodge Grand Caravans. The only pick up/drop offlocation is at 123 Main Street.");
    document.getElementById("MinivanColor").style.color = 'green';
    document.forms["vehicleReserve"]["preferredMake"].disabled = true;
    document.forms["vehicleReserve"]["preferredModel"].disabled = true;
    document.getElementById("pickupLoc").disabled = true;
}

function car() {
    document.getElementById("pickupLoc")[0].text = "--no location selected--";
    document.getElementById("CarColor").style.color = 'black';
    document.forms["vehicleReserve"]["preferredMake"].value = "";
    document.forms["vehicleReserve"]["preferredModel"].value = "";
}


