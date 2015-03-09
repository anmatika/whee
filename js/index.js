(function($) {
	"use strict";
	var data;

	// get the offers, wait for completion
	// NOTE: this should be the FIRST ACTION of the file
	$.ajax({
			type: "GET",
			url: $('body').data('offers'),
			// url: "base/offers.json",
			async: false,
			dataType: "json"
		}).done(function(d) {
			data = d;
		}).fail(function(jqXHR, textStatus, err){
			throw err;
		});

	// render the offers using the shopItemTemplate
	$("#shopItemTemplate").tmpl(data.offers).appendTo("#shopItemContainer");

	// populates the number of adults dropdowns
	function populateNumberOfAdults() {
		var select = $(".numberOfAdults"),
		i;

		for (i = 1; i <= 10; i++) {
			select.append($('<option></option>').val(i).html(i));
		}
	}

	populateNumberOfAdults();

	// toggles the menu under the 'ostoskoriin' button
	$('.toggleAddToCartMenu').click(function() {
		$(this).parent().parent().next('.addToCartButtonMenu').toggle();
	});

	// adds the offer item into the cart 
	$('.addToCart').click(function() {
		var clickedItemId = $(this).attr('id'),
			item,
			id,
			quantity = $(this).parent()
						.closest('.addToCartButtonMenu')
						.find('.numberOfAdults').val();

		$(this).parent().parent().hide();		
		
		// split addToCart.id and grap the offer id from the string
		// e.g for the offer id 3 format -> addToCart.3, 
		// for the id 5 -> addToCart.5 etc.
		id = clickedItemId.split('.');
		if(id.length < 2){
			console.error('Cannot add into the shopping cart. Item cannot be parsed');
			return;
		}
		id = id[1];

		// get the corresponding item from the offers.json array
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

	// toggles the visibility of the offer description
	$('.offerName').click(function(){
		$(this).parent().parent().parent().find('.descriptionMenu').toggle();
	});

	// gets the item by the id from the items array
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