class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count < idx) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(val, idx) {
    let node = this.get(idx);
    if (node === null) return false;
    if (node) {
      console.log(node);
      node.val = val;
      return true;
    }
  }

  insert(val, idx) {
    if(idx < 0 || idx > this.length) return false;
    if(idx === this.length) return !!this.push(val);
    if(idx === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    let temp = prev.next
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(idx) {
    if(idx < 0 || idx >= this.length) return null;
    if(idx === 0) return this.shift();
    if(idx === this.length - 1) return this.pop();

    let prev = this.get(idx - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
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
  
  rotate(num) {
    let rotation;
    if(num < 0) {
      rotation = this.length - (this.length % num) - 1;
    } else {
      rotation = num % this.length;
    }

    if(rotation === 0) return this;

    let newHead = this.get(rotation);
    let newTail = this.get(rotation - 1);
    let connect = this.get(0);

    this.tail.next = connect;
    this.head = newHead;
    this.tail = newTail;
    newTail.next = null;

    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let linkedList = new SinglyLinkedList();
