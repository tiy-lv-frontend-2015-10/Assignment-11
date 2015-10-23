$(document).ready(function(){

	
	var mapData = data.results.map(function(obj) {
		return {
			'title': obj.title,
			'price': obj.price,
			'shop_name': obj.Shop.shop_name,
			'currency_code': obj.currency_code,
			'url_170x135': obj.Images[0]['url_170x135']  
		};
	});

	var newData = {mapData: mapData};

	var templateString = $("#listItemTemplate").text();
	var listHTML = Mustache.render(templateString,newData);
	$("#pictureContainer").html(listHTML);

//mapData.forEach(function(obj) {
//	$("#span2").append("<p>" + obj.title + ", $" + obj.price + "</p>");
//});

});











//
//var object = {
//    foo:{a:'first'},
//    bar:{},
//    baz:{}
//}
//
//function getAttributeByIndex(obj, index){
//  var i = 0;
//  for (var attr in obj){
//    if (index === i){
//      return obj[attr];
//    }
//    i++;
//  }
//  return null;
//}

////
//var first = getAttributeByIndex(object, 0); // returns the value of the
                                            // first (0 index) attribute
                                            // of the object ( {a:'first'} )

//	var mapData = results.map(function(obj) {
//	return {
//		'title': obj.title,
//		'price': obj.price,
//		'currency_code': obj.currency_code,
//		'url_170x135': obj.url_170x135[0]   
//		};
//});












//newArr.forEach(function(obj) {
//	$("#span2").append("<p>" + obj.title + ", $" + obj.price + "</p>");
//});





