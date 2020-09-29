/*
hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. 
A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. 
During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.
Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, 
which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions are typically accommodated in some way.
In a well-dimensioned hash table, the average cost (number of instructions) for each lookup is independent of the number of elements stored in the table. 
Many hash table designs also allow arbitrary insertions and deletions of key-value pairs, at (amortized[2]) constant average cost per operation.[3][4]
In many situations, hash tables turn out to be on average more efficient than search trees or any other table lookup structure. For this reason, 
they are widely used in many kinds of computer software, particularly for associative arrays, database indexing, caches, and sets.
*/

class HashTable {
  //creating our DS HashTable
  constructor(size = 53) {
    //give our array hashtable a size of 53
    this.keyMap = new Array(size); //create our neww array
  }
  //hash function
  hash(key) {
    let total = 0;
    let PRIME_NUM = 31; //the reason why we are using prime numbers is because it limits the amount of collisions in our array and gives a better distribution of buckets or values.
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      //setting it up to 100 gives a better and faster load. You can set it up to any number.
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUM + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
}
let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");
