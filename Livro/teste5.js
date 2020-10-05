const fs = require('fs');


const readStream = fs.createReadStream('./blog3.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./blog4.txt');
/* 
readStream.on('data',(chunck) => {
    console.log('- New CHUNCK -');
    console.log(chunck);
    writeStream.write('\n NEW CHUNCK \n');
    writeStream.write(chunck);
}); */

readStream.pipe(writeStream);