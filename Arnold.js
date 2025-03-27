function getCharacterAtIndex(str, index) {
    if (typeof str !== 'string') {
      return "Input must be a string.";
    }
    if (typeof index !== 'number' || index < 0 || index >= str.length) {
      return "Invalid index.";
    }
    return str.charAt(index);
  }
  
  // Example usage:
  let myString = "Hello, world!";
  
  console.log(getCharacterAtIndex(myString, 0)); // Output: H
  console.log(getCharacterAtIndex(myString, 7)); // Output: w
  console.log(getCharacterAtIndex(myString, 100)); //Output: Invalid index.
  console.log(getCharacterAtIndex(123, 1)); //Output: Input must be a string.