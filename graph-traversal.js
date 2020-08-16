
breadthFirst(startingNode, neighborVisit) {
    const firstNode = this.searchNode(startingNode)
    const visitedNode = nodes.reduce((sum, node) => {
      sum[node.id] = false
      return sum
    },{})
    const queue = queueCreator(){
    queue.add(firstNode) 
    while (!queue.empty()) {
      const temp = queue.remove()
      if (!visitedNode[temp.id]) {
        neighborVisit(temp)
        visitedNode[temp.id] = true
      }
      temp.neighbors.forEach(node => {
        if(!visitedNode[node.id]) {
          queue.add(node)
        }
      }
      })
    }
  }
  
  const graph = graphCreator(true)
  graph.addNode('a')
  graph.addNode('b')
  graph.addNode('c')
  graph.addNode('d')
  graph.addNode('e')
  graph.addNode('f')
  graph.addEdge('a', 'c')
  graph.addEdge('a', 'e')
  graph.addEdge('b', 'a')
  graph.addEdge('b', 'c')
  graph.addEdge('c', 'd')
  graph.addEdge('c', 'e')
  graph.addEdge('d', 'e')
  graph.addEdge('e', 'f')
  