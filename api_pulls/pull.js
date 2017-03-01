$(document).ready(function(){
  $.get("https://private-8e550-directmail.apiary-mock.com/templates/categories", function(goodness){
    console.log(goodness);
  });
});
