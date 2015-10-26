$(document).ready(function(){
	
	var images = items.results.map(function(imageOne){
		return {
			url_170x135: imageOne.Images[1].url_170x135
	};

	var smallImages = items.results.map(function(imageTwo){
		return {
			url_75x75: imageTwo.Images[0].url_75x75
	};


});

var whiskeyHome = {
	"images": images
}

var whiskeyImages = $("#whiskeyImages").html();
var whiskeyHTML = Mustache.render(whiskeyImages, whiskeyHome);
$("#mainImgs").html(whiskeyHTML);

var smallWhiskey = {
	"smallImages": smallImages
}


var smallWhiskeyImages = $("#smallWhiskeyImages").html();
var whiskeyHTML = Mustache.render(smallWhiskeyImages, smallWhiskey);
$("#smallImgs").html(whiskeyHTML);