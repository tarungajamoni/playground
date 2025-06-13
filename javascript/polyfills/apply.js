//actual
const obj1 = {
  name: "obj1 abc",
  place: "obj1 hyd",
};
function func(country) {
  console.log(`${this.name}, ${this.place}, ${country}`);
}
func.apply(obj1, ["actual"]);

//simplified
const obj2 = {
  name: "obj2 abc",
  place: "obj2 hyd",
  func: function (country) {
    console.log(`${this.name}, ${this.place}, ${country}`);
  },
};

obj2.func.apply(obj2, ["simplified"]);

//simple polyfill
Function.prototype.myApply1 = function (callback, args) {
  callback.temp = this;
  return callback.temp(...args);
};
func.myApply1(obj2, ["simple"]);

 //handling edge cases
 Function.prototype.myApply2 = function (callback, args) {
    // use Function -> Function.prototype, Object-> Function.prototype and Object.prototype
    callback = callback || globalThis; // Default `callback` to `globalThis` if `null` or `undefined`
    callback.temp = this;
    const result = callback.temp(...args);
    delete callback.temp; // Clean up the temporary property
    return result;
  };
  
  func.myApply2(obj2, ["test"]);
