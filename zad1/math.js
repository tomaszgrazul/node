// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

const randomInteger = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min)



  function randomString(len) {
    var str = "";                                
    for (var i = 0; i < len; i++) {              
      var rand = Math.floor(Math.random() * 62); 
      var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48; 
      str += String.fromCharCode(charCode);      
    }
    return str; 
  }

  function randomIntegerTable(min, max, how_many) {

    const hm = [];
    for (let i = 1; i <= how_many; i++) {

        hm.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return hm;
  }

  module.exports = {
    randomInteger: randomInteger,
    randomString: randomString,
    randomIntegerTable: randomIntegerTable
  }