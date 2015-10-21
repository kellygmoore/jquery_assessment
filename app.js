$(document).ready(function(){
	console.log("Working on load.");

var genButtonCounter = 0;

$('#container').append("<button class='genButton'>Generate</button>");

$("#container").on('click', '.genButton', function(){
	genButtonCounter++;
	console.log(genButtonCounter);
	
	$("#container").append("<div class='actions'></div>");
	var $el = $("#container").children().last();

	$el.append("<button class='deleteButton'>Delete</button>");
	$el.append("<button class='changeButton'>Change</button>");
	$el.append("Clicked on: " + genButtonCounter);

	$(".actions").on('click', '.deleteButton', function(){
		$(this).parent().remove();
	});


	$(".actions").on('click', '.changeButton', function() {
		$(this).parent().toggleClass('selected');
	});


});


});