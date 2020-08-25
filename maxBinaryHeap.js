class MaxBinaryHeap {
  constructor() {
    this.vals = [];
  }

  insert(val) {
    this.vals.push(val);

    let index = this.vals.length - 1;
    let element = this.vals[index];
    while(index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.vals[parentIndex];
      if(element <= parent) break;

      this.vals[parentIndex] = element;
      this.vals[index] = parent;
      index = parentIndex;
    }
  }
}

let heap = new MaxBinaryHeap();
