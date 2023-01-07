function find3Numbers(arr, target) {
  let diff = 1000000;
  let closest = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      let value = arr[i] + arr[j] + arr[j + 1];
      if (diff > Math.abs(value - target)) {
        diff = Math.abs(value - target);
        closest = value;
      }
    }
  }
  return closest;
}

let arr = [-1, 2, 1, -4];
let target = 1;

console.log(find3Numbers(arr, target)); // output 2
