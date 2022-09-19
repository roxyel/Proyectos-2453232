/*{
    "ID": "6fede288-0d35-494e-a7a7-0d63c21bd8f6",
    "Message": "",
    "Global": {
        "NewConfirmed": 509125,
        "TotalConfirmed": 607679008,
        "NewDeaths": 1483,
        "TotalDeaths": 6510164,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-09-13T16:02:57.509Z"
    },*/

    /*"Countries": [
        {
            "ID": "4b91c8e0-b777-497f-b1f8-1e54dfa96b18",
            "Country": "Afghanistan",
            "CountryCode": "AF",
            "Slug": "afghanistan",
            "NewConfirmed": 257,
            "TotalConfirmed": 196182,
            "NewDeaths": 2,
            "TotalDeaths": 7789,
            "NewRecovered": 0,
            "TotalRecovered": 0,
            "Date": "2022-09-13T16:02:57.509Z",
            "Premium": {}
        },*/

//promedio de los 10 primeros paises

function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [257, 17, 12, 2575, 1801, 22084, 76, 10, 307, 421];
var a = ArrayAvg(myArray);
console.log(a)


//promedio de paises que empiezan por z

function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [5, 18];
var a = ArrayAvg(myArray);
console.log(a)


//promedio de edades de los contagiados

function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [1, 15, 18, 33, 36, 49, 51, 52, 69, 82, 72, 80, 94];
var a = ArrayAvg(myArray);
console.log(a)

//porcentajes

var por= (4) / ( (1*4)/(100) )
console.log(por);
