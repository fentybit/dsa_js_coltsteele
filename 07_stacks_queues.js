//! Stacks + Queues

// Stack
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    let temp = this.first;
    this.first = newNode;
    this.first.next = temp;

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}

// Queue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    let removeNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return removeNode.value;
  }
}