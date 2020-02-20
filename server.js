const fs = require('fs');

fs.readFile('a_example.txt', (err, data) => {
    let dataDone = false;
    if (err) throw err;
    var allData = data.toString().split(`\n`);
    while(!dataDone){
        if (allData[allData.length - 1] == ""){
            allData.splice((allData.length - 1), 1)
        } else {
            dataDone = true;
        }
    }
    
    var line1 = allData[0].split(" ");
    var scores = allData[1].split(" ");
    allData.splice((allData[0]), 2)
    var totalBooks = parseInt(line1[0]);
    var totalLibs = parseInt(line1[1]);
    var totalDays = parseInt(line1[2]);
    var currentObj = 0;
    var allLibs = [];
    for (let index = 0; index < allData.length; index++) {
        if ((index % 2) == 0) {
            let currentLib = allData[index].split(" ");
            let currentBooks = allData[index + 1].split(" ");
            allLibs[currentObj] = {
                libPos: currentObj,
                books: currentLib[0],
                signup: currentLib[1],
                perDay: currentLib[2],
                catalog: [],
                sortedCatalog: []
            }
            for (let index = 0; index < currentBooks.length; index++) {
                allLibs[currentObj].catalog.push({
                    bookPos: currentBooks[index],
                    bookVal: scores[currentBooks[index]]
                })
            }
            currentObj++;
        }
    }
    
    allLibs.forEach(i => {
        i.catalog.sort((a, b) => (a.bookVal < b.bookVal) ? 1 : -1);
        console.log(JSON.stringify(i.catalog, null, 4))
    })

});