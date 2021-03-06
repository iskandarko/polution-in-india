function convertJson(data) {
    var resultObj = {};
    for (var key in data) {
       createObjectStructure(key.split('_'), resultObj, data[key]);
    }
    return resultObj;
}

function createObjectStructure(arr, obj, value) {
    var item = arr.shift();
    if (arr.length === 0) {
        obj[item] = value;
        return obj;
    } else {
        if (!obj[item]) {
            obj[item] = {};
        }
        createObjectStructure(arr, obj[item], value);
    }
}

function getSortedCitiesList(convertedData) {
    var citiesList = [];
    for (var key in convertedData) {
        citiesList.push(convertedData[key]['name']);
    }
    citiesList.sort(function(a,b) {
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        else return 0;
    });
    return citiesList;
}


var englishJson = {
    "hero_1_image": "https://news.files.bbci.co.uk/vj/live/idt-images/image-slider-hello/SMOG_vdyw4.jpg",
    "hero_1_title": "Delhi smog: How many cigarettes did you smoke this week?",
    "article-info_1_byline": "By me!",
    "article-info_1_date": "20 November 2017",
    "article-info_1_category": "India",
    "article-info_1_category_url": "http://www.bbc.co.uk/news/world/asia/india",
    "p_1_value": "Breathing in Delhi is close to smoking more than a dozen cigarettes a day on an average. Click on your city to find out how many cigarettes you are smoking",
    "total_cities_1_value": "32",
    "p_2_value": "On November 7, Indian capital, Delhi woke up to a blanket of thick grey smog.  The toxic haze was so severe that politicians announced plans to close schools.  United Airlines shut all of its flights from the US to Delhi. Visibility was poor as pollution levels reached 30 times the World Health Organization's recommended limit in some areas.",
    "p_3_value": "According to the data from the System of Air Quality Weather Forecasting and Research website, the levels of tiny particulate matter (known as PM 2.5) that enter deep into the lungs reached as high as 700 micrograms per cubic metre in some areas of Delhi on November 6th. The air quality standard for PM 2.5 is 15 ??g/m3 and anything above 81 ??g/m3 falls under poor air quality standard.",
    "p_4_value": "Some reports claimed that New Delhi's air quality was so severe it was equivalent to smoking 45 cigarettes a day. We looked at the data to see if this was true. ",
    "p_5_value": "Click on your city to find out how many cigarettes you have effectively smoked because of last week's pollution.",
    "compare-tabs_1_method": "1 cigarette is equivalent to an air pollution of 22 ??g/m3 (Absolute value: 21.6 ??g/m3) for one day.",
    "compare-tabs_1_title": "Select your city",
    "compare-tabs_1_city_1_name": "Ghaziabad",
    "compare-tabs_1_city_1_aqi": "283 PM2.5",
    "compare-tabs_1_city_1_cigg": "12",
    "compare-tabs_1_city_2_name": "Noida",
    "compare-tabs_1_city_2_aqi": "213 PM2.5",
    "compare-tabs_1_city_2_cigg": "10",
    "compare-tabs_1_city_3_name": "Delhi",
    "compare-tabs_1_city_3_aqi": "235 PM2.5",
    "compare-tabs_1_city_3_cigg": "10",
    "compare-tabs_1_city_4_name": "Lucknow",
    "compare-tabs_1_city_4_aqi": "158 PM2.5",
    "compare-tabs_1_city_4_cigg": "7",
    "compare-tabs_1_city_5_name": "Gurugram",
    "compare-tabs_1_city_5_aqi": "254 PM2.5",
    "compare-tabs_1_city_5_cigg": "11",
    "compare-tabs_1_city_6_name": "Faridabad",
    "compare-tabs_1_city_6_aqi": "220 PM2.5",
    "compare-tabs_1_city_6_cigg": "10",
    "compare-tabs_1_city_7_name": "Varanasi",
    "compare-tabs_1_city_7_aqi": "122 PM2.5",
    "compare-tabs_1_city_7_cigg": "5",
    "compare-tabs_1_city_8_name": "Kanpur",
    "compare-tabs_1_city_8_aqi": "268 PM2.5",
    "compare-tabs_1_city_8_cigg": "12",
    "compare-tabs_1_city_9_name": "Patna",
    "compare-tabs_1_city_9_aqi": "133 PM2.5",
    "compare-tabs_1_city_9_cigg": "6",
    "compare-tabs_1_city_10_name": "Muzaffarpur",
    "compare-tabs_1_city_10_aqi": "114 PM2.5",
    "compare-tabs_1_city_10_cigg": "5",
    "compare-tabs_1_city_11_name": "Mandi Gobindgarh",
    "compare-tabs_1_city_11_aqi": "75 PM2.5",
    "compare-tabs_1_city_11_cigg": "3",
    "compare-tabs_1_city_12_name": "Ludhiana",
    "compare-tabs_1_city_12_aqi": "69 PM2.5",
    "compare-tabs_1_city_12_cigg": "3",
    "compare-tabs_1_city_13_name": "Jodhpur",
    "compare-tabs_1_city_13_aqi": "126 PM2.5",
    "compare-tabs_1_city_13_cigg": "6",
    "compare-tabs_1_city_14_name": "Amritsar",
    "compare-tabs_1_city_14_aqi": "61 PM2.5",
    "compare-tabs_1_city_14_cigg": "3",
    "compare-tabs_1_city_15_name": "Ahmedabad",
    "compare-tabs_1_city_15_aqi": "91 PM2.5",
    "compare-tabs_1_city_15_cigg": "4",
    "compare-tabs_1_city_16_name": "Panchkula",
    "compare-tabs_1_city_16_aqi": "41 PM2.5",
    "compare-tabs_1_city_16_cigg": "2",
    "compare-tabs_1_city_17_name": "Gaya",
    "compare-tabs_1_city_17_aqi": "70 PM2.5",
    "compare-tabs_1_city_17_cigg": "3",
    "compare-tabs_1_city_18_name": "Nagpur",
    "compare-tabs_1_city_18_aqi": "27 PM2.5",
    "compare-tabs_1_city_18_cigg": "1",
    "compare-tabs_1_city_19_name": "Vijaywada",
    "compare-tabs_1_city_19_aqi": "32 PM2.5",
    "compare-tabs_1_city_19_cigg": "1",
    "compare-tabs_1_city_20_name": "Chandrapur",
    "compare-tabs_1_city_20_aqi": "43 PM2.5",
    "compare-tabs_1_city_20_cigg": "1",
    "compare-tabs_1_city_21_name": "Chennai",
    "compare-tabs_1_city_21_aqi": "58 PM2.5",
    "compare-tabs_1_city_21_cigg": "2",
    "compare-tabs_1_city_22_name": "Bhiwadi",
    "compare-tabs_1_city_22_aqi": "103 PM2.5",
    "compare-tabs_1_city_22_cigg": "4",
    "compare-tabs_1_city_23_name": "Mumbai",
    "compare-tabs_1_city_23_aqi": "44 PM2.5",
    "compare-tabs_1_city_23_cigg": "2",
    "compare-tabs_1_city_24_name": "Nashik",
    "compare-tabs_1_city_24_aqi": "51 PM2.5",
    "compare-tabs_1_city_24_cigg": "2",
    "compare-tabs_1_city_25_name": "Thane",
    "compare-tabs_1_city_25_aqi": "41 PM2.5",
    "compare-tabs_1_city_25_cigg": "2",
    "compare-tabs_1_city_26_name": "Aurangabad",
    "compare-tabs_1_city_26_aqi": "48 PM2.5",
    "compare-tabs_1_city_26_cigg": "2",
    "compare-tabs_1_city_27_name": "Hyderabad",
    "compare-tabs_1_city_27_aqi": "56 PM2.5",
    "compare-tabs_1_city_27_cigg": "2",
    "compare-tabs_1_city_28_name": "Visakhapatnam",
    "compare-tabs_1_city_28_aqi": "51 PM2.5",
    "compare-tabs_1_city_28_cigg": "2",
    "compare-tabs_1_city_29_name": "Rajamahandevaram",
    "compare-tabs_1_city_29_aqi": "44 PM2.5",
    "compare-tabs_1_city_29_cigg": "2",
    "compare-tabs_1_city_30_name": "Chittoor",
    "compare-tabs_1_city_30_aqi": "11 PM2.5",
    "compare-tabs_1_city_30_cigg": "0",
    "compare-tabs_1_city_31_name": "Bangalore",
    "compare-tabs_1_city_31_aqi": "23 PM2.5",
    "compare-tabs_1_city_31_cigg": "1",
    "compare-tabs_1_city_32_name": "Trivandrum",
    "compare-tabs_1_city_32_aqi": "53 PM2.5",
    "compare-tabs_1_city_32_cigg": "2",
    "p_6_value": "Methodology for calculation: ",
    "p_7_value": "A report by Berkeley Earth showed that in China, 1.6 million people die every year from an average exposure of 52 ??g/m3 of PM2.5. To kill 1.6 million people would require, assuming 1.36 x9^6 deaths per cigarette, 1.1 trillion cigarettes. Since the population of China is 1.35 billion, that comes to 764 cigarettes every year per person, or about 2.4 cigarettes per day.",
    "p_8_value": "Put another way, one cigarette is equivalent to an air pollution of 22 ??g/m3 (Absolute value: 21.6 ??g/m3) for one day.",
    "p_9_value": "The average PM2.5 in Beijing over the year is about 85 ??g/m3, equivalent to about 4 cigarettes per day. Similarly, if the air pollution in New Delhi, India, is 546 ??g/m3, it is equivalent to about 25 cigarettes each day.",
    "p_10_value": "We took the PM 2.5 data of 33 cities in India every day for one week. We calculated the mean of 6 days PM 2.5 data of each city and divided it by 21.6 ??g/m3 to get the number of cigarettes. It is also imperative to say the numbers shown is the assumption that you ideally spent most of your time breathing air from outside."
};

