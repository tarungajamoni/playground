//actual
const obj = {
    name: "abc",
    place: "hyd",
  };
  function func(country) {
    console.log(`${this.name}, ${this.place}, ${country}`);
  }
  func.call(obj, "india");
  
  //simplified
  const obj2 = {
    name: "abc",
    place: "hyd",
    func: function (country) {
      console.log(`${this.name}, ${this.place}, ${country}`);
    },
  };
  
  obj2.func.call(obj2, "india");
  
  
  
  //simple polyfill
  Function.prototype.myCall1 = function (callback, ...args) {
    callback.temp = this;
    return callback.temp(...args);
  };
  func.myCall1(obj, "india");
  //handling edge cases
  Function.prototype.myCall2 = function (callback, ...args) {
    // use Function -> Function.prototype, Object-> Function.prototype and Object.prototype
    callback = callback || globalThis; // Default `callback` to `globalThis` if `null` or `undefined`
    callback.temp = this;
    const result = callback.temp(...args);
    delete callback.temp; // Clean up the temporary property
    return result;
  };
  
  func.myCall2(obj, "test");
  
  //reference
  Function.prototype.myCall = function (context, ...args) {
    // Default `context` to `globalThis` if `null` or `undefined`
    context = context ?? globalThis;
    // Ensure primitives are coerced to objects
    if (typeof context !== "object" && typeof context !== "function") {
      context = Object(context);
    }
    // Create a unique property to avoid overwriting existing ones
    const uniqueKey = Symbol("temp");
    context[uniqueKey] = this;
    // Call the function and store the result
    const result = context[uniqueKey](...args);
    // Clean up the temporary property
    delete context[uniqueKey];
    return result;
  };
  