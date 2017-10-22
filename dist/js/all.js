function prepareResultDictionary() {
	var id = 484907;
	var url = "https://api.openweathermap.org/data/2.5/weather?id=" + id + "&units=metric&APPID=95ccb29f3ee760c73717ed3ff8d3f762";
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.send();

	xhr.onreadystatechange = function() {
	  if (xhr.readyState != XMLHttpRequest.DONE) return;

	  if (xhr.status != 200) {
	    alert(xhr.status + ': ' + xhr.statusText);
	  } else {
		var responseText = xhr.responseText;
		var weatherDictionary = JSON.parse(responseText);
		var resultDictionary = createDictionary(weatherDictionary);
		updateUI(resultDictionary);
	  }
	}
}

function updateUI(weather) {
	document.getElementById("temp").innerHTML = weather["temp"] + "&#176";
	document.getElementById("wind").innerHTML = weather["speed"] + " m/s";
	document.getElementById("description").innerHTML = weather["description"];
	document.getElementById("humidity").innerHTML = weather["humidity"] + "%";
}

function prepareInitialDictionary() {
	var initialDictionary = createDictionary(null);
	updateUI(initialDictionary);
}

function createDictionary(weatherDictionary) {
	var resultDictionary = {};
	if(weatherDictionary) {
		resultDictionary["description"] = weatherDictionary["weather"][0]["description"];
		resultDictionary["temp"] = weatherDictionary["main"]["temp"];
		resultDictionary["speed"] = weatherDictionary["wind"]["speed"];
		resultDictionary["humidity"] = weatherDictionary["main"]["humidity"];
	} else {
		resultDictionary["description"] = "-";
		resultDictionary["temp"] = "-";
		resultDictionary["speed"] = "-";
		resultDictionary["humidity"] = "-";
	}
	return resultDictionary;
}

var timerId = setInterval(function() {
	prepareResultDictionary()
}, 60000);

setTimeout(function() {
  clearInterval(timerId);
  alert("stop");
}, 120000);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBwcmVwYXJlUmVzdWx0RGljdGlvbmFyeSgpIHtcclxuXHR2YXIgaWQgPSA0ODQ5MDc7XHJcblx0dmFyIHVybCA9IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/aWQ9XCIgKyBpZCArIFwiJnVuaXRzPW1ldHJpYyZBUFBJRD05NWNjYjI5ZjNlZTc2MGM3MzcxN2VkM2ZmOGQzZjc2MlwiO1xyXG5cdFxyXG5cdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHR4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG5cdHhoci5zZW5kKCk7XHJcblxyXG5cdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHQgIGlmICh4aHIucmVhZHlTdGF0ZSAhPSBYTUxIdHRwUmVxdWVzdC5ET05FKSByZXR1cm47XHJcblxyXG5cdCAgaWYgKHhoci5zdGF0dXMgIT0gMjAwKSB7XHJcblx0ICAgIGFsZXJ0KHhoci5zdGF0dXMgKyAnOiAnICsgeGhyLnN0YXR1c1RleHQpO1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdHZhciByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0dmFyIHdlYXRoZXJEaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xyXG5cdFx0dmFyIHJlc3VsdERpY3Rpb25hcnkgPSBjcmVhdGVEaWN0aW9uYXJ5KHdlYXRoZXJEaWN0aW9uYXJ5KTtcclxuXHRcdHVwZGF0ZVVJKHJlc3VsdERpY3Rpb25hcnkpO1xyXG5cdCAgfVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVUkod2VhdGhlcikge1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKS5pbm5lckhUTUwgPSB3ZWF0aGVyW1widGVtcFwiXSArIFwiJiMxNzZcIjtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIikuaW5uZXJIVE1MID0gd2VhdGhlcltcInNwZWVkXCJdICsgXCIgbS9zXCI7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS5pbm5lckhUTUwgPSB3ZWF0aGVyW1wiZGVzY3JpcHRpb25cIl07XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKS5pbm5lckhUTUwgPSB3ZWF0aGVyW1wiaHVtaWRpdHlcIl0gKyBcIiVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZUluaXRpYWxEaWN0aW9uYXJ5KCkge1xyXG5cdHZhciBpbml0aWFsRGljdGlvbmFyeSA9IGNyZWF0ZURpY3Rpb25hcnkobnVsbCk7XHJcblx0dXBkYXRlVUkoaW5pdGlhbERpY3Rpb25hcnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEaWN0aW9uYXJ5KHdlYXRoZXJEaWN0aW9uYXJ5KSB7XHJcblx0dmFyIHJlc3VsdERpY3Rpb25hcnkgPSB7fTtcclxuXHRpZih3ZWF0aGVyRGljdGlvbmFyeSkge1xyXG5cdFx0cmVzdWx0RGljdGlvbmFyeVtcImRlc2NyaXB0aW9uXCJdID0gd2VhdGhlckRpY3Rpb25hcnlbXCJ3ZWF0aGVyXCJdWzBdW1wiZGVzY3JpcHRpb25cIl07XHJcblx0XHRyZXN1bHREaWN0aW9uYXJ5W1widGVtcFwiXSA9IHdlYXRoZXJEaWN0aW9uYXJ5W1wibWFpblwiXVtcInRlbXBcIl07XHJcblx0XHRyZXN1bHREaWN0aW9uYXJ5W1wic3BlZWRcIl0gPSB3ZWF0aGVyRGljdGlvbmFyeVtcIndpbmRcIl1bXCJzcGVlZFwiXTtcclxuXHRcdHJlc3VsdERpY3Rpb25hcnlbXCJodW1pZGl0eVwiXSA9IHdlYXRoZXJEaWN0aW9uYXJ5W1wibWFpblwiXVtcImh1bWlkaXR5XCJdO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXN1bHREaWN0aW9uYXJ5W1wiZGVzY3JpcHRpb25cIl0gPSBcIi1cIjtcclxuXHRcdHJlc3VsdERpY3Rpb25hcnlbXCJ0ZW1wXCJdID0gXCItXCI7XHJcblx0XHRyZXN1bHREaWN0aW9uYXJ5W1wic3BlZWRcIl0gPSBcIi1cIjtcclxuXHRcdHJlc3VsdERpY3Rpb25hcnlbXCJodW1pZGl0eVwiXSA9IFwiLVwiO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0RGljdGlvbmFyeTtcclxufVxyXG5cclxudmFyIHRpbWVySWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRwcmVwYXJlUmVzdWx0RGljdGlvbmFyeSgpXHJcbn0sIDYwMDAwKTtcclxuXHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcclxuICBhbGVydChcInN0b3BcIik7XHJcbn0sIDEyMDAwMCk7Il19
