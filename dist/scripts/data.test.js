const { test, expect } = require('@jest/globals');
const { getSortedCitiesList, convertJson, englishJson } = require('./data');

const convertedDataEn = {
    1: {name: "Ghaziabad", aqi: "283 PM2.5", cigg: "12"},
    2: {name: "Noida", aqi: "213 PM2.5", cigg: "10"}, 
    3: {name: "Delhi", aqi: "235 PM2.5", cigg: "10"}
};

const sortedListEn = ["Delhi", "Ghaziabad", "Noida"];

const convertedDataHi = {
    1: {name: "ग़ाज़ियाबाद", aqi: "283 PM2.5", cigg: "12"},
    2: {name: "नोएडा", aqi: "213 PM2.5", cigg: "10"},
    3: {name: "दिल्ली", aqi: "235 PM2.5", cigg: "10"}
};

const sortedListHi = ["ग़ाज़ियाबाद", "दिल्ली", "नोएडा"];

const convertedJson = {
    "hero": {
        "1": {
            "image": "https://news.files.bbci.co.uk/vj/live/idt-images/image-slider-hello/SMOG_vdyw4.jpg",
            "title": "Delhi smog: How many cigarettes did you smoke this week?"
        }
    },
    "article-info": {
        "1": {
            "byline": "By me!",
            "date": "20 November 2017",
            "category": "India"
        }
    },
    "p": {
        "1": {
            "value": "Breathing in Delhi is close to smoking more than a dozen cigarettes a day on an average. Click on your city to find out how many cigarettes you are smoking"
        },
        "2": {
            "value": "On November 7, Indian capital, Delhi woke up to a blanket of thick grey smog.  The toxic haze was so severe that politicians announced plans to close schools.  United Airlines shut all of its flights from the US to Delhi. Visibility was poor as pollution levels reached 30 times the World Health Organization's recommended limit in some areas."
        },
        "3": {
            "value": "According to the data from the System of Air Quality Weather Forecasting and Research website, the levels of tiny particulate matter (known as PM 2.5) that enter deep into the lungs reached as high as 700 micrograms per cubic metre in some areas of Delhi on November 6th. The air quality standard for PM 2.5 is 15 µg/m3 and anything above 81 µg/m3 falls under poor air quality standard."
        },
        "4": {
            "value": "Some reports claimed that New Delhi's air quality was so severe it was equivalent to smoking 45 cigarettes a day. We looked at the data to see if this was true. "
        },
        "5": {
            "value": "Click on your city to find out how many cigarettes you have effectively smoked because of last week's pollution."
        },
        "6": {
            "value": "Methodology for calculation: "
        },
        "7": {
            "value": "A report by Berkeley Earth showed that in China, 1.6 million people die every year from an average exposure of 52 μg/m3 of PM2.5. To kill 1.6 million people would require, assuming 1.36 x9^6 deaths per cigarette, 1.1 trillion cigarettes. Since the population of China is 1.35 billion, that comes to 764 cigarettes every year per person, or about 2.4 cigarettes per day."
        },
        "8": {
            "value": "Put another way, one cigarette is equivalent to an air pollution of 22 μg/m3 (Absolute value: 21.6 μg/m3) for one day."
        },
        "9": {
            "value": "The average PM2.5 in Beijing over the year is about 85 μg/m3, equivalent to about 4 cigarettes per day. Similarly, if the air pollution in New Delhi, India, is 546 μg/m3, it is equivalent to about 25 cigarettes each day."
        },
        "10": {
            "value": "We took the PM 2.5 data of 33 cities in India every day for one week. We calculated the mean of 6 days PM 2.5 data of each city and divided it by 21.6 μg/m3 to get the number of cigarettes. It is also imperative to say the numbers shown is the assumption that you ideally spent most of your time breathing air from outside."
        }
    },
    "total": {
        "cities": {
            "1": {
                "value": "32"
            }
        }
    },
    "compare-tabs": {
        "1": {
            "method": "1 cigarette is equivalent to an air pollution of 22 μg/m3 (Absolute value: 21.6 μg/m3) for one day.",
            "title": "Select your city",
            "city": {
                "1": {
                    "name": "Ghaziabad",
                    "aqi": "283 PM2.5",
                    "cigg": "12"
                },
                "2": {
                    "name": "Noida",
                    "aqi": "213 PM2.5",
                    "cigg": "10"
                },
                "3": {
                    "name": "Delhi",
                    "aqi": "235 PM2.5",
                    "cigg": "10"
                },
                "4": {
                    "name": "Lucknow",
                    "aqi": "158 PM2.5",
                    "cigg": "7"
                },
                "5": {
                    "name": "Gurugram",
                    "aqi": "254 PM2.5",
                    "cigg": "11"
                },
                "6": {
                    "name": "Faridabad",
                    "aqi": "220 PM2.5",
                    "cigg": "10"
                },
                "7": {
                    "name": "Varanasi",
                    "aqi": "122 PM2.5",
                    "cigg": "5"
                },
                "8": {
                    "name": "Kanpur",
                    "aqi": "268 PM2.5",
                    "cigg": "12"
                },
                "9": {
                    "name": "Patna",
                    "aqi": "133 PM2.5",
                    "cigg": "6"
                },
                "10": {
                    "name": "Muzaffarpur",
                    "aqi": "114 PM2.5",
                    "cigg": "5"
                },
                "11": {
                    "name": "Mandi Gobindgarh",
                    "aqi": "75 PM2.5",
                    "cigg": "3"
                },
                "12": {
                    "name": "Ludhiana",
                    "aqi": "69 PM2.5",
                    "cigg": "3"
                },
                "13": {
                    "name": "Jodhpur",
                    "aqi": "126 PM2.5",
                    "cigg": "6"
                },
                "14": {
                    "name": "Amritsar",
                    "aqi": "61 PM2.5",
                    "cigg": "3"
                },
                "15": {
                    "name": "Ahmedabad",
                    "aqi": "91 PM2.5",
                    "cigg": "4"
                },
                "16": {
                    "name": "Panchkula",
                    "aqi": "41 PM2.5",
                    "cigg": "2"
                },
                "17": {
                    "name": "Gaya",
                    "aqi": "70 PM2.5",
                    "cigg": "3"
                },
                "18": {
                    "name": "Nagpur",
                    "aqi": "27 PM2.5",
                    "cigg": "1"
                },
                "19": {
                    "name": "Vijaywada",
                    "aqi": "32 PM2.5",
                    "cigg": "1"
                },
                "20": {
                    "name": "Chandrapur",
                    "aqi": "43 PM2.5",
                    "cigg": "1"
                },
                "21": {
                    "name": "Chennai",
                    "aqi": "58 PM2.5",
                    "cigg": "2"
                },
                "22": {
                    "name": "Bhiwadi",
                    "aqi": "103 PM2.5",
                    "cigg": "4"
                },
                "23": {
                    "name": "Mumbai",
                    "aqi": "44 PM2.5",
                    "cigg": "2"
                },
                "24": {
                    "name": "Nashik",
                    "aqi": "51 PM2.5",
                    "cigg": "2"
                },
                "25": {
                    "name": "Thane",
                    "aqi": "41 PM2.5",
                    "cigg": "2"
                },
                "26": {
                    "name": "Aurangabad",
                    "aqi": "48 PM2.5",
                    "cigg": "2"
                },
                "27": {
                    "name": "Hyderabad",
                    "aqi": "56 PM2.5",
                    "cigg": "2"
                },
                "28": {
                    "name": "Visakhapatnam",
                    "aqi": "51 PM2.5",
                    "cigg": "2"
                },
                "29": {
                    "name": "Rajamahandevaram",
                    "aqi": "44 PM2.5",
                    "cigg": "2"
                },
                "30": {
                    "name": "Chittoor",
                    "aqi": "11 PM2.5",
                    "cigg": "0"
                },
                "31": {
                    "name": "Bangalore",
                    "aqi": "23 PM2.5",
                    "cigg": "1"
                },
                "32": {
                    "name": "Trivandrum",
                    "aqi": "53 PM2.5",
                    "cigg": "2"
                }
            }
        }
    }
}

test('cities are sorted in alphabetical order', () => {
    expect(getSortedCitiesList(convertedDataEn)).toEqual(sortedListEn);
    expect(getSortedCitiesList(convertedDataHi)).toEqual(sortedListHi)
});

test('json converted to object correctly', () => {
    expect(convertJson(englishJson)).toEqual(convertedJson);
});





