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

TRAVERSE A TREE:
Visit every node at once
There are two ways to traverse a tree
TRAVERSING A TREE
Two ways:

Breadth-first Search
Depth-first Search

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
    var newNode = new Node(value); //create a node
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root; //keep track of current position of our value
    while (true) {
      //while true run this loop
      if (value === current.value) return undefined; //check if current value inserted already exixts
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
    if (this.root === null) return false; //check our root
    var current = this.root; //keep track of current position of the value
    var found = false; //assigned false
    while (current && !found) {
      //while current value and it has not been found
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current; //return the value intended.
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

//   Steps - Iteratively

// Create a queue (this can be an array) and a variable to store the values of nodes visited
// Place the root node in the queue
// Loop as long as there is anything in the queue
// Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
// If there is a left property on the node dequeued - add it to the queue
// If there is a right property on the node dequeued - add it to the queue
// Return the variable that stores the values

  bfs(){ //traverse a tree per levels start with root then children from left to right and go on
    var node = this.root
    var queue = []
    var data= []
    queue.push(node);
    while (queue.length){
      node = queue.shift()
      data.push(node.value)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data;
  }

  Steps - Recursively

DFS - PreOrder
Create a variable to store the values of nodes visited
Store the root of the BST in a variable called current
Write a helper function which accepts a node
Push the value of the node to the variable that stores the values
If the node has a left property, call the helper function with the left property on the node
If the node has a right property, call the helper function with the right property on the node
Invoke the helper function with the current variable
Return the array of values
  DFSPreOrder(){ //traverse the tree starting from root then the left side and then right side
    var data = []; //Stack
    var current = this.root
    function traverse(node){
      data.push(node.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    return data;
  }

  Steps - Recursively

DFS - PostOrder
Create a variable to store the values of nodes visited
Store the root of the BST in a variable called current
Write a helper function which accepts a node
If the node has a left property, call the helper function with the left property on the node
If the node has a right property, call the helper function with the right property on the node
Push the value of the node to the variable that stores the values
Invoke the helper function with the current variable
Return the array of values
  DFSPostOrder(){ // traverse to left side then the right side and finally adds the root.
     var data = []; //Stack
    var current = this.root
    function traverse(node){
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(current)
    return data;
  }

  Steps - Recursively

DFS - InOrder
Create a variable to store the values of nodes visited
Store the root of the BST in a variable called current
Write a helper function which accepts a node
If the node has a left property, call the helper function with the left property on the node
Push the value of the node to the variable that stores the values
If the node has a right property, call the helper function with the right property on the node
Invoke the helper function with the current variable
Return the array of values
  DFSInOrder(){ //Always return sorted list from loest to highest
     var data = []; //Stack
    var current = this.root
    function traverse(node){
      if(node.left) traverse(node.left)
      data.push(node.value)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

/*leetcode problem */
// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32

//                   10
//                 /   \
//               5      15
//              / \       \
//            3    7       18

// * Definition for a binary tree node.
// * function TreeNode(val, left, right) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.left = (left===undefined ? null : left)
// *     this.right = (right===undefined ? null : right)
// * }
// */
// /**
// * @param {TreeNode} root
// * @param {number} low
// * @param {number} high
// * @return {number}
// */
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  function dfs(node) {
    //pass a node
    if (!node) return; //checking if node exists
    //check within the range
    if (node.val >= low && node.val <= high) {
      sum += node.val; //add the sum
    }
    //traverse throught he tree
    //if the low is less than value operate the range if statement
    if (low < node.val) {
      dfs(node.left);
    }
    if (high > node.val) {
      dfs(node.right);
    }
  }
  //invoke helpe method passing the root given
  dfs(root);
  return sum;
};
