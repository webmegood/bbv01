document.addEventListener('deviceready', setupGeolocation, false);

function setupGeolocation () {
    /**
     * This function will be executed every time a geolocation was got on the background.
     */
	 
	var testObject = [];	 // Array containing GPS location objects	 

    var callbackFn = function(location) {
		
		//testObject.push(location);
		testObject.push([location.latitude, location.longitude]);
		//alert('Latitude: ' + location.latitude + '\n' + 'Longitude: ' + location.longitude + '\n');  
		
		
		
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
        distanceFilter: 30,
        debug: true, // <-- Play sounds for background-geolocation life-cycle. Also will cause local notifications under iOS.
        stopOnTerminate: false,
		locationService: backgroundGeoLocation.service.ANDROID_FUSED_LOCATION,
    	interval: 5000 // <!-- poll for position every 5 secs 
	// <-- Clear background location settings when the app terminates
    });

    // Start tracking of user coords
    backgroundGeoLocation.start();
	
	
}

















$(document).ready(function(){
						   
$("#btnStopRecording").click(function(){ 
									

//var testObject = {'fefewf': 1, '000': 2, 'three': 3};
//var testObject = [[-373597200000, 315.71], [-370918800000, 317.45], [-368326800000, 317.50]];


//alert(testObject);
//alert('Latitude: ' + location.latitude + '\n' + 'Longitude: ' + location.longitude + '\n');  



// Store

if(typeof(window.localStorage) != 'undefined'){ 
localStorage.setItem('testObject', JSON.stringify(testObject));
} else {
alert("Tracking Data Not Accessible"); 
}


// Stop tracking of user coords
//backgroundGeoLocation.stop();


});

});







$(document).ready(function(){
						   
$("#btnViewData").click(function(){ 
									




// Retrieve 
var retrievedObject = localStorage.getItem('testObject');
document.getElementById("result").innerHTML = retrievedObject;	

alert(retrievedObject);

	

});

});







// Clear Array

$(document).ready(function(){
						   
$("#btnClearData").click(function(){ 
									
document.getElementById("result").innerHTML = "";	

});

});
