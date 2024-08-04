const addEdge = (list, a, b) => {
  if (!list[a] || !list[b]) {
    for (let i = list.length; i < Math.max(a, b); i++) {
      list.push(null);
    }
  }
  list[a] == null ? (list[a] = [b]) : list[a].push(b);
  list[b] == null ? (list[b] = [a]) : list[b].push(a);
};

const bfs = (list, startVertex) => {
  const q = [];
  const visited = {};
  visited[startVertex] = true;
  q.push(startVertex);
  while (q.length != 0) {
    let popoedVertex = q.shift();
    console.log(popoedVertex);
    for (let i of list[popoedVertex]) {
      if (!visited[i]) {
        q.push(i);
        visited[i] = true;
      }
    }
  }
};

const graph = () => {
  let list = [];
  addEdge(list, 0, 1);
  addEdge(list, 0, 2);
  addEdge(list, 1, 2);
  addEdge(list, 2, 3);
  console.log(list);
  console.log(bfs(list, 0));
};
graph();
