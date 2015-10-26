$(document).ready(function(){

//Display/hide hearts & hamburgers**********************************
	$('.product-square').hover(function(){
			$(this).children().toggle();
	});

// Change background color of pagination buttons on hover***********
	$('.paginator').hover(function(){
		$(this).addClass('darker');
	}, function() {
		$(this).removeClass('darker');
	} );



	// display the left side menu ***********************************

	var categories = {
		categories: data.etsy_main_categories};
	console.log(categories);

	var categoryTemplate = $('#categoryTemplate').html();
	console.log(categoryTemplate);

	var categoryHTML = Mustache.render(categoryTemplate, categories);
	console.log(categoryHTML);
	$("#top-side-list").html(categoryHTML);
//*****************************************************************

// find and display pics of Home & Living and Art & Collectibles
var row1 = data.filter(function(listing) {
	var pics = {};
	var hl_count = 0;
	var ac_count = 0;
	if listing.results.taxonomy_path[0] === "Home & Living"
		hl_count = 1;
		
}

});
