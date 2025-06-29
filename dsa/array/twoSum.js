const twoSum = (arr, sum) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) return [arr[i], arr[j]];
    }
  }
  return [];
};

console.log(twoSum([1, 2, 3, 4, 5, 6], 6)); // [1,5]
console.log(twoSum([1, 3, 7, 9, 2], 19)); //[]
