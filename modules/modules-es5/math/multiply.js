// function add(...numbers) {

//     // console.log(numbers);
    
//     let sum = 0;

//     for (let number of numbers) {
//         sum += number;
//     }

//     return sum;
// }

function multiply(...numbers) {
    
    let product = 1;

    for (let number of numbers) {
        product *= number;
    }

    return product;
}

module.exports = multiply;

// module.exports.add = add;
// module.exports.multiply = multiply;

// module.exports = {
//     add: add,
//     multiply: multiply
// }