const { QueueWithArray } = require("../src/queue");

xdescribe("Queues with an Array", () => {
  let queue;

  beforeEach(() => {
    queue = new QueueWithArray();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
  });

  it("the enqueue method should add a value to the end of the queue", () => {
    const queueToCompare = [1, 2, 3, 4];

    queue.enqueue(4);

    expect(queue.items).toEqual(queueToCompare);
  });

  it("the dequeue method should remove the value from the start of the queue", () => {
    const queueToCompare = [2, 3];

    queue.dequeue();

    expect(queue.items).toEqual(queueToCompare);
  });

  it("the front method should return the value at the front of the queue", () => {
    expect(queue.front()).toBe(1);
  });

  it("the view method should return all values of the queue", () => {
    const queueToCompare = [1, 2, 3];

    expect(queue.view()).toEqual(queueToCompare);
  });

  it("the size method should return the size of the queue", () => {
    expect(queue.size()).toBe(3);
  });

  it("the isEmpty method should return true if the queue is empty", () => {
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toBeTrue();
  });

  it("the isEmpty method should return false if the queue is not empty", () => {
    expect(queue.isEmpty()).toBeFalse();
  });
});
