"use strict";

(function($){
		
	simpleCart({
		// "div" or "table" - builds the cart as a
    	// table or collection of divs
    	cartStyle: "div", 
    	// set the currency, see the currency
    	// reference for more info
    	currency: "EUR",
    	cartColumns: [
    	{ view: "image", attr: "image", label: false},
        { attr: "name", label: "Nimi"},
        { view: "currency", attr: "price", label: "Hinta"},
        { view: "description", attr: "description", label: "Kuvaus"},
        { view: "decrement", label: false},
        { attr: "quantity", label: "Määrä"},
        { view: "increment", label: false},
        { view: "currency", attr: "total", label: "Yhteensä" },
        { view: "remove", text: "Poista", label: false}
        
    	],
	});

}(jQuery));