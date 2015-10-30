$(document).ready(function(){



$("#signInButton").on("click",function(){
	$("#signInForm").toggleClass("hidden");
	$("#masterContainer").toggleClass("overlay");
});

$("#cat1").hover(function(){
	$(".catDiv").toggleClass("displayBlock");
});












	var mapData = data.results.map(function(obj){
		return {
			'title': unescape(obj.title),
			'price': obj.price,
			'shop_name': obj.Shop.shop_name,
			'currency_code':obj.currency_code,
			'url_170x135': obj.Images[0]['url_170x135'],
			'url':obj.url
		};
	});

	var newData = {mapData:mapData};

var templateString = $("#listItemTemplate").text();
var listHtml = Mustache.render(templateString, newData);
$("#container").html(listHtml);

});