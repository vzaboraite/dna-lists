class SingleLinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  // push: add a node to the tail of the list and return the list

  push(node) {
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  // pop: remove a node from the tail of the list and return the removed node

  pop() {}

  // shift: remove a node from the head of the list and return the removed node

  shift() {}

  // unshift: insert a node at the head of the list and return the list

  unshift(node) {}

  // get: return a node at a given index

  get(index) {}

  // set: update the value of the node at a given index and return a Booelan

  set(index, value) {}

  // insert: inserts a new node at the given index

  insert(index, node) {}

  // remove: removes the node at a given index

  remove(index) {}
}

module.exports = SingleLinkedList;
