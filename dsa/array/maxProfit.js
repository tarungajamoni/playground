const maxProfit = (arr) => {
  let profit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    profit = Math.max(profit, arr[i + 1] - arr[i]);
  }
  return profit;
};

console.log(maxProfit([1, 7, 5, 3, 6, 4]));
