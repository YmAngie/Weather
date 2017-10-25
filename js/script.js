function prepareResultDictionary() {
	const id = 484907;
	const url = 'https://api.openweathermap.org/data/2.5/weather?id=' + id + '&units=metric&APPID=95ccb29f3ee760c73717ed3ff8d3f762';
	
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.send();

	xhr.onreadystatechange = function() {
		if (xhr.readyState != XMLHttpRequest.DONE) return;

		if (xhr.status != 200) {
			alert(xhr.status + ': ' + xhr.statusText);
		} else {
		const responseText = xhr.responseText;
		const weatherDictionary = JSON.parse(responseText);
		const resultDictionary = createDictionary(weatherDictionary);
		updateUI(resultDictionary);
		}
	}
}

function updateUI(weather) {
	document.getElementById('temp').innerHTML = weather['temp'] + '&#176';
	document.getElementById('wind').innerHTML = weather['speed'] + ' m/s';
	document.getElementById('description').innerHTML = weather['description'];
	document.getElementById('humidity').innerHTML = weather['humidity'] + '%';
}

function prepareInitialDictionary() {
	const initialDictionary = createDictionary(null);
	updateUI(initialDictionary);
}

function createDictionary(weatherDictionary) {
	const resultDictionary = {};
	if(weatherDictionary) {
		resultDictionary['description'] = weatherDictionary['weather'][0]['description'];
		resultDictionary['temp'] = weatherDictionary['main']['temp'];
		resultDictionary['speed'] = weatherDictionary['wind']['speed'];
		resultDictionary['humidity'] = weatherDictionary['main']['humidity'];
	} else {
		resultDictionary['description'] = '-';
		resultDictionary['temp'] = '-';
		resultDictionary['speed'] = '-';
		resultDictionary['humidity'] = '-';
	}
	return resultDictionary;
}

const timerId = setInterval(function() {
	prepareResultDictionary()
}, 60000);

setTimeout(function() {
	clearInterval(timerId);
	alert('stop');
}, 120000);
