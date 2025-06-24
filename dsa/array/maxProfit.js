const maxProfit = (arr) => {
  let profit = 0;
  let buyPrice = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (buyPrice > arr[i]) buyPrice = arr[i];
    profit = Math.max(profit, arr[i] - buyPrice);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
