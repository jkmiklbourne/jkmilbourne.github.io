/*********************************************************************
***
*Original Author:                                   *Joshua Milbourne
*Date Created:                                       *09/01/20
*Version:                                                *1
*Date Last Modified:                              *09/01/20
*Modified by:                                          *
*Modification log:                                  *
9/1/20
Moved embeded js to this external page
added funtions to control newsletter form
***
******************************************************************** */

//alert("Welcome to FancyPants Event Designs!\nWhere we can design your perfect event!\n\nNo matter how fancy your pants are!")

"use strict";
// $ function
var $ = function(id) {
    return document.getElementById(id);
};

// process and validate entries
var processEntries = function() {
    // variables and entries
    var email = $("email_address_news").value;
    var fisrtName = $("first_name_news").value;
    var lastName = $("last_name_news").value;
    var isValid = true;

    // data validation
    if (email === "") {
        $("error_email_news").firstChild.nodeValue = "Required";
        isValid = false;
    }
    else if (!isEmail(email)) {
        $("error_email_news").firstChild.nodeValue = "Please enter a valid email";
        isValid = false;
    }
    else {
        $("error_email_news").firstChild.nodeValue = "";
    }

    if (fisrtName == "") {
        $("error_first_name_news").firstChild.nodeValue = "Required";
        isValid = false;
    }
    else {
        $("error_first_name_news").firstChild.nodeValue = "";
    }
    
    if (lastName == "") {
        $("error_last_name_news").firstChild.nodeValue = "Required";
        isValid = false;
    }
    else {
        $("error_last_name_news").firstChild.nodeValue = "";
    }
    
    // if valid data submit form
    if (isValid == true) {
        // clear error messages
        $("error_email_news").firstChild.nodeValue = "";
        $("error_first_name_news").firstChild.nodeValue = "";
        $("error_last_name_news").firstChild.nodeValue = "";
        // send submit message to alert
        alert("Thank you for joining our newsletter!\nYou will be hearing from us shortly!")
        // submit form
        clearForm();   
        $("newsletter").submit();    
    }   
};

// clear text boxes on double click
var clearEmail = function() {
    $("email_address_news").value = "";
};
var clearFirstName = function() {
    $("first_name_news").value = "";
};
var clearLastName = function() {
    $("last_name_news").value = "";
};

var clearForm = function() {
    clearEmail();
    clearFirstName();
    clearLastName();
};

//event handler
window.onload = function() {
    // subscribe button
    $("join_newsletter").onclick = processEntries;
    // clear entries on double click of text box
    $("email_address_news").ondblclick = clearEmail;
    $("first_name_news").ondblclick = clearFirstName;
    $("last_name_news").ondblclick = clearLastName;
    // pull focus
    // $("email_address_news").focus();
};