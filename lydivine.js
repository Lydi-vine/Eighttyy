function checkEndsWith(str, suffix) {
    return str.endsWith(suffix);
}

console.log(checkEndsWith("Hello World", "World")); // true
console.log(checkEndsWith("JavaScript is fun", "fun")); // true
console.log(checkEndsWith("Learning Git", "Hub")); // false