//! Binary Search Trees

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // Implement the following function on the BinarySearchTree.prototype.
  // This function should remove a node from a binary search tree. Your remove
  // function should be able to handle removal of the root node, removal of a node
  // with one child and removal of a node with two children. The function should
  // return the node removed.
  remove(value) {
    let foundNode = this.find(value);

    // helper function to remove node value in the tree and behaves recursively
    const removeNode = (node, value) => {
      if (!node) return null;

      if (value === node.value) {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let temp = node.right;
        while (temp.left) {
          temp = temp.left;
        }
        node.value = temp.value;
        node.right = removeNode(node.right, temp.value);
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
      } else {
        node.right = removeNode(node.right, value);
      }

      return node;
    }

    this.root = removeNode(this.root, value);
    return foundNode ? value : undefined;
  }

  findSecondLargest() {
    if (!this.root) return undefined;
    return this.root.value;
  }

  // Write a function on the BinarySearchTree class.
  // isBalanced returns true if the BST is balanced, otherwise returns false.
  // A balanced tree is defined as a tree where the depth of all leaf nodes or
  // nodes with single children differ by no more than one.
  isBalanced() {
    let leftCounter = 0, rightCounter = 0;

    let leftNode = this.root;
    while (leftNode.left) {
      leftNode = leftNode.left;
      leftCounter++;
    }

    let rightNode = this.root;
    while (rightNode.right) {
      rightNode = rightNode.right;
      rightCounter++;
    }

    return Math.abs(rightCounter - leftCounter) <= 1;
  }
}

let bst = new BinarySearchTree();
bst
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50)
    .insert(60)
    .insert(30)
    .insert(25)
    .insert(23)
    .insert(24)
    .insert(70)
bst.remove(10);
bst.root.left.value // 12
bst.root.left.left.value // 1
bst.root.left.left.right.value // 5

let bst2 = new BinarySearchTree()
bst2.insert(5)
bst2.isBalanced() // true
bst2.insert(6)
bst2.isBalanced() // true
bst2.insert(7)
bst2.isBalanced() // false

// Both insertion and searching time complexity is O(log n) on best and average
// This means if you double the number of nodes, you only increase the number
// of steps to insert/find by 1
// Worst case scenario if you have completely one-sided tree, it will be O(n2)