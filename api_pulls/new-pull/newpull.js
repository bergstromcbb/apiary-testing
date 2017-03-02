// $(document).ready(function(){
//
//
//
//   $.get("https://private-8e550-directmail.apiary-mock.com/templates/categories").success(function(goodness){
//     var apiaryArray = goodness.categories;
//     for(var i=0; i<apiaryArray.length; i++){
//       var templateCategory = apiaryArray[i].name;
//
//       var subp =  $("<p></p>");
//
//       for(var j=0; j<apiaryArray[i].subcategories.length; j++){
//         var subCategory = apiaryArray[i].subcategories[j].name;
//         console.log(apiaryArray[i].subcategories[j].name);
//
//         subp.text(subCategory);
//
//       }
//
//
//       $('section').append(
//         '<div><h2>' + templateCategory +
//         '</h2>'+  subp +
//         '</div>');
//
//
//     }
//     console.log(apiaryArray);
//
//   });
// });

$(document).ready(function(){

  $.get("https://private-8e550-directmail.apiary-mock.com/templates/categories", function(goodness){
    var apiaryArray = goodness.categories;

    for(var i=0; i<apiaryArray.length; i++){
      var templateCategory = apiaryArray[i].name;

      $('section').append('<div><h2>' + templateCategory + '</h2></div>');

      for(var j=0; j<apiaryArray[i].subcategories.length; j++){
        var subCategory = apiaryArray[i].subcategories[j].name;
        console.log(apiaryArray[i].subcategories[j].name);
        $('section div').append('<p>' + subCategory + '</p>');
      }
    }
  });

});
