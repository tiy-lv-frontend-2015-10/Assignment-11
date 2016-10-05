$(document).ready(function(){

    
//get ALL CATEGORIES WHISKEY -- loop ALL categories!
    var allCatUpdates = {};
    
    allCatUpdates = data.results.map(function(obj) {
        return {
            listingId: obj.name,
            url_75x75: obj.Images[0].url_75x75,
            price: obj.price
    };
    });
    
    var catUpdates = {
        allCatUpdates : allCatUpdates
    };
    
//send text, render to html, send data via jquery
var allCatTemplate = $("#allCatTemplate").text();
var allCatHTML = Mustache.render(allCatTemplate, catUpdates);
$("#allCatWhiskey").html(allCatHTML);

    
    
    
    
    
});//closes doc ready