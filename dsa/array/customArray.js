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
  //shift
  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  //delete
  delete(index) {
    const item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    return item;
  }
}
const arr = new MyArray2();
arr.push("abc");
arr.push("lmn");
arr.push("pqr");
arr.push("xyz");
console.log("push", arr); //MyArray2 { length: 4, data: { '0': 'abc', '1': 'lmn', '2': 'pqr', '3': 'xyz' } }
console.log("get(1)", arr.get(1)); //lmn
arr.delete(2);
console.log("delete(2)", arr); //MyArray2 { length: 3, data: { '0': 'abc', '1': 'lmn', '2': 'xyz', '3': 'xyz' } }
arr.pop();
console.log("pop", arr); //MyArray2 { length: 2, data: { '0': 'abc', '1': 'lmn', '3': 'xyz' } }
arr.shift();
console.log("shift", arr); //MyArray2 { length: 1, data: { '0': 'lmn', '3': 'xyz' } }
