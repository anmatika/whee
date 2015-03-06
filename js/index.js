"use strict";

(function($) {
	var data;

	// get the offers, wait for completion
	// NOTE: this should be the FIRST ACTION of the file
	$.ajax({
			type: "GET",
			url: "offers.json",
			async: false,
			dataType: "json"
		}).done(function(d) {
			data = d;
		}).fail(function(jqXHR, textStatus, err){
			throw err;
		});

	// render the offers using the shopItemTemplate
	$("#shopItemTemplate").tmpl(data.offers).appendTo("#shopItemContainer");

	// populate the number of adults dropdown
	function populateNumberOfAdults() {
		var select = $(".numberOfAdults"),
		i;

		for (i = 1; i <= 10; i++) {
			select.append($('<option></option>').val(i).html(i))
		}
	}

	populateNumberOfAdults();

	// toggles the menu under the 'ostoskoriin' button
	$('.toggleAddToCartMenu').click(function() {
		$(this).parent().parent().next('.addToCartButtonMenu').toggle();
	});

	// Add to Cart button click handler 
	$('.addToCart').click(function() {
		var clickedItemId = $(this).attr('id'),
			item,
			id,
			quantity = $(this).parent()
						.closest('.addToCartButtonMenu')
						.find('.numberOfAdults').val();

		$(this).parent().parent().hide();
		// split addToCart.id and grap the offer id from the string
		// for the id 3 format -> addToCart.3, 
		// for the id 5 -> addToCart.5 etc.
		id = clickedItemId.split('.')[1];

		// TODO: error handling 

		// get the corresponding item from the returned json array
		item = getItem(data.offers, id);

		if (item !== 0) {
			simpleCart.add({
				name: item.name,
				price: item.price,
				image: item.image,
				description: item.description,
				quantity: quantity
			});
		}
	});

	$('.offerName').click(function(){
		$(this).parent().parent().parent().find('.descriptionMenu').toggle();
	})

	/** gets the item by the id from the given items */
	function getItem(items, id) {
		var i,
			item;

		for (i in items) {
			item = items[i];
			if (item.id == id) {
				return item;
			}
		}

		return 0;
	}

}(jQuery));