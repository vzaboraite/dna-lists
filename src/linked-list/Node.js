class SingleLinkNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class DoubleLinkNode {
  constructor(value) {
    this.value = value
    this.previous = null
    this.next = null
  }
}

module.exports = { SingleLinkNode, DoubleLinkNode }
