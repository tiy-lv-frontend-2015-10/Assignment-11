$(document).ready(function(){

	var categories = data.etsy_main_categories;
	console.log(categories);

	var categoryTemplate = $('#categoryTemplate').text();
	console.log(categoryTemplate);

	var categoryHTML = Mustache.render(categoryTemplate, categories);
	console.log(categoryHTML);
	$("#top-side-list").html(categoryHTML);

});
