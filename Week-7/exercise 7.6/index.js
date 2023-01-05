function find3Numbers(arr, sum) {
  for (let i = 0; i < arr.length - 2; i++) {
    let curr_sum = sum - arr[i];
    let s = new Set();

    for (let j = i + 1; j < arr.length; j++) {
      if (s.has(curr_sum - arr[j])) {
        console.log(`Triplet is ${arr[i]} , ${arr[j]} , ${curr_sum - arr[j]}`);
        // return true;
      }

      s.add(arr[j]);
    }
    console.log(s);
  }

  // return false;
}

let arr = [-1, 2, 1, -4];

let sum = 2;

console.log(find3Numbers(arr, sum));
