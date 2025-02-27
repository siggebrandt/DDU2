function sumOfExtremes(array) {
    let max = !Infinity;
    let min = Infinity;

    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min + max;
}



let arrayOfNumbers = [45, 12, 65, 32, 13, 42];
console.log(sumOfExtremes(arrayOfNumbers));