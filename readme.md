## 1. ABSTRACT

Showing travelling agent Whee's travel deal offers. The data comes from the static JSON file "offers.json".
The data are shown on the main page where user can browse the deals and add them into the shopping cart. 

## 2. USAGE

Open `index.html` on any browser. Tested on Firefox only, though.

## 3. DEV

Install dependencies by running in the root folder
 
`npm install`

`bower install`

Automatic sass -> css conversion and bower injection by running 

`grunt`


## 4. PROJECT STRUCTURE
```
 +css  (sass compiled css)
 +sass (sass styles)
 +fonts (glyphicons) 
 +images
 +js (javascripts)
 +bower_components (bower installed vendor components)
 +node_modules - (node modules (basically grunt components))
 index.html (main page)
 offers.json (travel offer data file)
```

## 5. TECHNICAL DETAILS

* Cart is based on Simplecartjs.
* The initial look and feel is based on the free bootsrap temlate shop-homepage
* jQuery.tmpl is used for templating the offer item
 

## 6. COMPONENTS USED
	
### 6.1 Simplecart js
	http://simplecartjs.org/documentation

### 6.2 jQuery tmpl    
    https://github.com/BorisMoore/jquery-tmpl

### 6.3 Bootstrap

### 6.4 jQuery

## 7. TOOLS

### 7.1 npm
Node package manager

### 7.2 Bower
For getting dependecies

### 7.3 Wiredep
For injecting bower componenents into the app


### 7.3 Compass + SASS
Compass for automatic sass -> css conversion.


### 7.4 Grunt
Automated js tasks
