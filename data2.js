$(document).ready(function(){
var listings = data.results.map(function(listing){
  return {
    "title":listing.title,
    "shop_name": listing.shop_name,
    "price": listing.price,
    "currency_code":listing.currency_code,
    "url_75x75": listing.Images[0].url_75x75
  };

});


var listingData = {
  "listings": listings
};
  var images = $("#images").text();
  var listHtml = Mustache.render(images, listingData);
  $("#boxes2").html(listHtml);
});