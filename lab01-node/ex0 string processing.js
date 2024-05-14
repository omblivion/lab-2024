function processStrings(arr) {
    arr.forEach(str => {
        let result = '';
        if (str.length >= 2) {
            result = str.substring(0, 2) + str.substring(str.length - 2);
        }
        console.log(result);
    });
}

// Example usage
const testStrings = ['spring', 'it', 'cat', 'a', 'hello'];
processStrings(testStrings);
