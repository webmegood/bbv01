document.addEventListener('deviceready', setupGeolocation, false);




function setupGeolocation() {
	
	
	
		// Remove buttons
		var uploadElement =  document.getElementById('uploadBtn');
		if (typeof(uploadElement) != 'undefined' && uploadElement != null)
		{
			uploadElement.parentNode.removeChild(uploadElement);
		}		
		var restartElement = document.getElementById('restartBtn');
		if (typeof(restartElement) != 'undefined' && restartElement != null)
		{
			restartElement.parentNode.removeChild(restartElement);
		}		
				
		// Create upload button
		var uploadDataButton = document.createElement("div");
		uploadDataButton.innerHTML = "Stop + Upload Data";
		
		// Append in main content area and append classes and id
		var positionUploadBtn = document.getElementById('main_content');
		positionUploadBtn.appendChild(uploadDataButton);
		uploadDataButton.className = "btn_standard btn_blue";
		uploadDataButton.setAttribute("id", "uploadBtn");
		
		
		
		
		
		
		
		
		
		
		
		
	

    /**
    * This callback will be executed every time a geolocation is recorded in the background.
    */
	
	var testObject = [];	 // Array containing GPS location objects	 

	var callbackFn = function(location) {


		testObject.push([location.latitude, location.longitude, location.time]);



		// Store
		if(typeof(window.localStorage) != 'undefined'){ 
		//var gpsDataArray = JSON.stringify(testObject);
		var gpsDataArray = JSON.stringify(testObject);
		localStorage.setItem('testObject', gpsDataArray);
		//localStorage.setItem('testObject', JSON.stringify(testObject));
		
		//send to database once meeting conditions. (if connected, try straight away then wait 60 seconds.)
		
		
		
		// Add event handler to button
		uploadDataButton.addEventListener ("click", function() {
			backgroundGeolocation.stop(); //this will stop the tracking
		  	sendtodatabase(gpsDataArray);
		});


		
		} else {
		alert("GPS Data Not Available"); 
		}
		
		
		// Retrieve 
		var retrievedObject = localStorage.getItem('testObject');
		document.getElementById("result").innerHTML = retrievedObject;	


       // backgroundGeolocation.finish();
		
    };
	
	
	
	

    var failureFn = function(error) {
        console.log('BackgroundGeolocation error');
    };
	
	
	
	
	

    // BackgroundGeolocation is highly configurable. See platform specific configuration options
    backgroundGeolocation.configure(callbackFn, failureFn, {
        desiredAccuracy: 10,
        stationaryRadius: 10,
        distanceFilter: 10,
    	interval: 30000, // <!-- poll for position every 30 secs 
		//locationService: backgroundGeoLocation.service.ANDROID_FUSED_LOCATION,
        debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
        stopOnTerminate: false // <-- enable this to clear background location settings when the app terminates
    });

    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    backgroundGeolocation.start();

    // If you wish to turn OFF background-tracking, call the #stop method.
    // backgroundGeolocation.stop();
	
	
	
	
	
	
	
	
function sendtodatabase(arrayValues){

$.ajax({
url: 'http://www.mediathrong.com/beepboards/tracking/scripts/gps_check.php',
type: 'POST',
data: {data: arrayValues},
cache: false,
success: function(output){
dit = output;
},
error: function (request, status, error) {
}
});

//alert("Your data has been uploaded. Thankyou.");



createRestartButton();


}








function createRestartButton() {		
		
		// Remove Upload button
		var uploadElement =  document.getElementById('uploadBtn');
		uploadElement.parentNode.removeChild(uploadElement);
		
		// Create Restart button
		var restartButton = document.createElement("div");
		restartButton.innerHTML = "Restart";

		// Append Restart button in main content area and append classes and id
		var positionRestartBtn = document.getElementById('main_content');
		positionRestartBtn.appendChild(restartButton);
		restartButton.className = "btn_standard btn_blue";
		restartButton.setAttribute("id", "restartBtn");

		// Add event handler
		restartButton.addEventListener ("click", function() {
		  	setupGeolocation();
		});
		
}














}





