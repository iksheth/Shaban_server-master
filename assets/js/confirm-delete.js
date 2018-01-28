$(document).ready(function(){
    $( ".delete-item" ).submit(function( event ) {
        return confirm("You are going to DELETE this item!\nAre you sure you want to do it?");
  });
});
