// Basic Array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
}
console.log(new MyArray()); //MyArray { length: 0, data: {} }

//with methods
class MyArray2 {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //push
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  //get
  get(index) {
    return this.data[index];
  }
  //pop
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}
const arr = new MyArray2();
arr.push("abc");
arr.push("xyz");
console.log(arr); //MyArray2 { length: 2, data: { '0': 'abc', '1': 'xyz' } }
console.log(arr.get(1)); //xyz
arr.pop();
console.log(arr); //MyArray2 { length: 1, data: { '0': 'abc' } }
