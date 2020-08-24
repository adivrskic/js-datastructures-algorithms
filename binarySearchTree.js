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

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (newNode.val === current.val) return undefined;

      if (newNode.val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else if (newNode.val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    if (this.root && val === this.root.val) return this.root;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return false;
    return current;
  }

  bfs() {
    let data = [];
    let q = [];
    let node = this.root;

    q.push(node.val);
    while(q.length) {
      node = q.shift();
      data.push(node.val);
      if(node.left) q.push(node.left);
      if(node.right) q.push(node.right);
    }

    return data;
  }

  dfsPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  dfsPostOrder() {
    let data =[];
    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  dfsInOrder() {
    let data =[];
    function traverse(node) {
      if(node.left) traverse(node.left);
      data.push(node.val);
      if(node.right) traverse(node.right); 
    }
    traverse(this.root);
    return data;
  }
}

let bst = new BinarySearchTree();
