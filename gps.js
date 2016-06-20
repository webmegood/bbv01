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
		var gpsDataArray = JSON.stringify(testObject);
		localStorage.setItem('testObject', gpsDataArray);
		//localStorage.setItem('testObject', JSON.stringify(testObject));
		
		//send to database once meeting conditions. (if connected, try straight away then wait 60 seconds.)
		
		// 1. Create the button
		var uploadDataButton = document.createElement("button");
		uploadDataButton.innerHTML = "Do Something";
		
		// 2. Append somewhere
		var positionUploadBtn = document.getElementById('main_content');
		positionUploadBtn.appendChild(uploadDataButton);
		
		
		uploadDataButton.className = "btn_standard btn_blue";

		
		
		// 3. Add event handler
		uploadDataButton.addEventListener ("click", function() {
		  sendtodatabase(gpsDataArray);
		});



		
		} else {
		alert("GPS Data Not Available"); 
		}
		
		
		// Retrieve 
		var retrievedObject = localStorage.getItem('testObject');
		document.getElementById("result").innerHTML = retrievedObject;	





        backgroundGeolocation.finish();
    };

    var failureFn = function(error) {
        console.log('BackgroundGeolocation error');
    };

    // BackgroundGeolocation is highly configurable. See platform specific configuration options
    backgroundGeolocation.configure(callbackFn, failureFn, {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 30,
        debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
        stopOnTerminate: false, // <-- enable this to clear background location settings when the app terminates
    });

    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    backgroundGeolocation.start();

    // If you wish to turn OFF background-tracking, call the #stop method.
    // backgroundGeolocation.stop();
	
}


function sendtodatabaseTemp(arrayValues){

alert(arrayValues);

}





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

alert("Your data has been uploaded. Thankyou.");

}


