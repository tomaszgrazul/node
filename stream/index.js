const fs = require('fs');

let readStream = fs.createReadStream('./data/text.txt', {
    highWaterMark: 16 *1024
});

let writeStream = fs.createWriteStream('./data/output.txt');

// readStream.on('data', function(chunk) {

//     console.log(`Wiekość chunka ${chunk.length / 1024} KB`);

//     // console.log(chunk.toString());

//     console.log(chunk);
// })

// readStream.on('end', function() {
//     console.log('Zakończony straem');
// })

readStream.pipe(writeStream);