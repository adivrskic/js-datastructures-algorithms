class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if(!this.root) {
      this.root = newNode;
      return this;
    }
    
    let current = this.root;
    while(true) {
      if(newNode.val === current.val) return undefined;

      if(newNode.val < current.val) {
        if(current.left === null) {
          current.left = newNode;
          return this;
        } 

        current = current.left;
      } else if(newNode.val > current.val) {
        if(current.right === null) {
          current.right = newNode;
          return this;
        } 

        current = current.right;
      }
    }
  }
}

let bst = new BinarySearchTree();
