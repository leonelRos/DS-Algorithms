/*
WHAT IS A BINARY HEAP?
Very similar to a binary search tree, but with some different rules!
In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes
 
Big O of Binary Heaps
Insertion -   O(log N)
Removal -   O(log N)
Search -   O(N)

Why do we need to know this?
Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
They are also used quite a bit, with graph traversal algorithms

MAX BINARY HEAP
Each parent has at most two child nodes
The value of each parent node is always greater than its child nodes
In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first
 */

class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }

  //   INSERT PSEUDOCODE
  // Push the value into the values property on the heap
  // Bubble Up:
  // Create a variable called index which is the length of the values property - 1
  // Create a variable called parentIndex which is the floor of (index-1)/2
  // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
  // Swap the value of the values element at the parentIndex with the value of the element property at the child index
  // Set the index to be the parentIndex, and start over!

  insert(element) {
    this.value.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.value.length - 1; //this is the indexes in the BH
    const element = this.value[idx]; //each number in the BH
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); //formula to find a parent
      let parent = this.value[parentIdx];
      if (element <= parent) break;
      //if no swap them
      this.value[parentIdx] = element;
      this.value[idx] = parent;
      //swap the indexes
      idx = parentIdx;
    }
  }

  //   REMOVING
  // Swap the first value in the values property with the last one
  // Pop from the values property, so you can return the value at the end.
  // Have the new root "sink down" to the correct spot...​
  // Your parent index starts at 0 (the root)
  // Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  // Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
  // If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
  // The child index you swapped to now becomes the new parent index.
  // Keep looping and swapping until neither child is larger than the element.
  // Return the old root!

  // when removing from a MaxBinary Heap always start from highest node or root
  extractMax() {
    let max = this.value[0]; //the first element in the BH
    let end = this.value.pop(); //pop the last element
    if (this.value.length > 0) {
      //add statement to not because once BH reaches the last elment it will pop itself and push back on the BH. AKA infinite loop
      //swap the frist element with last and store last in variable max
      this.value[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  bubbleDown() {
    let idx = 0;
    let length = this.value.length;
    let element = this.value[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1; //formula to find first children from a parent
      let rightChildIdx = 2 * idx + 2; //formula to find second children from same parent
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        //to check it doesnt go out of bounce
        leftChild = this.value[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        //to check it doesnt go out of bounds
        rightChild = this.value[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.value[idx] = this.value[swap];
      this.value[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

/*
WHAT IS A
PRIORITY QUEUE?
A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

Write a Min Binary Heap - lower number means higher priority.
Each Node has a val and a priority.  Use the priority to build the heap.
Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
Dequeue method removes root element, returns it, and rearranges heap using priority.

Priority Queue is build from minBinaryHeap which menas lower number is the highest priority.
It is the same set up as the previous MaxBinary heap only changing acouple of things but adding the priority parameter

 Big O of Binary Heaps
Insertion -   O(log N)
Removal -   O(log N)
Search -   O(N)
*/

class PriorityQueue {
  constructor() {
    this.value = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.value.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.value.length - 1;
    const element = this.value[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.value[parentIdx];
      if (element.priority >= parent.priority) break;
      this.value[parentIdx] = element;
      this.value[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    let min = this.value[0];
    let end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;
      this.bubbleDown();
    }
    return min;
  }
  bubbleDown() {
    let idx = 0;
    let length = this.value.length;
    let element = this.value[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.value[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.value[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.value[idx] = this.value[swap];
      this.value[swap] = element;
      idx = swap;
    }
  }
}
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
