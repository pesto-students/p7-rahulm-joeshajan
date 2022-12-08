const isVowel = (char) => {
  return "aeiou".includes(char);
};

const vowelCount = (str) => {
  const vowelMap = new Map();
  const strLower = str.toLowerCase();

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
