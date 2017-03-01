$(document).ready(function(){
  $.get("https://private-8e550-directmail.apiary-mock.com/templates/categories", function(goodness){
    var apiaryArray = goodness.categories;
    for(var i=0; i<apiaryArray.length; i++){
      var thumbnail = apiaryArray[i].name;
      var title = apiaryArray[i].subcategories.name;
      $('section').append(
        '<div><h2>' + thumbnail +
        '</h2>'+ title +
        '</div>')
    }
  });
});
