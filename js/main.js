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
    } );

//- IMAGES -//
    

    // $(".logo").hover(
    // function () {
    // $('body').css("background", 'url(images/mull.gif) no-repeat fixed center' );
    // },
    // function () {
    // $('body').css("background", "#f5f5dc");
    // }
    // );

	$("#quad-hp").hover(
	function () {
	$('body').css("background", 'url(images/quadratura-1a.jpg) no-repeat fixed center' );
    },
    function () {
    $('body').css("background", "#f5f5dc");
    }
    );

	$("#houses-hp").hover(
	function () {
	$('body').css("background", 'url(images/private-houses-1.jpg) no-repeat fixed center' );
    },
    function () {
    $('body').css("background", "#f5f5dc");
    }
    );

	$("#interiors-hp").hover(
	function () {
	$('body').css("background", 'url(images/interiors-1a.jpg) no-repeat fixed center' );
    },
    function () {
    $('body').css("background", "#f5f5dc");
    }
    );

    $("#shelter-hp").hover(
    function () {
    $('body').css("background", 'url(images/social-housing-1a.jpg) no-repeat fixed center' );
    },
    function () {
    $('body').css("background", "#f5f5dc");
    }
    );

    $("#village-hall-hp").hover(
    function () {
    $('body').css("background", 'url(images/village-hall-1a.jpg) no-repeat fixed center' );
    },
    function () {
    $('body').css("background", "#f5f5dc");
    }
    );

    $("#cove-park-hp").hover(
    function () {
    $('body').css("background", 'url(images/cove-park-1.jpg) no-repeat fixed center' );
    },
    function () {
    $('body').css("background", "#f5f5dc");
    }
    );

});