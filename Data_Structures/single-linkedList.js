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
      if(this.head == null) return undefined;
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
  }
  
  let list = new SinglyLinkedList();
  list.push('head')
  list.push('body')
  list.push('tail')