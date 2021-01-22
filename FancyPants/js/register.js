/*********************************************************************
***
*Original Author:                                   *Joshua Milbourne
*Date Created:                                       *09/18/20
*Version:                                                *
*Date Last Modified:                              *
*Modified by:                                          *
*Modification log:                                  *
created register.js to work with contact.html
***
******************************************************************** */
"use strict";
var registerForm;

window.onload = function() {
    //create validation object and set field messages
    registerForm = new RegisterForm();
    registerForm.resetForm();
    
    $("register").onclick = function() {
        if ( registerForm.validateForm() ) { 
            // $("contact_form").submit();
            navigate.showResults();
        }
    };
    
    $("reset").onclick = function() {
        registerForm.resetForm();
    };
    
    $("back").onclick = function() {
        navigate.showForm();
        registerForm.resetForm();
    };
};