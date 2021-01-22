/*********************************************************************
***
*Original Author:                                   *Joshua Milbourne
*Date Created:                                       *09/03/20
*Version:                                                *1
*Date Last Modified:                              *
*Modified by:                                          *
*Modification log:                                  *
09/03/20
created js to handle code for faq
***
******************************************************************** */


"use strict";
// $ function
var $ = function(id) {
    return document.getElementById(id);
};


// toggles for faq
var toggle = function() {
    var a = this;
    var h2 = a.parentNode;
    var div = h2.nextElementSibling;

    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    }
    else {
        h2.className = "minus";
    }

    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
    }
    else {
        div.className = "open";
    }
};

//event handler
window.onload = function () {
    var faqs = $("faqs");
    var aElements = faqs.getElementsByTagName("a");

    for (var i = 0; i < aElements.length; i++) {
        aElements[i].onclick = toggle;
    }
};