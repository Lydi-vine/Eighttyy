function explainCharAt(str, index) {
  if (typeof str !== 'string') {
    return "Input must be a string.";
  }

  if (typeof index !== 'number' || !Number.isInteger(index)) {
    return "Index must be an integer.";
  }

  if (index < 0 || index >= str.length) {
    return ""; // Returns an empty string for out-of-range indices.
  }

  return str.charAt(index);
}

// Example usage:
const myString = "Hello, World!";

console.log(explainCharAt(myString, 0)); // Output: "H"
console.log(explainCharAt(myString, 6)); // Output: " "
console.log(explainCharAt(myString, 12)); // Output: "!"
console.log(explainCharAt(myString, 13)); // Output: "" (out of range)
console.log(explainCharAt(myString, -1)); // Output: "" (out of range)
console.log(explainCharAt(123, 0)); // Output: "Input must be a string."
console.log(explainCharAt("test", 1.5)); //output: "Index must be an integer."