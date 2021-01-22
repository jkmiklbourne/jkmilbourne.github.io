/*********************************************************************
***
*Original Author:                                   *Joshua Milbourne
*Date Created:                                       *09/11/20
*Version:                                                *
*Date Last Modified:                              *
*Modified by:                                          *
*Modification log:                                  *
library for calendar on Book Us page
***
******************************************************************** */

var $ = function (id) { return document.getElementById(id); };

var getMonthText = function(currentMonth) {
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};

var getLastDayofMonth = function(currentMonth) {
    var dt = new Date();
    dt.setMonth(currentMonth + 1);
    dt.setDate(0);
    return dt.getDate();
};
