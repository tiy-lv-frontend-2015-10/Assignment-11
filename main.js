$(document).ready(function(){

	var template = $(".allOtherCategoriesTemplate").text();
	var listHTML = Mustache.render(templateString,data);
	$("#itemContainer").html(listHTML);

});
