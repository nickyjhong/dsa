// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. 
// Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
// You want to determine if there is a valid path that exists from vertex source to vertex destination.
// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true

// e = edges
// Time: O(e) 
// Space: O(e)

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [ a, b ] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const validPath = (n, edges, source, destination) => {
  const graph = buildGraph(edges)
  let visited = new Set()

  const explore = (graph, source, destination, visited) => {
    if (source === destination) return true
    if (visited.has(source)) return false
    visited.add(source)

    for (let neighbor of graph[source]) {
      if (explore(graph, neighbor, destination, visited) === true) {
        return true
      }
    }
    return false
  }

  return explore(graph, source, destination, visited)
};
