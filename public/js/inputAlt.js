$(document).ready(function() {
    initializePage();
})

function initializePage() {
    console.log("page initialized");
    $('#submitdiy').click(verify);
}

function verify(e) {
    console.log("Search for diy recipes");
    e.preventDefault();
    var inputtimetocook = document.getElementById("time").value;
    var timetocook = parseInt(inputtimetocook);
    var inputintakecal = document.getElementById("calories").value;
    var intakecal = parseInt(inputintakecal);

    //var time1 = "0 - 20 minutes";
    //var time2 = "20 - 40 minutes";
    //var time3 = "40 minutes and above";

    //var cal1 = "0 - 499 Calories";
    //var cal2 = "500 - 999 Calories";
    //var cal3 = "1000 Calories and above";

    if (timetocook > 0 && intakecal > 0) {
        console.log("Valid input");
        window.location = "diy1";
    }
    /*
    else if (timetocook == time1 && intakecal == cal2) {
        console.log("0-20 minutes and 500-999 cals");
        window.location = "diy1";
    }
    else if (timetocook == time1 && intakecal == cal3) {
        console.log("0-20 minutes and 100 cals above");
        window.location = "diy1";
    }
    else if (timetocook == time2 && intakecal == cal1) {
        console.log("20-40 minutes and 0-499 cals");
        window.location = "diy1";
    }
    else if (timetocook == time2 && intakecal == cal2) {
        console.log("20-40 minutes and 500-999 cals");
        window.location = "diy1";
    }
    else if (timetocook == time2 && intakecal == cal3) {
        console.log("20-40 minutes and 1000 cals above");
        window.location = "diy1";
    }
    else if (timetocook == time3 && intakecal == cal1) {
        console.log("40+ minutes and 0-499 cals");
        window.location = "diy1";
    }
    else if (timetocook == time3 && intakecal == cal2) {
        console.log("40+ minutes and 500-999 cals");
        window.location = "diy1";
    }
    else if (timetocook == time3 && intakecal == cal3) {
        console.log("40+ minutes and 1000 cals above");
        window.location = "diy1";
    }
    */
    else {
        console.log("Invalid input!");
        alert("Please input valid information!");
    }
}