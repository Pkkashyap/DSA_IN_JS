class treeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  inOrder(root) {
    if (!root) return;

    this.inOrder(root.left);
    console.log(root.val);
    this.inOrder(root.right);
  }

  preOrder(root) {
    if (!root) return;

    console.log(root.val);
    this.inOrder(root.left);
    this.inOrder(root.right);
  }

  height(root) {
    if (!root) return 0;

    let a = this.height(root.left) + 1;
    let b = this.height(root.right) + 1;
    return a >= b ? a : b;
  }

  printDistanceK(root, k) {
    if (!root) return;

    if (k == 0) {
      console.log(root.val);
      return;
    }

    this.printDistanceK(root.left, k - 1);
    this.printDistanceK(root.right, k - 1);
  }

  levelOrderTraversal(root) {
    if (!root) return;
    let q = [];
    let ans = [];
    q.push(root);
    while (q.length != 0) {
      let pop = q.shift();
      ans.push(pop.val);
      if (pop.left) {
        q.push(pop.left);
      }
      if (pop.right) {
        q.push(pop.right);
      }
    }
    return ans;
  }

  sizeOfTree(root) {
    if (!root) return 0;

    return this.sizeOfTree(root.left) + this.sizeOfTree(root.right) + 1;
  }

  maximumNode(root) {
    if (!root) return -1;

    let left = this.maximumNode(root.left);
    let right = this.maximumNode(root.right);

    return Math.max(root.val, Math.max(left, right));
  }

  leftViewPrint(root) {
    if (!root) return;

    if (root.left) {
      console.log(root.left.val);
      this.leftViewPrint(root.left);
    }
    this.leftViewPrint(root.right);
  }

  childSum(root) {
    if (!root) return true;
    let left = true;
    let right = true;

    if (root.left == null && root.right == null) return true;
    left = this.childSum(root.left);
    right = this.childSum(root.right);
    if (!(left & right)) return false;

    return root.val == (root?.right?.val || 0) + (root?.left?.val || 0);
  }

  balanacedTree(root) {
    if (!root) return 0;

    let left = this.balanacedTree(root.left);
    let right = this.balanacedTree(root.right);
    if (Math.abs(left - right) >= 2) return false;

    return Math.max(left, right) + 1;
  }

  leftViewPrint2(root) {
    if (!root) return;
    let q = [];
    q.push(root);
    while (q.length != 0) {
      let n = q.length;
      for (let i = 0; i < n; i++) {
        let poped = q.shift();
        if (i == 0) {
          console.log(poped.val);
        }
        if (poped.left) q.push(poped.left);
        if (poped.right) q.push(poped.right);
      }
    }
  }

  rightViewPrint(root) {
    if (!root) return;
    let q = [];
    q.push(root);
    while (q.length != 0) {
      let n = q.length;
      for (let i = 0; i < n; i++) {
        let poped = q.shift();
        if (i == 0) {
          console.log(poped.val);
        }
        if (poped.left) q.push(poped.left);
        if (poped.right) q.push(poped.right);
      }
    }
  }
}

let obj = new treeNode(10);
obj.left = new treeNode(20);
obj.right = new treeNode(30);
obj.right.right = new treeNode(60);
obj.left.left = new treeNode(45);
obj.left.right = new treeNode(50);
obj.left.right.left = new treeNode(80);
obj.left.right.right = new treeNode(10);
obj.left.right.right.left = new treeNode(10);

let bObj = new treeNode(10);
bObj.left = new treeNode(20);
bObj.right = new treeNode(30);
bObj.right.left = new treeNode(40);
bObj.right.right = new treeNode(50);
let tr = new Tree();
console.log(tr.leftViewPrint2(obj));
