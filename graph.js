class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((element) =>
      this.removeEdge(vertex, element)
    );

    delete this.adjacencyList[vertex];
  }

  dftRecursive(start) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    (function dft(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dft(neighbor);
        }
      });
    })(start);

    return result;
  }

  dftIterative(start) {
    let stack = [start];
    let result = [];
    let visited = {};
    let current;

    visited[start] = true;

    while (stack.length) {
      current = stack.pop();
      result.push(current);
      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  bft(start) {
    let queue = [start];
    let result = [];
    let visited = {};
    let current;

    visited[start] = true;

    while (queue.length) {
      current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

let g = new Graph();
