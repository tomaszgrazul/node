const fs = require('fs');
const path = require('path');

function saveData(path_name, folder_name, selector) {

    fs.readFile(path.join(__dirname, path_name),'utf-8', function(err, data) {
        if(err) {
            console.log(err);
        } else {
            // console.log(data);
        }
    
        // console.log(JSON.parse(data));
    
        const userData = JSON.parse(data);
        // console.log(userData.length);
        // console.log(userData[0]);

        // let user = {
        //     name: userData[0].name,
        //     userName: userData[0].username,
        //     street: userData[0].address.street,
        //     zipCode: userData[0].address.zipcode,
        //     city: userData[0].address.city,
        //     phone: userData[0].phone
        // }
        // console.log(user);
        
       
    
    
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

        // if (overwrite) {
        //     fs.writeFile(path.join(__dirname, 'datas', fileName), ('Dane użytkowników'), { flag: "wx" }, function(err) {
        //         if (err) {
        //             console.log("plik " + fileName + " już istnieje");
        //           }
        //           else {
        //             console.log("Stworzono plik " + fileName);
        //           }
        //     })
        // } else {

        //     fs.writeFile(path.join(__dirname, 'datas', fileName), ('Dane użytkowników'), function(err) {
        //         if (err) {
        //             console.log(err);
        //           }
        //           else {
        //             console.log("Nadpisano plik " + fileName);
        //           }
        //     })
        // }
        // let selector;

        // if (!overwrite) {
        //     selector = 'w'
        // } else selector = 'as'

        !selector ? selector = 'w' : selector = 'as'


        fs.open(path.join(__dirname, folder_name, fileName), selector, function(err, log) {
            if (err) throw err;

            for (let i = 0; i <= userData.length - 1; i++) {

                fs.writeFileSync(log, 'Użytkownik nr ' + userData[i].id + '\n', function (err) {
                    if (err) throw err;
                });
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
         }

            fs.close(log, function(err) {
            if (err) throw err;
            console.log('Zapisano dane użytkowników');
            });   
          });   
    })
}

module.exports = saveData;