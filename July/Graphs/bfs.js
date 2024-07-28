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

const bfs_disconnected = (list, visited, s) => {
  const queue = [];
  visited[s] = true;
  queue.push(s);
  let ans = [];
  while (queue.length != 0) {
    const poped = queue.shift();
    ans.push(poped);
    for (let i of list[poped]) {
      if (!visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }

  console.log(ans.join("->"));
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

const check_disconnected = () => {
  let list = [];
  addEdge(list, 0, 1);
  addEdge(list, 0, 2);
  addEdge(list, 1, 3);
  addEdge(list, 2, 3);

  addEdge(list, 4, 5);
  addEdge(list, 4, 7);
  addEdge(list, 5, 6);
  addEdge(list, 6, 7);
  addEdge(list, 8, 9);
  console.log(list);
  let visited = new Array(10).fill(false);
  let count = 0;
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      bfs_disconnected(list, visited, i);
      count++;
    }
  }
  console.log("no of island", count);
};

check_disconnected();
