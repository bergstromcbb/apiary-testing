$.get( "api_pulls/newtestInfo.json", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});
