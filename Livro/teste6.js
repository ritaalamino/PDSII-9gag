const fs = require('fs');

fs.readFile('./blog1.txt', (err, data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

//console.log('last line');

fs.writeFile('./blog2.txt', 'hello, world',() => {
    console.log('file has written');
});

