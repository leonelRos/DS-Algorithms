class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  //   Write a method called addVertex, which accepts a name of a vertex
  //   It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) return (this.adjacencyList[vertex] = []);
  }
  //   This function should accept two vertices, we can call them vertex1 and vertex2
  // The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
  // The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  // Don't worry about handling errors/invalid vertices
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
