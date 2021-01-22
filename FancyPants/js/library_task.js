/*********************************************************************
***
*Original Author:                                   *Joshua Milbourne
*Date Created:                                       *09/18/20
*Version:                                                *
*Date Last Modified:                              *
*Modified by:                                          *
*Modification log:                                  *
created library_tasks.js to add prototype for wishlist
***
******************************************************************** */

"use strict";

var taskPrototype = {
	isValid: function() {
	    if (this.text === "") { return false; } 
    	else { return true; }
	},
	toString: function() {
  	    var first = this.text.substring(0,1);
		return first.toUpperCase() + this.text.substring(1);
	}
};

var getTask = function(taskText) {
	var task = Object.create(taskPrototype);
	task.text = taskText;
	return task;
}