$(document).ready(function(){

var listings = data.results.map(function(listing){
    return {
        listingId: listing.listing_id,
        categoryId: listing.category_id,
        url_75x75: listing.Images[0].url_75x75
    };
});
    
var listingData = {
    "listings": listings
} 
    
var listingTemplate = $("#listingTemplate").text();
var listingHTML = Mustache.render(listingTemplate, listingData);
$("#allCategories").html(listingHTML);

});//closes doc ready