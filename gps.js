document.addEventListener('deviceready', setupGeolocation, false);

function setupGeolocation () {
    /**
     * This function will be executed every time a geolocation was got on the background.
     */
	 
	var tracking_data = []; // Array containing GPS location objects	 
	 
	 
    var callbackFn = function(location) {
		
		tracking_data.push(location);
		alert('Latitude: ' + location.latitude + '\n' + 'Longitude: ' + location.longitude + '\n');  
  
	  
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
	  
		//alert('error');	  
	  
    };

    // A lot of options is available here, you can see them all on plugin repo (see link below)
    backgroundGeoLocation.configure(callbackFn, failureFn, {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 30,
        debug: true, // <-- Play sounds for background-geolocation life-cycle. Also will cause local notifications under iOS.
        stopOnTerminate: false,
		locationService: backgroundGeoLocation.service.ANDROID_FUSED_LOCATION,
    	interval: 30000 // <!-- poll for position every 30 secs 
	// <-- Clear background location settings when the app terminates
    });

    // Start tracking of user coords
    backgroundGeoLocation.start();

    // Stop tracking of user coords
    // backgroundGeoLocation.stop();
	
	
}

















$(document).ready(function(){
						   
$("#btnStopRecording").click(function(){ 
									
									
					
					
   
// Stop tracking the user
backgroundGeoLocation.stop();

// Save the tracking data
//window.localStorage.setItem(track_id, JSON.stringify(tracking_data));
 
// Reset tracking_data 
var tracking_data = null;					
					
					
					
					
$("#tracking_status").html("Stopped tracking data");
									  
	
    backgroundGeoLocation.getLocations(function(locations, taskId) {
        try {
            console.log("locations: ", locations);
        } catch(e) {
            console.error("An error occurred in my application code");
        }
        bgGeo.finish(taskId);
    });
	
	
	
	

});

});
