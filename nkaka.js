function checkSubstring(text, search) {
    return text.includes(search);
}

console.log(checkSubstring("Hello, Lydivine!", "Lydivine")); // true
console.log(checkSubstring("Hello, World!", "Lydivine"));   // false