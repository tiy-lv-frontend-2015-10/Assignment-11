$(document).ready(function(){


	$('.product-square').hover(function(){
			$(this).children().toggle();
	});



	// display the left side menu ***********************************

	var categories = data.etsy_main_categories;
	console.log(categories);

	var categoryTemplate = $('#categoryTemplate').text();
	console.log(categoryTemplate);

	var categoryData = categories;
	console.log(categoryData);

	var categoryHTML = Mustache.render(categoryTemplate, categoryData);
	console.log(categoryHTML);
	$("#top-side-list").html(categoryHTML);
//*****************************************************************
});
