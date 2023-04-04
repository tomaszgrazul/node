// export function add(...numbers) {
    function add(...numbers) {

    // console.log(numbers);
    
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

// export function multiply(...numbers) {
    function multiply(...numbers) {
    
    let product = 1;

    for (let number of numbers) {
        product *= number;
    }

    return product;
}

export {add, multiply};
// export default {add, multiply};