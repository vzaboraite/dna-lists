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

  pop() {
    let currentNode = this.head;
    let newTail = currentNode;

    for (let i = 0; i < this.length - 1; i++) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    newTail.next = null;
    this.tail = newTail;

    this.length--;
    if (this.length === 0) {
      this.head = undefined;
      this.tail = undefined;
    }

    return currentNode;
  }

  // shift: remove a node from the head of the list and return the removed node

  shift() {
    const oldHeadNode = this.head;
    this.head = oldHeadNode.next;
    oldHeadNode.next = null;

    this.length--;
    if (this.length === 0) {
      this.head = undefined;
      this.tail = undefined;
    }

    return oldHeadNode;
  }

  // unshift: insert a node at the head of the list and return the list

  unshift(node) {
    let oldHeadNode = this.head;
    this.head = node;
    this.head.next = oldHeadNode;

    this.length++;

    return this;
  }

  // get: return a node at a given index

  get(index) {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (!currentNode) return undefined;

      currentNode = currentNode.next;
    }
    console.log(currentNode);

    return currentNode;
  }

  // set: update the value of the node at a given index and return a Booelan

  set(index, value) {
    let currentNode = this.head;

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        currentNode.value = value;
        return true;
      }
      if (!currentNode.next) {
        return false;
      }
      currentNode = currentNode.next;
    }
  }


  // insert: inserts a new node at the given index

  insert(index, node) {}

  // remove: removes the node at a given index

  remove(index) {}
}

module.exports = SingleLinkedList;
