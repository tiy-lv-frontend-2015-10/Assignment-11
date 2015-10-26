$(document).ready(function(){

//this is to get CATEGORIES LIST info from data.js
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
//send text, render to html, send data via jquery
var listingTemplate = $("#listingTemplate").text();
var listingHTML = Mustache.render(listingTemplate, listingData);
$("#allCategoriesList").html(listingHTML); 


    
    
//get TOP CATEGORIES
//loop for categories that I cannot find
    
//$("#topCats").text();
//Mustache.render( , );
//send to html doc

    
    
    
//get ALL CATEGORIES WHISKEY -- loop ALL categories!
    var allCategories = data.forEach(function(all){
        return {
            category_path: all.category_path,  
        }
    })
    
//send text, render to html, send data via jquery
//$("#allCats").text();
//Mustache.render( , );
$("allCategoriesWhiskey").html()
    
    
});//closes doc ready