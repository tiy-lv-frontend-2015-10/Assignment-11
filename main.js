$(document).ready(function(){

	
	var mapData = data.results.map(function(obj) {
		return {
			'title': obj.title,
			'price': obj.price,
			'shop_name': obj.Shop.shop_name,
			'currency_code': obj.currency_code,
			'url_170x135': obj.Images[0]['url_170x135'],
			'url': obj.url  
		};
	});

	var newData = {mapData: mapData};

	var templateString = $("#listItemTemplate").text();
	var listHTML = Mustache.render(templateString,newData);
	$("#pictureContainer").html(listHTML);


});








