document.addEventListener('deviceready', setupGeolocation, false);

function setupGeolocation () {

    /**
    * This callback will be executed every time a geolocation is recorded in the background.
    */
	
	var testObject = [];	 // Array containing GPS location objects	 

	var callbackFn = function(location) {


		testObject.push([location.latitude, location.longitude, location.time]);



		// Store
		if(typeof(window.localStorage) != 'undefined'){ 
		//var gpsDataArray = JSON.stringify(testObject);
		//localStorage.setItem('testObject', gpsDataArray);
		localStorage.setItem('testObject', JSON.stringify(testObject));
		} else {
		alert("GPS Data Not Available"); 
		}
		
		
		// Retrieve 
		var retrievedObject = localStorage.getItem('testObject');
		document.getElementById("result").innerHTML = retrievedObject;	


		//sendtodatabase(gpsDataArray);




        /*
        IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
        and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
        IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
        */
        backgroundGeolocation.finish();
    };

    var failureFn = function(error) {
        console.log('BackgroundGeolocation error');
    };

    // BackgroundGeolocation is highly configurable. See platform specific configuration options
    backgroundGeolocation.configure(callbackFn, failureFn, {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 20,
        debug: false, // <-- Play sounds for background-geolocation life-cycle. Also will cause local notifications under iOS.
        stopOnTerminate: true,
		locationService: backgroundGeoLocation.service.ANDROID_FUSED_LOCATION,
    	interval: 3000 // <!-- poll for position every x secs 
	// <-- Clear background location settings when the app terminates
    });

    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    backgroundGeolocation.start();

    // If you wish to turn OFF background-tracking, call the #stop method.
    // backgroundGeolocation.stop();
}