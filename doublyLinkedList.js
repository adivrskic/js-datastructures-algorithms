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
    let node, counter;
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

  set(idx, val) {
    let node = this.get(idx);
    if(!node) return false
    node.val = val;
    return true;
  }

  insert(idx, val) {
    if(idx < 0 || idx > this.length) return false;
    if(idx === 0) return !!this.unshift(val);
    if(idx === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(idx - 1);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    
    this.length++;
    return true;
  }

  remove(idx) {
    if(idx < 0 || idx >= this.length) return undefined;
    if(idx === 0) return this.shift();
    if(idx === this.length - 1) return this.pop();

    let removedNode = this.get(idx);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  reverse() {
    if(this.length === 0) return false;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let doublyLinkedList = new DoublyLinkedList();
