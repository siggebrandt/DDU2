function largests(array) {
    largestEven = null;
    largestOdd = null;

    for (i = 0; i < array.length; i++) {
        if (is_even(array[i]) == true && array[i] > largestEven) {
            largestEven = array[i];
        }
        else if (is_even(array[i]) == false && array[i] > largestOdd) {
            largestOdd = array[i];
        }
    }

    return {
        largest_even: largestEven,
        largest_odd: largestOdd
    }
}

// -- endast för testning -- 
function is_even(input) {
    if (input % 2 == 0) {
        return true;
    }
    else return false;
}

let arrayOfNumbers = [1, 2, 5, 9, 45, 44]

console.log(largests(arrayOfNumbers));