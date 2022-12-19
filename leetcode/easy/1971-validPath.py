def build_graph(edges):
  graph = {}
  for edge in edges:
    a, b = edge
    if a not in graph:
      graph[a] = []
    if b not in graph:
      graph[b] = []
    
    graph[a].append(b)
    graph[b].append(a)

  return graph

def validPath(n, edges, source, destination):
  graph = build_graph(edges)
  visited = set()

  def explore(graph, source, destination, visited):
    if source == destination: 
      return True
    if source in visited:
      return False
    visited.add(source)

    for neighbor in graph[source]:
      if explore(graph, neighbor, destination, visited) == True:
        return True
    
    return False

  return explore(graph, source, destination, visited)