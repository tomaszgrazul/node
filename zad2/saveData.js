const fs = require('fs');
const path = require('path');

function saveData(path_name, folder_name, overwrite) {

    fs.readFile(path.join(__dirname, path_name),'utf-8', function(err, data) {
        if(err) {
            console.log(err);
        } else {
            // console.log(data);
        }
    
        // console.log(JSON.parse(data));
    
        const test = JSON.parse(data);
        console.log(test[0].address.street);

        let user = {
            name: test[0].name,
            surname: 'qwerty',
            street: test[0].address.street
        }
        
        
       
    
    
        fs.mkdir(path.join(__dirname, folder_name), function(err) {
            if(err) {
                if(err.code === 'EEXIST') {
                    console.log('Folder już istnieje')
                    return;
                }
                console.log(err)
            } else {
                console.log('Stworzono folder');
            }
        });
    
        const fileName = 'result.txt';

        if (overwrite) {
            fs.writeFile(path.join(__dirname, 'datas', fileName), ('test'), { flag: "wx" }, function(err) {
                if (err) {
                    console.log("plik " + fileName + " już istnieje");
                  }
                  else {
                    console.log("Stworzono plik " + fileName);
                  }
            })
        } else {

            fs.writeFile(path.join(__dirname, 'datas', fileName), (test[0].name), function(err) {
                if (err) {
                    console.log(err);
                  }
                  else {
                    console.log("Nadpisano plik " + fileName);
                  }
            })
        }
    })
}

module.exports = saveData;