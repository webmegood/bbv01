document.addEventListener('deviceready', setupGeolocation, false);

function setupGeolocation () {
    /**
     * This function will be executed every time a geolocation was got on the background.
     */
    var callbackFn = function(location) {
          // Console.log only is here. You need to setup your own data interaction here
      // console.log('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);
      
		alert('Latitude: '          + location.latitude          + '\n' +
              'Longitude: '         + location.longitude         + '\n');	  
	  
	  /*
      IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
      and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
      IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
      */
      backgroundGeoLocation.finish();
    };

      /**
      * Error handler
      */
    var failureFn = function(error) {
      console.log('BackgroundGeoLocation error');
	  
		alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');	  
	  
    };

    // A lot of options is available here, you can see them all on plugin repo (see link below)
    backgroundGeoLocation.configure(callbackFn, failureFn, {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 30,
        debug: true, // <-- Play sounds for background-geolocation life-cycle. Also will cause local notifications under iOS.
        stopOnTerminate: false, // <-- Clear background location settings when the app terminates
    });

    // Start tracking of user coords
    backgroundGeoLocation.start();

    // Stop tracking of user coords
    // backgroundGeoLocation.stop();
}



