document.addEventListener('deviceready', setupGeolocation, false);

function setupGeolocation () {
    /**
     * This function will be executed every time a geolocation was got on the background.
     */
	 
	var testObject = [];	 // Array containing GPS location objects	 

    var callbackFn = function(location) {
		
		testObject.push([location.latitude, location.longitude, location.time]);
		
		
		
		// Store
		if(typeof(window.localStorage) != 'undefined'){ 
		localStorage.setItem('testObject', JSON.stringify(testObject));
		} else {
		alert("Tracking Data Not Accessible"); 
		}
		
		
		// Retrieve 
		var retrievedObject = localStorage.getItem('testObject');
		document.getElementById("result").innerHTML = retrievedObject;	


		
		
  
	  
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
        distanceFilter: 20,
        debug: false, // <-- Play sounds for background-geolocation life-cycle. Also will cause local notifications under iOS.
        stopOnTerminate: true,
		locationService: backgroundGeoLocation.service.ANDROID_FUSED_LOCATION,
    	interval: 30000 // <!-- poll for position every 5 secs 
	// <-- Clear background location settings when the app terminates
    });

    // Start tracking of user coords
    backgroundGeoLocation.start();
	
	
}















// Stop Capturing Data

$(document).ready(function(){
						   
$("#btnStopRecording").click(function(){ 
$("#btnStopRecording").hide(); 
$("#btnStartRecording").show(); 
// Stop tracking of user coords
backgroundGeoLocation.stop();

});

});





// Start Data Capture 

$(document).ready(function(){
						   
$("#btnStartRecording").click(function(){ 
$("#btnStartRecording").hide(); 
$("#btnStopRecording").show(); 
// Start tracking of user coords
backgroundGeoLocation.start();
});

});







// Clear Array

$(document).ready(function(){
						   
$("#btnClearData").click(function(){ 
document.getElementById("result").innerHTML = "";
testObject = [];
});

});
