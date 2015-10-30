$(document).ready(function(){
			



	var whiskeyPics = data.results.map(function(item){
		var string = item.title;
		var length = 40;
		var trimmedString = string.length > length ? 
                    string.substring(0, length - 3) + "..." : 
                    string.substring(0, length);
		return {
			url_170x135: item.Images[0].url_170x135,
			title: trimmedString,
			shop_name: item.Shop.shop_name,
			price: item.price + " " + item.currency_code
		};
	});
	var whiskeyPull = {
	  		"whiskeyPics": whiskeyPics
			};
	var whiskeyTemplate = $("#whiskeyTemplate").text();
	var whiskeyHTML = Mustache.render(whiskeyTemplate, whiskeyPull);
		$("#whiskeyProducts").html(whiskeyHTML);
});