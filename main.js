$(document).ready(function() {
  var filterMap = data.results.map(function(obj) {
    return {
      "url_170x135": obj.Images[0]["url_170x135"],
      "shop_name": obj.Shop.shop_name,
      "title": obj.title,
      "price": obj.price,
      "currency_code": obj.currency_code
    };
  });

  var newData = {filterMap: filterMap};

  var template = $("#allOtherCategoriesTemplate").text();

  var listHTML = Mustache.render(template, newData);

  $("#pictureContainer").html(listHTML);


});


