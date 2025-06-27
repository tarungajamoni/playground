const subArray = (arr, size) => {
  const new_arr = [];
  for (i = 0; i < arr.length; i++) {
    const subArrayIndex = Math.floor(i / size);
    if (!new_arr[subArrayIndex]) new_arr[subArrayIndex] = [];
    new_arr[subArrayIndex].push(arr[i]);
  }
  return new_arr;
};

console.log(subArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
