$(document).ready(function(){
var templateString = $("#listItemTemplate").text();
var listHtml = Mustache.render(templateString, data);
$("#container").html(listHtml)

});