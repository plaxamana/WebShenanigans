var d = new Date();
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var date = d.getDate();

var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
m = mZero(m);
s = mZero(s);

//Time

document.getElementById("time").innerHTML = h + ":" + m + ":" + s;

function mZero(i) {
    if (i < 10) { i = "0" + i };
    return i;
}


//Month

document.getElementById("month").innerHTML = month[d.getMonth()] + "  ";

//Day

if (date == 1) {
    document.getElementById("date").innerHTML = d.getDate() + "st,";
}
else if (date == 2) {
    document.getElementById("date").innerHTML = d.getDate() + "nd,";
}
else if (date == 3) {
    document.getElementById("date").innerHTML = d.getDate() + "rd,";
}
else if (date >= 4) {
    document.getElementById("date").innerHTML = d.getDate() + "th,";
}


//year

document.getElementById("year").innerHTML = d.getFullYear();


	
	