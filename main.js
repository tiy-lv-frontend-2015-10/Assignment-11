$(document).ready(function(){

var categories = dataChunks.etsy_main_categories;

var categoryTemplate = $('#categoryTemplate').text();

var categoryHTML = Mustache.render(categoryTemplate, categories);
$('#top-side-list').html(categoryHTML);



});
