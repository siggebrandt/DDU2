function longestString(array) {
    let longestString = "";
    for (i = 0; i < array.length; i++) {
        if (array[i].length > longestString.length) {
            longestString = array[i];
        }
    }
    return longestString
}

let arrayOfStrings = ["djghjdghj", "kfsjksfjkjfs", "dslkll----sdl", "xfpepeöeöeö"];

console.log(longestString(arrayOfStrings));