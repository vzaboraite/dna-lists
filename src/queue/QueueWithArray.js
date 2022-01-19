class QueueWithArray {
  constructor() {
    this.items = []
  }

  // front: returns the first value

  front() {}

  // view: returns all values of the queue

  view() {
    return this.items
  }

  // enqueue: add to the end of the queue
  // TC: O(1)

  enqueue(item) {
    this.items.push(item)
  }

  // dequeue: remove from the start of the queue
  // TC: O(n)

  dequeue() {}

  // size: check the size of the queue

  size() {
    return this.items.length
  }

  // isEmpty: check if the queue is empty

  isEmpty() {
    return this.items.length === 0
  }
}

module.exports = QueueWithArray
