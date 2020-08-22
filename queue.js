class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if(this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if(this.size === 0) return null;
    let firstNode = this.first;
    if(this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = firstNode.next;
    }
    this.size--;
    return firstNode.val;
  }
}

let queue = new Queue();
