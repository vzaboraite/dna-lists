class ArrayClass {
  constructor() {
    this.data = {}
    this.length = 0
  }

  push(value) {
    this.data[this.length] = value

    this.length++

    return this.length
  }

  pop() {
    const lastItemIndex = this.length - 1
    const lastItem = this.data[lastItemIndex]

    delete this.data[lastItemIndex]

    this.length--

    return lastItem
  }

  unshift(value) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[0] = value

    this.length++

    return this.length
  }

  shift() {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }

    this.length--

    delete this.data[this.length]

    return
  }
}

module.exports = ArrayClass
