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
		
		// Add event handler
		uploadDataButton.addEventListener ("click", function() {
			//backgroundGeolocation.stop(); //this will stop the tracking
		  	//sendtodatabase(gpsDataArray);
		});

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
		  	setupGeolocation ();
		});
		
}
