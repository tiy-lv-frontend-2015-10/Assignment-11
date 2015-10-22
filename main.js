$(document).ready(function() {

  var template = $("#allOtherCategoriesTemplate").text();
  var listHTML = Mustache.render(template, data);
  $("#pictureContainer").html(listHTML);
});