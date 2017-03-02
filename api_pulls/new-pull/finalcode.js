
$(document).ready(function() {
  $.get("https://private-8e550-directmail.apiary-mock.com/templates/categories", function(goodness) {
    var apiaryArray = goodness.categories;
    for(var i = 0; i < apiaryArray.length; i++){
      var templateCategory = apiaryArray[i].name;
      var templateImage = apiaryArray[i].image;
      $('section').append('<div class=section' + i + '><h2>' + templateCategory + '</h2><img class="picture" src="' + templateImage + '"/></div>');
      for(var j = 0; j < apiaryArray[i].subcategories.length; j++){
        var subCategory = apiaryArray[i].subcategories[j].name;
        $('.section' + i).append('<p>' + subCategory + '</p>');

      }

    }

  });

});
