//actual
const obj = {
  name: "abc",
  place: "hyd",
};
function func(country) {
  console.log(`${this.name}, ${this.place}, ${country}`);
}
const funcexe = func.bind(obj, "actual");
funcexe();

//simple polyfill
Function.prototype.myBind1 = function (scope, ...args) {
  scope.temp = this;
  return function () {
    return scope.temp(...args);
  };
};
const funcexe1 = func.myBind1(obj, "simple");
funcexe1();

//handling edge cases
Function.prototype.myBind2 = function (scope, ...args) {
  scope = scope ?? globalThis;
  scope.temp = this;
  return function () {
    return scope.temp(...args);
  };
};
const funcexe2 = func.myBind2(obj, "test");
funcexe2();
