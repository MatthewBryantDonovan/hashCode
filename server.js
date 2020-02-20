const fs = require('fs');

fs.readFile('a_example.txt', (err, data) => { 
    
    if (err) throw err; 
    var allData = data.toString().split(`\n`);
    allData.splice((allData.length-1), 1)
    var line1 = allData[0].split(" ");
    var scores = allData[1].split(" ");
    allData.splice((allData[0]), 2)
    var books = parseInt(line1[0]);
    var libs = parseInt(line1[1]);
    var days = parseInt(line1[2]);
    console.log(allData);
    for (let index = 0; index < allData.length; index++) {
        if ((index%2) == 0){
            let tempLine = allData[index].split(" ");;
            
        } else {

        }
    }
    // allData.splice((allData.length-1), 1)
    // var sliceMax = allData[0].split(" ");
    // var sliceMax = parseInt(sliceMax[0]);
    // var pizzaTypes = allData[0].split(" ");
    // var pizzaTypes = parseInt(pizzaTypes[1]);
    // var everyPizza = allData[1].split(" ");
    // var answerPizzaTypes = [];
    // var answerSliceTotal = 0;
    // var tempArray = [];
    // var fixedStuff = false;
    // var answerTotalCheck = 0;
    
})
