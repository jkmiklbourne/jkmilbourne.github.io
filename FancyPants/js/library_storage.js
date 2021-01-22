/*********************************************************************
***
*Original Author:                                   *Joshua Milbourne
*Date Created:                                       *09/18/20
*Version:                                                *
*Date Last Modified:                              *
*Modified by:                                          *
*Modification log:                                  *
created library_storage.js to add local storage funtions for wishList
***
******************************************************************** */

"use strict";
var $ = function(id) { return document.getElementById(id); };

var storagePrototype = {
    get: function() {
        var str = localStorage.getItem(this.key) || "";
        return (str === "")? []: str.split("|");
    },
    set:function(arr) {
        if (Array.isArray(arr)) {
            var str = arr.join("|"); 
            localStorage.setItem(this.key, str);
        }
    },
    clear: function() {
        localStorage.setItem(this.key, "");
    }
};
var getTaskStorage = function(key) {
    var storage = Object.create(storagePrototype);
    storage.key = key;
    return storage;
};
