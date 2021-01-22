/*********************************************************************
***
*Original Author:                                   *Joshua Milbourne
*Date Created:                                       *09/18/20
*Version:                                                *
*Date Last Modified:                              *
*Modified by:                                          *
*Modification log:                                  *
created library_navigate.js to validate data in fields
***
******************************************************************** */

"use strict";
var $ = function(id) { return document.getElementById(id); };

var navigate = {
    showForm: function() {
        $("registration_form").setAttribute("class","show");
        $("registration_result").setAttribute("class","hide");
    },
    showResults: function() {
        $("registration_form").setAttribute("class","hide");
        $("registration_result").setAttribute("class","show");
    }
};
