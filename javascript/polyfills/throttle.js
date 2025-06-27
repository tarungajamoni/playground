const throttle = (func, limit) => {
  let lastCall = 0;
  return function (...args) {
    let now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};
