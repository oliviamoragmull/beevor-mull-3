$(document).ready(function(){

//- DRAGGING -//

    $( function() {
        $( "#draggable" ).draggable();
    } );

    $( function() {
        $( ".draggable-two" ).draggable();
    } );

    $( function() {
        $( ".draggable-four" ).draggable();
    } 
    );

//- BACKGROUND CHANGE -//

// $('.icon').click(
//  	function() {
//      	$('body').css("background", 'url(../images/interiors-1a.jpg) no-repeat fixed center' );
//  	},
//   	function() {
//  	  	$('body').css("background", 'url(../images/social-housing-1a.jpg) no-repeat fixed center' );
//  	}
//  );
});