
// Requiring fs module in which 
// readFile function is defined.

function readInData(){
    var finalArray = [];
    var fs = require('fs');
    var text = fetch('data.art_data.csv')
    .then((res) => res.text())
    .then((text) => {console.log(text)})
    var array = fs.readFileSync('data/art_data.csv').toString().split(",__newline__");
    for(i in array) {
        var line_data = array[i].toString().split(",;;;,");
        const painting = {
            id : line_data[0],
            title : line_data[1],
            artist : line_data[2],
            nationality : line_data[3],
            pob : line_data[4],
            yob : line_data[5],
            yod : line_data[6],
            pod : line_data[7],
            paintingDate : line_data[8],
            medium : line_data[9],
            style : line_data[10],
            genre : line_data[11],
            period : line_data[12],
            comment : line_data[13],
            extraLink : line_data[14]
        };
        finalArray.push(painting);
    };
    return finalArray;
}

data = readInData()