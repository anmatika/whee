## 1. ABSTRACT

Showing travelling agent Whee's travel deal offers. The data comes from the static JSON file "offers.json".
The data are shown on the main page where user can browse the deals and add them into the shopping cart. The shopping cart can be modified by adding and removing items. Once the cart is ready, checking out directs to Paypal. 

## 2. USAGE

NOTE: Does not work on IE if protected mode is set on. Simplecart uses HTML5 localstorage which gives an access denied error if the protected mode set on. More info here: https://github.com/MrSwitch/hello.js/issues/35

If no web server configured,
just open `index.html` on Firefox. Firefox allows loading data from external files locally   (file:///index.html) out of the box. 

Other browsers should be configured running things locally. More info here:
https://github.com/mrdoob/three.js/wiki/How-to-run-things-locally

Or if you want to set-up http-server for this, follow these instructions
https://github.com/skeelogy/ifc-ar-flood/wiki/Running-The-HTML-Files-Locally-In-Your-Web-Browser
And run `http-server` in the root folder

## 3. DEV

Install dependencies by running the following commands in the root folder
 
`npm install`

`bower install`

Automatic sass -> css conversion, jshint and dependency injection by running 

`grunt`


## 4. PROJECT STRUCTURE
```
 +css  (css files, compiled from sass)
 +sass (sass files)
 +fonts (glyphicons) 
 +images
 +js (javascripts)
 +bower_components (bower installed vendor components)
 +node_modules - (tools, basically for grunt)
 index.html (the main page)
 offers.json (data source file)
 Gruntfile.js (grunt js automation)
 package.json (node_module package config)
 bower.json (bower components config)
```

## 5. TECHNICAL DETAILS

* The cart is based on Simplecartjs.
* The initial look and feel is based on the free bootsrap template shop-homepage
* jQuery.tmpl is used for templating the offer items
 

## 6. DEPENDENCIES
	
### 6.1 Simplecart js
	http://simplecartjs.org/documentation

### 6.2 jQuery tmpl    
    https://github.com/BorisMoore/jquery-tmpl

### 6.3 Bootstrap
	http://getbootstrap.com/

### 6.4 jQuery
	jquery.com/

## 7. TOOLS

### 7.1 npm
Node package manager for getting the tools

### 7.2 Bower
For getting dependencies

### 7.3 Wiredep
For injecting bower componenents automatically into the app

### 7.3 Compass + SASS
Compass for automatic sass -> css conversion.

### 7.4 Grunt
For automating js tasks
