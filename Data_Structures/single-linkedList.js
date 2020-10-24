 /*  
        [1]  --> [7]  --> [9] -->  [6] --> [8]
        head                               tail

    Single LinkedList are linear node where each node conatins data
    Linkedlist are defined because of the arrows, there is always arrows referencing to the next node. in order to traverse a linkedlist you always start from the head and go on to the second one and so on.
     */


//create node=data
class Node {
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
  
  //create empty linkedList
  class SinglyLinkedList {
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  
    }
    //adding methods
    push(val){
      var newNode = new Node(val);
      //check if the list is empty
      if(!this.head){
        //we assign the node to be the head and tail and increase the length
        this.head = newNode;
        this.tail = this.head
      } else {
        //we assign the new node to be the tail and the head is the the curreent node increment length.
        this.tail.next = newNode;
        this.tail = newNode
      }
      this.length++
      return this;
    }
    //pop method deletes from the last node!
    pop(){
      //if the list is empty
      if(!this.head) return undefined;
      //we start from the head
      var current = this.head;
      var newTail = current;
      // while the next node is not null
      while(current.next !== null){
        // new tail is assigned to the second to last 
        // and current is assign to the next
        newTail = current;
        current = current.next
      }
      //assign the tail to the new tail and the next is equal to null
      this.tail = newTail;
      this.tail.next = null;
      //decrease the length everytime delete a node
      this.length--;
      // to chekc once every node is deleted, head and tail equal empty list
      if(this.length === 0){
        this.head =null
        this.tail =null
      }
      return current; //returns the deleted node
    }
    //shift deletes the first element in the lis =  head
  shift(){
    //if there are no nodes return undefined
    if(!this.head) return undefined;
    //store current head in a variable
    var removedHead = this.head;
    //set the current head to be the next current head
    this.head = removedHead.next
    //decrease length
    this.length--;
    // check if length is 0 set tail to null
    if(this.length === 0){
      this.tail =null
    }
    return removedHead; //return the removed head
  }
  //this method add a new node to the start of the list and we pass a value becaue we are adding data
  unshift(val){
    //create a new node passing a value
      var newHead = new Node(val);
      //if the head doesnt not exist assign the new new node to be the head and tail
      if(!this.head){
        this.head = newHead;
        this.tail = this.head;
      } else {
        //set the new node's next data to be the current head in the list
        newHead.next = this.head;
        //set the head data to be the new node created
        this.head = newHead;
      }
      //incrment the length
      this.length++;
      return this; //return the new node
    }
    //get specific node assigning indexes
  get(idx){
    //edge csae  
      if(idx < 0 || idx >= this.length) return null;
      // set a counter and start from the head
      var counter = 0;
      var current = this.head
      //loop while the counter is not equal to the index, once equal return the node
      while(counter !== idx){
        current = current.next;
        counter++;
      }
      return current;
    }
      //set method takes an index and change the value of that inex with the gelp of the get() method
  set(idx, val){
    //assign the get method to a variable. get method returns the value
    var foundNode = this.get(idx);
    // if the node is found assigned to new val
    if(foundNode){
      foundNode.val = val;
      return true
    }
    return false;
  }
  }
  
  let list = new SinglyLinkedList();
  list.push('head')
  list.push('body')
  list.push('tail')