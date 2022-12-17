const isVowel = (char) => {
  return "aeiou".includes(char); // if the character is in the k th position the time complexity will be O(k)
};

const vowelCount = (str) => {
  const vowelMap = new Map();
  const strLower = str.toLowerCase(); // time complexity is O(n)

  for (let char of strLower) {
    if (isVowel(char)) {
      vowelMap.has(char)
        ? vowelMap.set(char, vowelMap.get(char) + 1)
        : vowelMap.set(char, 1);
    }
  }
  console.log(vowelMap);
};
vowelCount("Hello how are you");

// map.set(), map.get(), map.has() time complexity will be O(1)
// and the space complexity for the map will be O(n)
