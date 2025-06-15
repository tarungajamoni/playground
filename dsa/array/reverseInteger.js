const reverseInteger = (num) => {
  const strReverse = num.toString().split("").reverse().join(""); //convert to string and reverse
  return parseInt(strReverse) * Math.sign(num); //convert to number and retain sign
};
console.log(reverseInteger(-123)); //-321
