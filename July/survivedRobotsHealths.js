/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  if (positions.length <= 1) {
    return healths;
  }
  let collected_postion = [];

  for (let i = 0; i < positions.length; i++) {
    let tem = {};
    tem["position"] = positions[i];
    tem["health"] = healths[i];
    tem["directions"] = directions.charAt(i);
    tem["index"] = i;
    collected_postion.push(tem);
  }

  collected_postion.sort((a, b) => {
    return a.position - b.position;
  });

  stack = [];
  for (let i = 0; i < positions.length; i++) {
    let item = collected_postion[i];
    if (item.directions == "R") {
      stack.push(item);
    } else {
      if (stack.length == 0 || stack[stack.length - 1].directions == "L") {
        stack.push(item);
        continue;
      }

      let poped = stack.pop();
      while (
        stack.length != 0 &&
        poped.health < item.health &&
        poped.directions != "L"
      ) {
        item.health = item.health - 1;
        poped = stack.pop();
      }

      if (poped.directions == "L") {
        stack.push(poped);
        stack.push(item);
      } else if (poped.health == item.health) {
        continue;
      } else if (poped.health > item.health) {
        poped.health = poped.health - 1;
        stack.push(poped);
      } else {
        item.health = item.health - 1;
        stack.push(item);
      }
    }
  }

  sorted = stack.sort((a, b) => {
    return a.index - b.index;
  });

  let ans = [];
  stack.map((s) => {
    ans.push(s.health);
  });

  return ans;
};

console.log(
  survivedRobotsHealths(
    [50, 28, 19, 16, 47, 41, 4, 23, 3],
    [30, 45, 19, 44, 45, 38, 5, 33, 46],
    "LLLLLRLRL"
  )
);
