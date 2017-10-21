function prepareResultDictionary(){var e=new XMLHttpRequest;e.open("GET","https://api.openweathermap.org/data/2.5/weather?id=484907&units=metric&APPID=95ccb29f3ee760c73717ed3ff8d3f762",!0),e.send(),e.onreadystatechange=function(){if(e.readyState==XMLHttpRequest.DONE)if(200!=e.status)alert(e.status+": "+e.statusText);else{var t=e.responseText;updateUI(createDictionary(JSON.parse(t)))}}}function updateUI(e){document.getElementById("temp").innerHTML=e.temp+"&#176",document.getElementById("wind").innerHTML=e.speed+" m/s",document.getElementById("description").innerHTML=e.description,document.getElementById("humidity").innerHTML=e.humidity+"%"}function prepareInitialDictionary(){updateUI(createDictionary(null))}function createDictionary(e){var t={};return e?(t.description=e.weather[0].description,t.temp=e.main.temp,t.speed=e.wind.speed,t.humidity=e.main.humidity):(t.description="-",t.temp="-",t.speed="-",t.humidity="-"),t}var timerId=setInterval(function(){prepareResultDictionary()},6e4);setTimeout(function(){clearInterval(timerId),alert("stop")},12e4);