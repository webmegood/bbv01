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
		
		
		
		
		
		
		
		
		
		







}





