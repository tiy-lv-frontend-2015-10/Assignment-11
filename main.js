$(document).ready(function(){

	var templateString = $("#listItemTemplate").text();
	var listHTML = Mustache.render(templateString,data);
	$("#pictureContainer").html(listHTML);

//	var mapData = (data.results.map(function(obj)) {
//		return {
//			title: obj.title,
//			price: obj.price,
//			currency_code: obj.currency_code,
//			url_170x135: obj.url_170x135[0]
//		}
});

//newArr.forEach(function(obj) {
//	$("#span2").append("<p>" + obj.title + ", $" + obj.price + "</p>");
//});





