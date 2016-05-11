/**
 * @Author ivanquan
 * @Dependencies - fs, batch-geocoder
 * @Directions - make sure address, city, state are in 2nd, 3rd, 4th column respectively
 * @Parameters - replace fileRead with name of csv file
 * @Notes - when complete fileResult.txt will be in the same folder
 * @Excel - open fileResult.txt with excel and select ';' as delimiter
 */

var fileRead = "./nameAddressOST.csv"; // Path of csv read file
var fileResult = "./fileResult.txt"; // Path of txt after batch geocoder

var fs = require('fs');
var Geocoder = require("batch-geocoder"), geocoder = new Geocoder(fileResult);

var i = 0;
var contents = fs.readFileSync(fileRead, 'utf8');

var rowArray = contents.split(/(\r\n|\r|\n)/);
var addyCityStateArray = [];
rowArray.forEach(function() {
	var element = rowArray[i].split(',');
	i++;
	addyCityStateArray.push(element[1] + " " + element[2] + " " + element[3]);
});

geocoder.on("finish", function(collection){
  console.log(collection);
});

geocoder.on("status", function(status){
  console.log(completed.current + '/' + completed.total);
});

geocoder.find(addyCityStateArray);