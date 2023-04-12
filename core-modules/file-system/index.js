const fs = require('fs');

fs.writeFile('message.txt', 'Witaj programisto!', function() {
    console.log("plik zapisany");
});

