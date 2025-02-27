function array_sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// -- endast för testning --
let arrayOfNumbers = [2, 4, 1, 7, 2];

console.log(array_sum(arrayOfNumbers))