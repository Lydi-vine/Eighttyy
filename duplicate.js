function removeduplicates(arr){
    return [...new Set(arr)];
}

console.log(removeduplicates([1,2,2,3,2,2,2]));