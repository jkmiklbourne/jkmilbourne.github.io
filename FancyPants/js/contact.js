/*********************************************************************
***
*Original Author:                                   *Joshua Milbourne
*Date Created:                                       *09/03/20
*Version:                                                *1
*Date Last Modified:                              *
*Modified by:                                          *
*Modification log:                                  *
Created file to run Contact Us script to allow user to email us direct
***
******************************************************************** */


"use strict";
// $ funtion
// var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {
    var name = $("bookUsName").value;
    var email = $("bookUsEmail").value;
    var phone = $("bookUsPhone").value;
    var isValid = true;

    if (name == "") {
        $("error_bookUs_name").firstChild.nodeValue = "Please enter a name";
        isValid = false;
    }

    if (email == "") {
        $("error_bookUs_email").firstChild.nodeValue = "Please enter an email address";
        isValid = false;
    } else if (!isEmail(email)) {
        $("error_bookUs_email").firstChild.nodeValue = "Invalid email address";
        isValid = false;
    }
    if (phone == "") {
        $("error_bookUs_phone").firstChild.nodeValue = "Please enter a phone number";
        isValid = false;
    } else if (!isPhone(phone)) {
        $("error_bookUs_phone").firstChild.nodeValue = "Invalid phone number";
    }

    // if (isValid == false) alert("You must enter a Name, Email and Phone number to Book Us")
    if (isValid) {
        alert("You will shortly be recieving an email.  We will take it from here!")
        $("bookUsForm").submit();
        $("bookUsForm").reset();
    }

};

var timeStamp = function() {
    var currentDate = new Date();
    var amPm = "AM";
	// Get the date parts
	var month = currentDate.getMonth() + 1;
	// month = (month < 10) ? "0" + month : month;
	var day = currentDate.getDate();
	// day = (day < 10) ? "0" + day : day;
	var year = currentDate.getFullYear();
	// var dateString = "Today is " + month + "/" + day + "/" + year + " at ";
	// Get the time parts
    var hours = currentDate.getHours();
    if (hours == 0) hours = 12;
    if (hours > 12) {
        hours = hours - 12;
        amPm = "PM"
    }
	var minutes = currentDate.getMinutes();
	minutes = ( minutes < 10 ) ? "0" + minutes : minutes;  // Pad minutes
	var dateString =  hours + ":" + minutes + amPm;
    dateString +=  "  " + month + "/" + day + "/" + year;
    console.log(dateString)
    return dateString;    
};

var setDate = function() {
    $("time_stamp").value = timeStamp();
}

window.onload = function () {
    var today = new Date();
    var thisMonth = today.getMonth();
	// display month and year
	$("month_year").firstChild.nodeValue = "< " + getMonthText(thisMonth) + " " + today.getFullYear() + " >";
	
	var lastDayofMonth = getLastDayofMonth(thisMonth);
    var rows = $("calendar").innerHTML;
    
    var date; // the current date; eg, the 1st, the 22nd, etc
    var day;  // the day of the week; eg, Sat, Sun, etc
    var start;
    
    // loop through the number of days in the month
    for (var i = 0; i < lastDayofMonth; i++) {
        // add one to index and use that number as current date
        today.setDate(i + 1);
        
        // get the current date and day
        date = today.getDate();
        day = today.getDay();
        
        // start a new row if it's the first of the month or the day is Sunday
        if (date === 1 || day === 0) { 
            rows = rows.concat("<tr>"); 
        }

        // add blank dates at the beginning of the calendar until
        // you get to the day of the week the month starts on
        if (date === 1 ) { 
            start = 0;
            while (start < day) {
                rows = rows.concat("<td></td>"); 
                start++;
            }
        } 
        
        // add the date to the calendar
        rows = rows.concat("<td>", date, "</td>");
        
        // add blank dates at the end of the calendar until
        // you get to the last day of the week the month ends in
        if (date === lastDayofMonth) { 
            start = day;
            while (start < 6) {
                rows = rows.concat("<td></td>"); 
                start++;
            }
        } 
        
        // end the row if it's the last of the month or the day is Saturday
        if (date === lastDayofMonth || day === 6) { 
            rows = rows.concat("</tr>"); 
        }
    }
    
    // display calendar rows
    $("calendar").innerHTML = rows;
    $("book_us_btn").onclick = processEntries;
    setDate();
    $("bookUsName").focus();
};
// event handler
// window.onload = function() {
//     // submit button click
//     // $("book_us_btn").onclick = processEntries;
//     // reset button click
//     // $("reset_message").onclick = resetForm;
//     // text box double clicks
//     // $("name_contact").ondblclick = clearName;
//     // $("email_contact").ondblclick = clearEmail;
//     // $("subject_contact").ondblclick = clearSubject;
//     // $("message_contact").ondblclick = clearMessage;
//     // pull focus
//     // $("name_contact").focus();
//     // set date and time in date field
//     timeStamp();
// };
