class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if(this.length === 0) return undefined;
    let oldTail = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }

  shift() {
    if(this.length === 0) return undefined;
    let oldHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if(idx < 0 || idx >= this.length) return null;
    let node;
    let counter;
    if(idx <= this.length / 2) {
      counter = 0;
      node = this.head;
      while(counter !== idx) {
        node = node.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      node = this.tail;
      while(counter !== idx) {
        node = node.prev;
        counter--;
      }
    }

    return node;
  }
}

let doublyLinkedList = new DoublyLinkedList();
