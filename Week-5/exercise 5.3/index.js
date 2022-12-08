const hasDuplicates = (arr) => [...new Set(arr)].length !== arr.length;

console.log(hasDuplicates([1, 2, 1, 3, 5, 3])); // true
console.log(hasDuplicates([1, 2, 3, 4, 5])); // false
