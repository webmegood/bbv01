
				
		// Remove Upload button (if it exists)
		var uploadElement =  document.getElementById('uploadBtn');
		if (typeof(element) != 'undefined' && element != null)
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
