createRestartButton();		
		
		
		
		
function createRestartButton() {		
		// Remove Upload button
		var uploadElement =  document.getElementById('uploadBtn');
		if (typeof(uploadElement) != 'undefined' && uploadElement != null)
		{
			uploadElement.parentNode.removeChild(uploadElement);
		}		

		
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
		  	createUploadButton();
		});
		
}



function createUploadButton() {
		// Remove Restart button
		var uploadElementRestart = document.getElementById('restartBtn');
		uploadElementRestart.parentNode.removeChild(uploadElementRestart);
		
		// Recreate the upload button
		var uploadDataButton = document.createElement("div");
		uploadDataButton.innerHTML = "Stop + Upload Data";
		
		// Append in main content area and append classes and id
		var positionUploadBtn = document.getElementById('main_content');
		positionUploadBtn.appendChild(uploadDataButton);
		uploadDataButton.className = "btn_standard btn_blue";
		uploadDataButton.setAttribute("id", "uploadBtn");
		
		// Add event handler
		uploadDataButton.addEventListener ("click", function() {
		  	createRestartButton();
		});
}