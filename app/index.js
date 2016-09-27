$(document).ready(function(){ // Code stating that jQuery will be used.

	// button to calculate payment
	$("#button").click(function() {
	    var saleTotal = $("#sale").val();
	    var givenTotal = $("#given").val();

	// variables for change calculations
	var changeReturn = givenTotal - saleTotal;
	var dollarReturn = changeReturn / 1;

	var remainder1 = changeReturn % 1;
	var quartersReturn = remainder1 / .25;

	var remainder2 = remainder1 % .25;
	var dimesReturn = remainder2 / .10;

	var remainder3 = remainder2 % .10;
	var nickelsReturn = remainder3 / .05;

	var remainder4 = remainder3 % .05;
	var penniesReturn = remainder4 / .01;


	$("#dollars").text(Math.floor(dollarReturn));
	$("#quarters").text(Math.floor(quartersReturn));
	$("#dimes").text(Math.floor(dimesReturn));
	$("#nickels").text(Math.floor(nickelsReturn));
	$("#pennies").text(Math.round(penniesReturn));
	$("#change").text("$" + changeReturn);

	});
});