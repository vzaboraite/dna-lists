const { SingleLinkedList } = require("../src/linked-list/index");
const { SingleLinkNode } = require("../src/linked-list/Node");

function normalizeObj(obj) {
  let cleanObj = {};

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      cleanObj = { ...cleanObj, [key]: normalizeObj({ ...obj[key] }) };
      continue;
    } else {
      cleanObj = { ...cleanObj, [key]: obj[key] };
    }
  }

  return cleanObj;
}

function toDeepEqual(util) {
  function compare(actual, expected) {
    if (typeof actual === "object" && actual !== null) {
      actual = normalizeObj(actual);
    }

    const result = {};

    result.pass = util.equals(actual, expected);

    if (result.pass) {
      result.message = "PASS";
    } else {
      let expectedAsString;
      let actualAsString;

      if (typeof expected === "object" && expected !== null) {
        expectedAsString = JSON.stringify(expected);
      }
      if (typeof actual === "object" && actual !== null) {
        actualAsString = JSON.stringify(actual);
      }

      result.message = `Expected ${expectedAsString} but recieved ${actualAsString}.`;
    }

    return result;
  }

  return { compare };
}

describe("Single Linked List", () => {
  let list;

  beforeEach(() => {
    jasmine.addMatchers({ toDeepEqual });

    list = new SingleLinkedList();

    list.push(new SingleLinkNode(1));
    list.push(new SingleLinkNode(2));
    list.push(new SingleLinkNode(3));
  });

  it("the push method should add a node to the tail of the list and return the list", () => {
    const listToCompare = {
      head: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: null,
            },
          },
        },
      },
      tail: { value: 4, next: null },
      length: 4,
    };

    expect(list.push(new SingleLinkNode(4))).toDeepEqual(listToCompare);
  });

  it("the pop method should remove a node from the tail of the list and return the removed node", () => {
    const nodeToCompare = {
      value: 3,
      next: null,
    };

    const listToCompare = {
      head: {
        value: 1,
        next: {
          value: 2,
          next: null,
        },
      },
      tail: { value: 2, next: null },
      length: 2,
    };

    expect(list.pop()).toDeepEqual(nodeToCompare);
    expect(list).toDeepEqual(listToCompare);
  });

  it("the pop method should remove all nodes when the list is empty", () => {
    const nodeToCompare = {
      value: 1,
      next: null,
    };

    const listToCompare = {
      head: undefined,
      tail: undefined,
      length: 0,
    };

    list.pop();
    list.pop();

    expect(list.pop()).toDeepEqual(nodeToCompare);
    expect(list).toDeepEqual(listToCompare);
  });

  it("the shift method should remove a node form the head of the list and return the removed node", () => {
    const nodeToCompare = {
      value: 1,
      next: null,
    };

    expect(list.shift()).toDeepEqual(nodeToCompare);
  });

  it("the shift method should remove all nodes when the list is empty", () => {
    const nodeToCompare = {
      value: 3,
      next: null,
    };

    const listToCompare = {
      head: undefined,
      tail: undefined,
      length: 0,
    };

    list.shift();
    list.shift();

    expect(list.shift()).toDeepEqual(nodeToCompare);
    expect(list).toDeepEqual(listToCompare);
  });

  it("the unshift method should insert a node at the head of the list and return the list", () => {
    const listToCompare = {
      head: {
        value: 0,
        next: {
          value: 1,
          next: {
            value: 2,
            next: {
              value: 3,
              next: null,
            },
          },
        },
      },
      tail: { value: 3, next: null },
      length: 4,
    };

    expect(list.unshift(new SingleLinkNode(0))).toDeepEqual(listToCompare);
  });

  it("the get method should return a node at a given index", () => {
    const nodeToCompare = {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    };

    expect(list.get(1)).toDeepEqual(nodeToCompare);
  });

  it("the get method should return undefined if a node doesn't exist", () => {
    expect(list.get(5)).toBeUndefined();
  });

  it("the set method should update the value of the node at the given index and return a Boolean", () => {
    const listToCompare = {
      head: {
        value: 1,
        next: {
          value: 20,
          next: {
            value: 3,
            next: null,
          },
        },
      },
      tail: { value: 3, next: null },
      length: 3,
    };

    expect(list.set(1, 20)).toBeTrue();
    expect(list.set(5, 50)).toBeFalse();
    expect(list).toDeepEqual(listToCompare);
  });

  it("the insert method should insert a new node at the given index and return the list", () => {
    const listToCompare = {
      head: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 4,
            next: {
              value: 3,
              next: null,
            },
          },
        },
      },
      tail: { value: 3, next: null },
      length: 4,
    };

    expect(list.insert(2, new SingleLinkNode(4))).toDeepEqual(listToCompare);
  });

  it("the insert method should return false if the index is less than 0", () => {
    expect(list.insert(-1)).toBeFalse();
  });

  it("the insert method should insert a new node at the tail of the list if the given index is greater than the length and return the list", () => {
    const listToCompare = {
      head: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 5,
              next: null,
            },
          },
        },
      },
      tail: { value: 5, next: null },
      length: 4,
    };

    expect(list.insert(5, new SingleLinkNode(5))).toDeepEqual(listToCompare);
  });

  it("the remove method should remove the new node at the given index and return the removed node", () => {
    const nodeToCompare = {
      value: 2,
      next: null,
    };

    const listToCompare = {
      head: {
        value: 1,
        next: {
          value: 3,
          next: null,
        },
      },
      tail: { value: 3, next: null },
      length: 2,
    };

    expect(list.remove(1)).toDeepEqual(nodeToCompare);
    expect(list).toDeepEqual(listToCompare);
  });

  it("the remove method should return undefined if the index is less than 0 and greater than the length of the list", () => {
    expect(list.remove(-1)).toBeUndefined();
    expect(list.remove(5)).toBeUndefined();
  });
});
