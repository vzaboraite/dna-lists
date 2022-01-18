const { StackWithArray } = require("../src/stack")

describe("Stack with an Array", () => {
  let stack

  beforeEach(() => {
    stack = new StackWithArray()

    stack.push(1)
    stack.push(2)
    stack.push(3)
  })

  it("the push method should add a value to the end of the stack", () => {
    const stackToCompare = [1, 2, 3, 4]

    stack.push(4)

    expect(stack.items).toEqual(stackToCompare)
  })

  it("the pop method should remove the value from the end of the stack", () => {
    const stackToCompare = [1, 2]

    stack.pop()

    expect(stack.items).toEqual(stackToCompare)
  })

  it("the top method should return the value at the top of the stack", () => {
    expect(stack.top()).toBe(3)
  })

  it("the view method should return all values of the stack", () => {
    const stackToCompare = [1, 2, 3]

    expect(stack.view()).toEqual(stackToCompare)
  })

  it("the size method should return the size of the stack", () => {
    expect(stack.size()).toBe(3)
  })

  it("the isEmpty method should return true if the stack is empty", () => {
    stack.pop()
    stack.pop()
    stack.pop()

    expect(stack.isEmpty()).toBeTrue()
  })

  it("the isEmpty method should return false if the stack is not empty", () => {
    expect(stack.isEmpty()).toBeFalse()
  })
})
