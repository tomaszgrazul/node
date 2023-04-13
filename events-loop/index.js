const fs = require('fs');
const path = require('path');

function sleep(ms) {
    let now = Date.now();

    while(Date.now() - now < ms) {

    }
}

console.log('Loguje przed odczytaniem');

console.time('Czas trwania: ');
 
fs.readFile(path.join(__dirname, 'data', 'lorem.txt'), function() {

    console.log('Odczytałem plik');

    console.timeEnd('Czas trwania: ');
});

sleep(6000);

console.log('Loguje po odczytaniu');