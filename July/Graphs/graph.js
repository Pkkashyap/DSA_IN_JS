//undirected graph for below
// 0----1    3
//  \   |   /
//   \  |  /
//    \ | /
//      2

const addEdge = (list, a, b) => {
  if (!list[a] || !list[b]) {
    for (let i = list.length - 1; i < Math.max(a, b); i++) {
      list.push(null);
    }
  }

  if (list[a] == null) {
    list[a] = [b];
  } else {
    list[a].push(b);
  }

  if (list[b] == null) {
    list[b] = [a];
  } else {
    list[b].push(a);
  }
};

const graph = () => {
  let list = [];
  addEdge(list, 0, 1);
  addEdge(list, 0, 2);
  addEdge(list, 1, 2);
  addEdge(list, 2, 3);
  console.log(list);
};

graph();
