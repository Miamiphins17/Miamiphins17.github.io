// work on send/retrieve line 45

$(document).ready(function(){
	
	var baseFile = "https://miamiphins17.github.io/Jerseys.json";
	
	// setup links
	$.getJSON(baseFile, function(data){
		$("#product-list").empty(); // remove any old links
		// data is an array of product objects
		$.each(data, function(i, e){
			//var $price = $("<p></p>");
			var $a = $("<a href='#'></a>");
			var $li =$("<li></li>");
			var $City = $("<p></p>");



			$City.text(e.City);
			//$a.text(e.Mascot);
			//$a.text(e.Name);
			//$a.text(e.Number);
			//$price.text(e.price);
			
			//$a.append($price);
			$li.append($a);
			$("#product-list").append($li);	

			$a.click(createClickHandler(e));

		});		
	});

	function createClickHandler(e) {
		return function onClick() {
			let details = ""
			details = e.description
			$("#product-details").text(details);
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
//******************* Display total price in $("#total-price") here */

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
