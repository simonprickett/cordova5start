# cordova5start
##A leg up for Cordova 5 app development

This is a basic start point for Mac OS X users to build an app using:

* Cordova 5
* JQuery
* Bootstrap

You'll need to have Cordova 5.x installed and on your path.  Cordova depends on Node JS, so install that too.

To use, clone the repo then:

* Edit <cloned_repo_location>/app/config.xml, find and replace the following with your own preferences:
    * "org.crudworks.app" - app namespace
    * "0.0.1" - app version
    * "<name>App</name>" - app name
    * "simon@crudworks.org" - author email
    * "http://simonprickett.github.io" - author website
    * "Simon Prickett" - author name
* Open up a Terminal and:
    * cd <cloned_repo_location>/scripts
    * ./post_clone.sh
    * Runs a one off script that adds the Cordova platform files for Android and iOS, then installs the following boilerplate plugins that you are pretty much always going to need:
        * console
        * geolocation
        * splashscreen
		* device
		* network-information
* Then:
    * cd ../app
    * cordova build ios
    * cordova build android
* You should then see a generic Hello World! app that checks for Cordova's deviceready event and asks for permission to determine your geolocation

The app/resources folder contains:

* icons/android: Sample icon set for Android
* icons/ios: Sample icon set for iOS
* splash/android: Sample splash screen set for Android
* splash/ios: Sample splash screen set for iOS

Replace these with your own, and they will be copied into your project at the next build.

The app/www folder contains:

* index.html: Sample initial page to start the app
* css: Bootstrap CSS, plus custom.css - place overrides and extra styling here
* fonts: Fonts required for Bootstrap
* js: Bootstrap and JQuery JavaScript, app.js - place application logic here

Notes:

* This boilerplate is for an app in portrait orientation, which is set in app/config.xml and also in app/www/js/app.js where there is a handler to stop iOS devices from letting the app rotate to "upside down" portrait
* There are basic event handlers for common app lifecycle events that just log to the console:
    * Offline (lost network)
	* Online (regained network)
	* Geolocation obtained (got a position fix)
	* Geolocation error (failed to get a position fix)
	* Pause (app sent to background)
	* Resume (app brought to foreground)
	* Back button pressed (Android only)
	* Menu button pressed (Android only)
	* Search button pressed (Android only)
