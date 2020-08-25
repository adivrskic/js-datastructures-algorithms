class MaxBinaryHeap {
  constructor() {
    this.vals = [];
  }

  insert(val) {
    this.vals.push(val);

    let index = this.vals.length - 1;
    let element = this.vals[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.vals[parentIndex];
      if (element <= parent) break;

      this.vals[parentIndex] = element;
      this.vals[index] = parent;
      index = parentIndex;
    }
  }

  remove() {
    const max = this.vals[0];
    const end = this.vals.pop();
    if (this.vals.length > 0) {
      this.vals[0] = end;

      let index = 0;
      let length = this.vals.length;
      let element = this.vals[0];

      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIndex < length) {
          leftChild = this.vals[leftChildIndex];
          if (leftChild > element) {
            swap = leftChildIndex;
          }
        }

        if (rightChildIndex < length) {
          rightChild = this.vals[rightChildIndex];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIndex;
          }
        }

        if (swap === null) break;
        this.vals[index] = this.vals[swap];
        this.vals[swap] = element;
        index = swap;
      }
    }

    return max;
  }
}

let heap = new MaxBinaryHeap();
