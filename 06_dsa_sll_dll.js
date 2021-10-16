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
