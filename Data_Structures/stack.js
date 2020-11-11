/*
A LIFO data structure!
The last element added to the stack will be the first element removed from the stack
HOW IS IT USED?
Think about a stack of plates, or a stack of markers, or a stack of....anything.
As you pile it up the last thing (or the topmost thing) is what gets removed first.
BIG O of STACKS
Insertion -   O(1)
Removal -   O(1)
Searching -   O(N)
Access -   O(N)
*/

class Node {
  //create my node
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  //create stack
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  /*
  PUSHING PSEUDOCODE
The function should accept a value
Create a new node with that value
If there are no nodes in the stack, set the first and last property to be the newly created node 
If there is at least one node, create a variable that stores the current first property on the stack
Reset the first property to be the newly created node
Set the next property on the node to be the previously created variable
Increment the size of the stack by 1
  */
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let tempNode = this.first;
      this.first = newNode;
      this.first.next = tempNode;
    }
    return ++this.size;
  }
  //   POP PSEUDOCODE
  // If there are no nodes in the stack, return null
  // Create a temporary variable to store the first property on the stack
  // If there is only 1 node, set the first and last property to be null
  // If there is more than one node, set the first property to be the next property on the current first
  // Decrement the size by 1
  // Return the value of the node removed
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
//to run in the console, var stack = new Stack()
