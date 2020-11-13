/*
TREE TERMINOLOGY
Root - The top node in a tree.
Child -A node directly connected to another node when moving away from the Root.
Parent - The converse notion of a child.
Siblings -A group of nodes with the same parent.
Leaf - A node with no children.
Edge - The connection between one node and another.

HOW BSTS WORK
Every parent node has at most two children
Every node to the left of a parent node is always less than the parent
Every node to the right of a parent node is always greater than the parent

Big O of BST
Insertion - O(log n)
Searching - O(log n)
NOT guaranteed! 
Because there could be a linear tree such as 12-->15-->19-->20-->62 in this tree, the time for search or insert is linear O(n)
*/
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
  /*
  INSERTING A NODE
Steps - Iteratively or Recursively

Create a new node
Starting at the root
Check if there is a root, if not - the root now becomes that new node!
If there is a root, check if the value of the new node is greater than or less than the value of the root
If it is greater 
Check to see if there is a node to the right
If there is, move to that node and repeat these steps
If there is not, add that node as the right property
If it is less
Check to see if there is a node to the left
If there is, move to that node and repeat these steps
If there is not, add that node as the left property
  */
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  //   Finding a Node in a BST
  // Steps - Iteratively or Recursively

  // Starting at the root
  // Check if there is a root, if not - we're done searching!
  // If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  // If not, check to see if the value is greater than or less than the value of the root
  // If it is greater
  // Check to see if there is a node to the right
  // If there is, move to that node and repeat these steps
  // If there is not, we're done searching!
  // If it is less
  // Check to see if there is a node to the left
  // If there is, move to that node and repeat these steps
  // If there is not, we're done searching!
  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  //this code works as well as find but return boolean true or false instead.
  // contains(value){
  //   if(this.root === null) return false;
  //   var current = this.root;
  //   var found = false;
  //   while(current && !found){
  //     if(value < current.value){
  //       current = current.left;
  //     } else if(value > current.value){
  //       current = current.right
  //     } else {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
