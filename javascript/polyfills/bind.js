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
Function.prototype.myBind2 = function (scope, ...bindArgs) {
  scope = scope ?? globalThis;
  const fn = this;
  return function (...callArgs) {
    //callArgs are to support args passed during invocation
    scope.temp = fn;
    const result = scope.temp(...[...bindArgs, ...callArgs]);
    delete scope.temp;
    return result;
  };
};
const funcexe2 = func.myBind2(obj, "test");
funcexe2();
//or below
const funcexe3 = func.myBind2(obj);
funcexe3("test1");

// more simpler using apply
Function.prototype.myBind3 = function (scope, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(scope ?? globalThis, [...bindArgs, ...callArgs]);
  };
};
const funcexe4 = func.myBind3(obj, "test2");
funcexe4();
