//! Data Structures Introduction

// Data structures are collections of values, the relationships among them, and the functions 
// or operations that can be applied to the data. Different data structures excel at different
// things. Some are highly specialized, while others (like arrays) are more generally used. 
// Understanding ES2015 Class, a blueprint for creating objects with pre-defined properties 
// and methods. 

// The method to create new objects must be called constructor
class Student {
  // Special function that gets run when the class is instantiated
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Instance Methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }

  // Utility functions
  static enrollStudents() {
    return 'Enrolling students!'
  }
}

// Creating objects from classes
let firstStudent = new Student("Fenty", "Hall");
Student.enrollStudents();

//! Singly Linked List

// Data structure that contains a head, tail, and length property. 
// SLL consist of nodes, and each node has a value and a pointer to another node or null.
// SLL do not have indices, connected via nodes with a next pointer, and random access 
// is not allowed.
// Main reason to use SLL is if you need quick insertion or deletion at beginning 
// frequently required.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // removing a node from the end of the Linked List
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // removing a new node from the beginning of the Linked List
  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) this.tail = null;

    return current;
  }

  // adding a new node to the beginning of the Linked List
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // retrieving a node by its position in the Linked List
  get(index) {
    if (index < 0 || this.length <= index) return null;
    let counter = 0;
    let current = this.head;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // changing the value of a node based on its position in the Linked List
  set(value, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  // adding a node to the Linked List at a specific position
  insert(value, index) {
    if (index < 0 || this.length < index) {
      return false;
    } else if (this.length === index) {
      return !!this.push(value);
    } else if (index === 0) {
      return !!this.unshift(value);
    }

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;

    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // removing a node from the Linked List at a specific position
  remove(index) {
    if (index < 0 || this.length >= index) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prevNode = this.get(index - 1);
    let removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length--;

    return removeNode;
  }

  // reversing the Linked List in place
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

// O(1) Insertion
// O(1) or O(n) Removal
// O(n) Searching
// O(n) Access

//! Doubly Linked List

// Almost idential to SLL, except every node has another pointer, to the previous node!
// More memory === more flexibility

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding a node to the end of the DLL
  push(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // removing a node from the end of the DLL
  pop() {
    if (!this.head) return undefined;
    let popNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.prev;
      this.tail.next = null;
      popNode.prev = null;
    }

    this.length--;
    return popNode;
  }

  // removing a node from the beginning of the DLL
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  // adding a node to the beginning of the DLL
  unshift(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // accessing a node in a DLL by its position
  get(index) {
    if (index < 0 || this.length <= index) return null;
    let counter, current;

    if (index <= this.length / 2) {
      current = this.head;
      counter = 0;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }

    return current;
  }

  // replacing the value of a node in DLL
  set(value, index) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = value;
      return true;
    }

    return false;
  }

  // insert a node in a DLL by a certain position
  insert(value, index) {
    if (index < 0 || this.length < index) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;

    this.length++;
    return true;
  }

  // removing a node in a DLL by a certain position
  remove(index) {
    if (index < 0 || this.length <= index) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removeNode = this.get(index);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;
    beforeNode.next = afterNode, afterNode.prev = beforeNode;
    removeNode.prev = null, removeNode.next = null;

    this.length--;
    return removeNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

// O(1) Insertion
// O(1) Removal
// O(n) Searching
// Technically, searching is O(n/2), but it's still O(n)
// O(n) Access