var hindiJson = {
    "hero_1_image": "https://news.files.bbci.co.uk/vj/live/idt-images/image-slider-hello/SMOG_vdyw4.jpg",
    "hero_1_title": "????????????: ?????? ?????????????????? ???????????? ???????????? ??????????????? ?????????????????? ?????? ??????????",
    "article-info_1_byline": "By me!",
    "article-info_1_date": "20 November 2017",
    "article-info_1_category": "Hindi",
    "article-info_1_category_url": "http://www.bbc.com/hindi",
    "p_1_value": "?????????????????? ????????? ???????????? ???????????? ?????? ????????? ????????? ???????????? 25 ?????????????????? ???????????? ?????? ??????????????? ??????. ???????????? ????????? ?????? ??????????????? ???????????? ??????????????? ?????? ?????? ??????????????? ?????????????????? ?????? ????????? ??????????",
    "total_cities_1_value": "32",
    "p_2_value": "7 ??????????????? ?????? ???????????? ???????????? ?????? ????????????????????? ?????????????????? ???????????? ?????? ???????????? ?????? ????????? ????????? ??????.?????? ????????????????????? ???????????? ???????????? ??????????????? ?????? ?????? ?????????????????? ?????? ??????????????? ????????? ???????????? ?????? ??????????????? ???????????? ????????????. ???????????????????????? ???????????????????????? ?????? ???????????? ?????? ?????????????????? ?????? ???????????? ????????? ???????????????????????? ????????? ?????? ?????????. ??????????????? ??????????????????????????? ??????????????? ?????? ??????????????????????????? ???????????? ?????? ????????????????????? ?????? ???????????? 30 ???????????? ????????????????????? ????????????????????? ?????? ????????????????????? ???????????? ??????????????? ?????? ?????? ??????. ",
    "p_3_value": "?????????????????? ????????? ????????? ???????????????????????? ???????????? ????????????????????????????????? ????????? ?????????????????? ????????????????????? ?????? ????????????????????? ?????? ????????????????????? ????????????????????? ??????????????????????????????????????? ???????????? (???????????? 2.5 ?????? ????????? ?????? ???????????? ???????????? ??????), ?????? ????????????????????? ?????? ???????????? ?????? ????????? ???????????? ?????????, ?????? ???????????? 7 ??????????????? ?????? ?????????????????? ?????? ????????? ??????????????????????????? ????????? ?????????????????? 700 ???????????????????????????????????? ??????????????? ?????? ???????????? ??????????????? ????????? ??????. ??????????????? ????????? ?????? ???????????? 2.5 ?????? ????????? ???????????? ???????????????????????? ???????????? 15 ???????????????????????????????????? ??????????????? ?????? ???????????? ?????? ?????? 91 ???????????????????????????????????? ??????????????? ?????? ???????????? ?????? ?????????????????? ????????? ?????? ??????????????? ???????????? ???????????????????????? ???????????? ???????????? ??????. ",
    "p_4_value": "????????? ??????????????????????????? ?????? ???????????? ?????? ?????? ?????? ?????????????????? ?????? ???????????? ???????????????????????? ???????????? ??????????????? ?????? ?????? ?????? ?????? ?????? ?????? ????????? ????????? 45 ?????????????????? ???????????? ?????? ??????????????? ??????. ???????????? ?????????????????? ??????????????? ?????? ????????? ???????????? ?????????????????? ????????????. ",
    "p_5_value": "???????????? ????????? ?????? ??????????????? ???????????? ??????????????? ?????? ??????????????? ?????????????????? ?????? ????????????????????? ?????? ???????????? ?????? ??????????????? ?????????????????? ?????? ???????????? ?????????. ",
    "compare-tabs_1_method": "??????????????? ??????????????? ?????? ??????????????? ?????? ?????? ?????????????????? ?????? ????????? ?????? ????????? 22 ???????????????????????????????????? ??????????????? ?????? ???????????? (??????????????? ??????????????????: 21.6 ???????????????????????????????????? ??????????????? ?????? ????????????) ?????? ???????????? ????????????????????? ?????? ??????????????? ??????.",
    "compare-tabs_1_title": "???????????? ????????? ??????????????? ",
    "compare-tabs_1_city_1_name": "?????????????????????????????????",
    "compare-tabs_1_city_1_aqi": "283 PM2.5",
    "compare-tabs_1_city_1_cigg": "12",
    "compare-tabs_1_city_2_name": "???????????????",
    "compare-tabs_1_city_2_aqi": "213 PM2.5",
    "compare-tabs_1_city_2_cigg": "10",
    "compare-tabs_1_city_3_name": "??????????????????",
    "compare-tabs_1_city_3_aqi": "235 PM2.5",
    "compare-tabs_1_city_3_cigg": "10",
    "compare-tabs_1_city_4_name": "????????????",
    "compare-tabs_1_city_4_aqi": "158 PM2.5",
    "compare-tabs_1_city_4_cigg": "7",
    "compare-tabs_1_city_5_name": "???????????????????????????",
    "compare-tabs_1_city_5_aqi": "254 PM2.5",
    "compare-tabs_1_city_5_cigg": "11",
    "compare-tabs_1_city_6_name": "???????????????????????????",
    "compare-tabs_1_city_6_aqi": "220 PM2.5",
    "compare-tabs_1_city_6_cigg": "10",
    "compare-tabs_1_city_7_name": "?????????????????????",
    "compare-tabs_1_city_7_aqi": "122 PM2.5",
    "compare-tabs_1_city_7_cigg": "5",
    "compare-tabs_1_city_8_name": "??????????????????",
    "compare-tabs_1_city_8_aqi": "268 PM2.5",
    "compare-tabs_1_city_8_cigg": "12",
    "compare-tabs_1_city_9_name": "????????????",
    "compare-tabs_1_city_9_aqi": "133 PM2.5",
    "compare-tabs_1_city_9_cigg": "6",
    "compare-tabs_1_city_10_name": "???????????????????????????????????????",
    "compare-tabs_1_city_10_aqi": "114 PM2.5",
    "compare-tabs_1_city_10_cigg": "5",
    "compare-tabs_1_city_11_name": "???????????? ???????????????????????????",
    "compare-tabs_1_city_11_aqi": "75 PM2.5",
    "compare-tabs_1_city_11_cigg": "3",
    "compare-tabs_1_city_12_name": "????????????????????????",
    "compare-tabs_1_city_12_aqi": "69 PM2.5",
    "compare-tabs_1_city_12_cigg": "3",
    "compare-tabs_1_city_13_name": "??????????????????",
    "compare-tabs_1_city_13_aqi": "126 PM2.5",
    "compare-tabs_1_city_13_cigg": "6",
    "compare-tabs_1_city_14_name": "??????????????????",
    "compare-tabs_1_city_14_aqi": "61 PM2.5",
    "compare-tabs_1_city_14_cigg": "3",
    "compare-tabs_1_city_15_name": "????????????????????????",
    "compare-tabs_1_city_15_aqi": "91 PM2.5",
    "compare-tabs_1_city_15_cigg": "4",
    "compare-tabs_1_city_16_name": "?????????????????????",
    "compare-tabs_1_city_16_aqi": "41 PM2.5",
    "compare-tabs_1_city_16_cigg": "2",
    "compare-tabs_1_city_17_name": "?????????",
    "compare-tabs_1_city_17_aqi": "70 PM2.5",
    "compare-tabs_1_city_17_cigg": "3",
    "compare-tabs_1_city_18_name": "??????????????????",
    "compare-tabs_1_city_18_aqi": "27 PM2.5",
    "compare-tabs_1_city_18_cigg": "1",
    "compare-tabs_1_city_19_name": "???????????????????????????",
    "compare-tabs_1_city_19_aqi": "32 PM2.5",
    "compare-tabs_1_city_19_cigg": "1",
    "compare-tabs_1_city_20_name": "????????????????????????",
    "compare-tabs_1_city_20_aqi": "43 PM2.5",
    "compare-tabs_1_city_20_cigg": "1",
    "compare-tabs_1_city_21_name": "??????????????????",
    "compare-tabs_1_city_21_aqi": "58 PM2.5",
    "compare-tabs_1_city_21_cigg": "2",
    "compare-tabs_1_city_22_name": "?????????????????????",
    "compare-tabs_1_city_22_aqi": "103 PM2.5",
    "compare-tabs_1_city_22_cigg": "4",
    "compare-tabs_1_city_23_name": "???????????????",
    "compare-tabs_1_city_23_aqi": "44 PM2.5",
    "compare-tabs_1_city_23_cigg": "2",
    "compare-tabs_1_city_24_name": "???????????????",
    "compare-tabs_1_city_24_aqi": "51 PM2.5",
    "compare-tabs_1_city_24_cigg": "2",
    "compare-tabs_1_city_25_name": "????????????",
    "compare-tabs_1_city_25_aqi": "41 PM2.5",
    "compare-tabs_1_city_25_cigg": "2",
    "compare-tabs_1_city_26_name": "????????????????????????",
    "compare-tabs_1_city_26_aqi": "48 PM2.5",
    "compare-tabs_1_city_26_cigg": "2",
    "compare-tabs_1_city_27_name": "????????????????????????",
    "compare-tabs_1_city_27_aqi": "56 PM2.5",
    "compare-tabs_1_city_27_cigg": "2",
    "compare-tabs_1_city_28_name": "????????????????????????????????????",
    "compare-tabs_1_city_28_aqi": "51 PM2.5",
    "compare-tabs_1_city_28_cigg": "2",
    "compare-tabs_1_city_29_name": "????????????????????????????????????",
    "compare-tabs_1_city_29_aqi": "44 PM2.5",
    "compare-tabs_1_city_29_cigg": "2",
    "compare-tabs_1_city_30_name": "?????????????????????",
    "compare-tabs_1_city_30_aqi": "11 PM2.5",
    "compare-tabs_1_city_30_cigg": "0",
    "compare-tabs_1_city_31_name": "????????????????????????",
    "compare-tabs_1_city_31_aqi": "23 PM2.5",
    "compare-tabs_1_city_31_cigg": "1",
    "compare-tabs_1_city_32_name": "?????????????????????????????????",
    "compare-tabs_1_city_32_aqi": "53 PM2.5",
    "compare-tabs_1_city_32_cigg": "2",
    "p_6_value": "???????????? ?????? ??????????????????",
    "p_7_value": "?????????????????? ???????????? ?????? ?????? ????????????????????? ?????????????????? ?????? ????????? ????????? ????????? ?????? ????????? ???????????? 2.5 ?????? 52 ???????????????????????????????????? ??????????????? ?????? ???????????? ?????? ???????????? ?????????????????? ????????? ????????? ?????? ???????????? 16 ????????? ??????????????? ?????? ????????? ???????????? ??????. 16 ????????? ??????????????? ?????? ???????????? ?????? ???????????? ????????????, 1.37x10^ 6 ??????????????? ??????????????? ?????????????????? ????????????, 11 ????????? ??????????????????. ???????????? ?????? ????????? ?????? ???????????????????????? 1 ????????? 35 ??????????????? ?????? ?????? ?????? ?????? ????????? 864 ?????????????????? ??????????????? ????????????????????? ?????? 2.4 ?????????????????? ??????????????? ????????? ???????????? ??????.",
    "p_8_value": "??????????????? ??????????????? ?????? ??????????????? ?????? ?????? ?????????????????? ?????? ????????? ?????? ????????? 22 ???????????????????????????????????? ??????????????? ?????? ???????????? (??????????????? ??????????????????: 21.6 ???????????????????????????????????? ??????????????? ?????? ????????????) ?????? ???????????? ????????????????????? ?????? ??????????????? ??????.",
    "p_9_value": "???????????? ????????? ????????? ?????????????????? ????????? ????????? ???????????? 2.5 ???????????? 85 ???????????????????????????????????? ??????????????? ?????? ???????????? ???????????? ?????? ?????? ???????????????????????? ???????????? ????????? ?????????????????? ???????????? ?????? ??????????????? ??????. ????????? ?????????, ????????? ???????????? ????????? ?????? ?????????????????? ????????? ???????????? ????????????????????? 547 ???????????????????????????????????? ??????????????? ?????? ???????????? ?????? ?????? ?????? ?????? ????????? 25 ?????????????????? ???????????? ?????? ??????????????? ??????.",
    "p_10_value": "???????????? ???????????? ?????? 20 ??????????????? ?????? ?????? ?????????????????? ?????? ?????? ????????? ???????????? 2.5 ?????? ?????????????????? ?????????????????? ?????????. ???????????? ?????? ????????? ?????? ???????????? 2.5 ????????????????????? ?????? ????????? ?????? ???????????? ?????? ?????? ?????????????????? ?????? ?????????????????? ????????????????????? ???????????? ?????? ????????? ????????? 21.6 ???????????????????????????????????? ??????????????? ?????? ???????????? ?????? ????????? ?????? ????????????.?????? ??????????????? ?????????????????????????????? ?????? ?????? ??????????????? ?????? ???????????? ?????? ??????????????? ?????? ?????????????????? ????????? ?????? ??????????????? ????????? ?????? ?????? ???????????? ?????????????????? ????????? ????????? ???????????? ?????? ????????? ????????? ???????????? ???????????? ?????????."
}

module.exports = { getSortedCitiesList, convertJson, englishJson, createObjectStructure }; //for testing purposes