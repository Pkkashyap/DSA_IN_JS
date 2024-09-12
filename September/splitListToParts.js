/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let arr = [];
  let temNode = head;
  while (temNode != null) {
    arr.push(temNode.val);
  }

  let n = arr.length;
  let rem = n % k;
  let qu = Math.floor(n / k);
  let ans = [];
  n += n <= k ? k - n : 0;
  for (let i = 0; i < n; ) {
    let inner = 0;
    let temArr = [];
    while (inner < qu) {
      temArr.push(arr[i]);
      inner++;
      i++;
    }
    if (rem != 0) {
      temArr.push(arr[i]);
      rem--;
    }
    ans.push(temArr);
    i++;
  }

  return ans;
};

console.log(splitListToParts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13));
