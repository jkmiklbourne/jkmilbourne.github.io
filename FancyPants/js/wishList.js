/*********************************************************************
***
*Original Author:                                   *Joshua Milbourne
*Date Created:                                       *09/03/20
*Version:                                                *1
*Date Last Modified:                              *
*Modified by:                                          *
*Modification log:                                  *
Created file to run Contact Us script and allow user to email us direct
***
******************************************************************** */


"use strict";


var addToTaskList = function() { 
    var taskTextbox = $("task");
//    var newTask = new Task(taskTextbox.value);
	var newTask = getTask(taskTextbox.value);
    if (newTask.isValid()) {
        tasklist.add(newTask);
        tasklist.save();
        tasklist.display();
        taskTextbox.value = "";        
    } else {
        alert("Please enter a wish.");
    }
    taskTextbox.focus();
};

var clearTaskList = function() {
    tasklist.clear();
    $("task").focus();
};

var deleteFromTaskList = function() {
    tasklist.delete(this.title); // 'this' = clicked link
    tasklist.save();
    tasklist.display(); 
    $("task").focus();
};

var editTaskListItem = function() {
    var newText = prompt("Please enter new wish text", tasklist.tasks[this.title]);  // 'this' = clicked link
//    var editedTask = new Task(newText);
	var editedTask = getTask(newText);
	if (editedTask.isValid()) {
		tasklist.edit(this.title, editedTask).save().display(); 
    	$("task").focus();
	}
	else {
		alert("Please enter a valid wish");
	}
};

window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;   
    
    tasklist.displayDiv = $("tasks");
    tasklist.deleteClickHandler = deleteFromTaskList;
	tasklist.editClickHandler = editTaskListItem;
    
    tasklist.load();
    tasklist.display();
    
    $("task").focus();
};