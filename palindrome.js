function swapPalindromeSubstrings(str) {
    let words = str.split(/\s+/); 
    let palindromes = words.filter(word => isPalindrome(word) && word.length > 1);
    
    if (palindromes.length === 0) return [];
    
    let maxLength = Math.max(...palindromes.map(p => p.length));
    return palindromes.filter(p => p.length === maxLength);
}

console.log