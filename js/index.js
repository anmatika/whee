(function($){
	
	$.getJSON( "offers.json", function( data ) {		
		console.log(data);
		// Render the offers using the shopItemTemplate
        $("#shopItemTemplate").tmpl(data.offers).appendTo("#shopItemContainer");     

        // Add to Cart button click handler 
        // event handlers can be bound only after template has been loaded
        $('.addToCart').click(function(){
			
			// for the id 3 format -> addToCart.3, for the id 5 -> addToCart.5 etc.
			var clickedItemId = $(this).attr('id'),
			item,
			id;
			
			// split addToCart.id and grap the id from the string
			id = clickedItemId.split('.')[1];	 	
		 	
			// TODO: error handling 

		 	// get the corresponding item from the returned json array
		 	item = getItem(data.offers, id);
			console.log('price: ' + item.price);
			simpleCart.add({ name: item.name , price: item.price , size: "Small" });		 	
		});   
	});

	/** get the item by the id from the given items */
	function getItem (items, id){
		
		var i,
		item;	

		for (i in items){
			
			item = items[i];
			if(item.id == id){
				return item;
			}
		}

		return 0;
	}

	$('#cart').click(function(){
		$('#simpleCartWrapper')
		.css({ right: 0 })
		.toggle("slow");
	})

	

}(jQuery));