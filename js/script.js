function showConditions() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=484907&APPID=95ccb29f3ee760c73717ed3ff8d3f762", true);
	xhr.send();

	xhr.onreadystatechange = function() {
	  if (xhr.readyState != XMLHttpRequest.DONE) return;

	  if (xhr.status != 200) {
	    alert(xhr.status + ': ' + xhr.statusText);
	  } else {
	    alert(xhr.responseText);
		
		var responseText = xhr.responseText;

		var parsedText = JSON.parse(responseText);

		document.getElementById('result').innerHTML = parsedText.dt;

	  }

	}

}