
var test;
$(document).ready(function(){

  var categoryList = {};

  categoryList.allCategories = data.results.map(function(item){
    return {
      category_path: item.category_path[0]
    };
  });


  var alreadySeen = {};

  categoryList.allCategories = categoryList.allCategories.filter(function(item) {
      var category = item.category_path;
      if (!alreadySeen[category]) {
          alreadySeen[category] = true;
          return item;
      }
  });
  

  console.log(data)




  var templateString = $("#allCategories").text();
  var listHtml = Mustache.render(templateString, categoryList);
  $("#panel").html(listHtml);


//the var categoryList is empty object, them we assigned the categoryList. The result form the map fuction.
//is storage inside the categoryList and allCategories.  AllCategories is how I name my htl mustache id.
// data it is the name of the Big database. results it is the first array that contains the category_path. [0]
// is the index.
// after return the category_path on the left can have any name I want. the right side it where call the item. that I am
// looking for in this case is Category_path[0].

// var templatestring can be call any name.  the info after the $ is the name of the html id
// var listHTML  can be call any name.   Mustache render ( inside call the var that contain $ result and var category list)
// $("$panel") it is the name of my own div.

var photos = {};

photos.allPhotos = data.results.map(function(item){
  return{
    "price":item.price,
    "image": item.Images[0].url_75x75,
    "currency":item.currency_code,
    "shopName":item.shop_name
  }

});

var templateString = $("#allPhotos").text();
  var listHtml = Mustache.render(templateString, photos);
  $("#secondRow").html(listHtml);






});






