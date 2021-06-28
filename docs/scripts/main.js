window.onload = initContentBasedOnLang;

document.getElementById('englishBtn').addEventListener('click', function() { init(englishJson);});
document.getElementById('hindiBtn').addEventListener('click', function() { init(hindiJson); });

function initContentBasedOnLang() {
    if (userSpeaksHindi()) { //see language.js
        init(hindiJson);
    } else {
        init(englishJson);
    }
}

function init(data) {
    var convertedData = convertJson(data); // see data.js
    updateStatistics();
    resetEventListenerForSelector(convertedData);
    populateHtml(data, convertedData);
}

function updateStatistics(city, convertedData) {
    var statistics = document.getElementById('statistics');
    statistics.innerHTML = '';
    var numOfCiggs = 0;
    if (convertedData) {
        var citiesData = convertedData['compare-tabs']['1']['city'];
        for (var key in citiesData) {
            if (citiesData[key]['name'] === city) {
                numOfCiggs = parseInt(citiesData[key]['cigg']);
                statistics.innerHTML = '(' + citiesData[key]['cigg'] + ' cigg. = ' + citiesData[key]['aqi'] + ')';
            }
        }
    }
    displayCigs(numOfCiggs);
}

function resetEventListenerForSelector(convertedData) {
    var oldSelectorEl = document.getElementById('city-select');
    var newSelectorEl = oldSelectorEl.cloneNode(true);
    oldSelectorEl.parentNode.replaceChild(newSelectorEl, oldSelectorEl); // cleaning event listeners (if any)
    newSelectorEl.addEventListener('change', function(e) {handleSelect(e,convertedData)});
}

function handleSelect(e, convertedData) {
    updateStatistics(e.target.value, convertedData);
}

function populateHtml(data, convertedData) {
    populateCitySelector(convertedData);
    populateText(data);
}

function populateCitySelector(convertedData) {
    var sortedCitiesList = getSortedCitiesList(convertedData['compare-tabs']['1']['city']); //see data.js
    var citySelect = document.getElementById('city-select');
    citySelect.innerHTML = '<option id="compare-tabs_1_title" value="">Select your city</option>';

    sortedCitiesList.forEach(function(city) {
        var newOption = document.createElement('option');
        newOption.value = city;
        newOption.innerText = city;
        citySelect.appendChild(newOption);
    });
}

function populateText(data) {
    for (var key in data) {
        var htmlElement = document.getElementById(key);
        if (htmlElement) {
            if (key.indexOf('url') !== -1){
                htmlElement.href = data[key];
            }
            htmlElement.innerHTML = data[key];
        }
    }
}

function displayCigs(num) {
    var display = document.getElementById('cigarettes_display');
    display.innerHTML = '';
    for (var i = 0; i < num; i++) {
        var ciggImg = document.createElement('img');
        ciggImg.src = "img/ciggrette_icon.png";
        ciggImg.alt = "Ciggarete image";
        display.appendChild(ciggImg);
    }
}




