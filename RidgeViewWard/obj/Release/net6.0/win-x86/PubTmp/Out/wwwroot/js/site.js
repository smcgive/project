// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function getCurrentDate() {
    var today = new Date();
    var monthName = today.getMonthName();
    var day = today.getDate();
    var year = today.getFullYear();
    return monthName + " " + day + ", " + year;
  }
