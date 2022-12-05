var tempArray = [4.5, 12.7, 11, 18.9, 7.9, 5.32]; //define the array of temeratures in celcius
var tempArray2 = []; //array to save the list removed the max value
var tempArray3 = [];//array to save the list removed the min value
var tempArray4 = []; //array to save the list when every value was multiplied by the Fahrenheit equation
var tempArray5 = [];
tempArray.sort(function(a,b) {
    return a-b;
})

//Eliminate the top outliner (the maximum value)
const max = Math.max(...tempArray);
tempArray.filter(temp => temp !== max) //remove the maximum number from the array

tempArray2 = tempArray.filter(temp => temp !== max); //clone the filtered the array into a new array

//using filter to remove the min number in the array
const min = Math.min(...tempArray2);
tempArray2.filter(temp => temp !== min) //remove the min number from the array

tempArray3 = tempArray2.filter(temp => temp !== min); //clone the filtered the array into a new array



//Convert the Celcius value into Fahrenheit value
for(let i = 0; i < tempArray3.length; i++) {
    tempArray4[i] = (tempArray3[i] * 9/5) + 32;
}

tempArray5 = tempArray4.reverse(); //reverse the order of the list

tempArray5.forEach(function(e) { //using forEach to display the content in the array one by one 
    
    console.log(e);
})
