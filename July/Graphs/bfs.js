const addEdge = (list, a, b) => {
  if (!list[a]) {
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

const bfs = (list, s) => {
  let visited = {};
  let queue = [];
  visited[s] = true;
  queue.push(s);
  while (queue.length != 0) {
    let poped = queue.shift();
    console.log(poped);
    for (let i of list[poped]) {
      if (!visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
};

const check = () => {
  let list = [];
  addEdge(list, 0, 1);
  addEdge(list, 0, 2);
  addEdge(list, 1, 2);
  addEdge(list, 1, 3);
  addEdge(list, 2, 3);
  addEdge(list, 2, 4);
  addEdge(list, 3, 4);
  console.log(list);

  bfs(list, 0);
};

check();
