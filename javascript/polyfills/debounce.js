const debounce = (func, delay) => {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
