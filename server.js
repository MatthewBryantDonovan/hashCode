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
                pointsPerDay: [],
                booksToSend: []
            }
            for (let index = 0; index < currentBooks.length; index++) {
                allLibs[currentObj].catalog.push({
                    bookPos: currentBooks[index],
                    bookVal: scores[currentBooks[index]]
                })
            }
            allLibs.forEach(i => {
                i.catalog.sort((a, b) => (a.bookVal < b.bookVal) ? 1 : -1);
            })
            for (let index = 0; index < totalDays; index++) {
                let daysAfterSign = (totalDays-index)-allLibs[currentObj].signup;
                let booksToSend = (daysAfterSign*allLibs[currentObj].perDay);
                var totalVal = 0;
                for (let index = 0; index < (booksToSend); index++) {
                    
                    if (index < (allLibs[currentObj].catalog.length)){
                        let rando = allLibs[currentObj].catalog[index].bookVal;
                        totalVal += parseInt(rando);
                    }
                }
                
                allLibs[currentObj].pointsPerDay.push({totalVal})
                allLibs[currentObj].booksToSend.push({booksToSend})
                
            }
            currentObj++;

        }
    }

    var solutionArr = [];
    
    for (var currentDay = 0; currentDay < totalDays; currentDay++) {
        var currentTop = 0;
        var currentTopPos = -1;
        var changed = false;
        for (var currentPos = 0; currentPos < allLibs.length; currentPos++) {
            console.log("this");
            
            console.log(allLibs[currentPos].pointsPerDay[currentDay].totalVal);
            console.log("vs");
            
            console.log(currentTop);
            console.log("----");
                        
            
            if (allLibs[currentPos].pointsPerDay[currentDay].totalVal > currentTop){
                currentTop = allLibs[currentPos].pointsPerDay[currentDay].totalVal;
                currentTopPos = currentPos;
                changed = true;
                console.log("I changed");
                
            }
        }

        if(changed == true){
            currentDay += allLibs[currentTopPos].signup-1;
            solutionArr.push(allLibs[currentTopPos]);
            allLibs.splice(currentTopPos, 1)
        }
    }



    console.log(JSON.stringify(allLibs));
    console.log("----------------------------");
    console.log("----------------------------");
    console.log(JSON.stringify(solutionArr));


});