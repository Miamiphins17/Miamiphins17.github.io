// work on send/retrieve line 45

$(document).ready(function(){
	var baseFile = "https://my.api.mockaroo.com/jerseys.json?key=0a8afae0";
	
	// setup links
	$.getJSON(baseFile, function(data){
		$("#product-list").empty(); // remove any old links
		// data is an array of product objects
		$.each(data, function(i, e){
			var $price = $("<h5></h5>");
			var $mascot = $("<p></p>");
			var $city = $("<p></p>");
			var $number = $("<p></p>");
			var $a = $("<a href='#order-button'><b></b></a>");
			var $li =$("<li></li>");
			
			$a.text(e.name);
			$city.text(e.city);
			$mascot.text(e.mascot);
			$number.text(e.number);
			$price.text(e.price);
			
			$a.append($price);
			$city.append($city);
			$mascot.append($mascot);
			$number.append($number);
			$li.append($a, $number, $city, $mascot, $price);
			$("#product-list").append($li);	

			$a.click(createClickHandler(e));

		});		
	});

	function createClickHandler(e) {
		return function onClick() {
			let details = ""
			details = e.description
			$("#product-details").text("Great choice! How many would you like?");
			$("#order-button").show();
			$("#label").show();
			$("#quantity").show();
		}
	}

	var orderButton = document.getElementById("order-button");

	orderButton.onclick = function() {
	// MODAL
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];
//******************* Send quantity and retrieve total price here */
var total = 0;
var quantity = 2
total = (this.$price.get("description") * quantity);
//******************* Display total price in $("#total-price") here */
$("#total-price").text( "Total: $" + total.toFixed(2) );
	modal.style.display = "block";

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

});