class StackWithArray {
  constructor() {
    this.items = [];
  }

  // top: retrieves the value at the top of the stack

  top() {
    return this.items[this.items.length - 1];
  }

  // view: returns all values of the stack

  view() {
    return this.items;
  }

  // push: add to the end of the stack
  // TC: O(1)

  push(item) {
    return this.items.push(item);
  }

  // pop: remove from the end of the stack
  // TC: O(1)

  pop() {
    return this.items.pop();
  }

  // size: check the size of the stack

  size() {
    return this.items.length;
  }

  // isEmpty: check if the stack is empty

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = StackWithArray;
