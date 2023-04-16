const fs = require('fs');
const path = require('path');

function saveData(folder_name, path_name, selector) {

    fs.readFile(path.join(__dirname, path_name),'utf-8', function(err, data) {
        if(err) throw err;
    
        const userData = JSON.parse(data);      
       
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
    
        !selector ? selector = 'w' : selector = 'as'

        for (let i = 0; i <= userData.length - 1; i++) {

            fs.open(path.join(__dirname, folder_name, userData[i].id + '-' + userData[i].name + '.txt'), selector, function(err, log) {
                if (err) throw err;          

                    fs.writeFileSync(log, 'name: ' + userData[i].name + '\n', function (err) {
                        if (err) throw err;
                    });
                    fs.writeFileSync(log, 'username: ' + userData[i].username + '\n', function (err) {
                        if (err) throw err;
                    });
                    fs.writeFileSync(log, 'street: ' + userData[i].address.street + '\n', function (err) {
                        if (err) throw err;
                    });
                    fs.writeFileSync(log, 'zip code: ' + userData[i].address.zipcode + '\n', function (err) {
                        if (err) throw err;
                    });
                    fs.writeFileSync(log, 'city: ' + userData[i].address.city + '\n', function (err) {
                        if (err) throw err;
                    });
                    fs.writeFileSync(log, 'phone: ' + userData[i].phone + '\n\n', function (err) {
                        if (err) throw err;
                    });

                fs.close(log, function(err) {
                if (err) throw err;
                console.log('Zapisano dane użytkownika');
                });   
            });   
        }     
    })      
}

module.exports = saveData;