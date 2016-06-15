document.addEventListener('deviceready', setupGeolocation, false);

function setupGeolocation () {
    /**
     * This function will be executed every time a geolocation was got on the background.
     */
	 
	var testObject = [];	 // Array containing GPS location objects	 

    var callbackFn = function(location) {
		
		testObject.push(location);
		alert('Latitude: ' + location.latitude + '\n' + 'Longitude: ' + location.longitude + '\n');  
		
		// Store
		localStorage.setItem('testObject', JSON.stringify(testObject));

      backgroundGeoLocation.finish();
    };

      /**
      * Error handler
      */
    var failureFn = function(error) {
	  
		//alert('error');	  
	  
    };

    // A lot of options is available here, you can see them all on plugin repo (see link below)
    backgroundGeoLocation.configure(callbackFn, failureFn, {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 20,
        debug: false, // <-- Play sounds for background-geolocation life-cycle. Also will cause local notifications under iOS.
        stopOnTerminate: true,
		locationService: backgroundGeoLocation.service.ANDROID_FUSED_LOCATION,
    	interval: 3000 // <!-- poll for position every x secs 
	// <-- Clear background location settings when the app terminates
    });

    // Start tracking of user coords
    backgroundGeoLocation.start();
	
	
}







