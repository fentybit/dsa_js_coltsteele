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
}