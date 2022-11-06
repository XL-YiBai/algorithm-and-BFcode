/**
 * 题目要求一层顺着输出，一层倒着输出。
 * 思路：按照层序遍历，用level记录当前层数。每次通过for循环把当前层所有节点取出。
 * 再根据level层数判断是正序输出还是倒序输出。
 */

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root]; // 使用队列层序遍历
  const ans = []; // 保存答案
  let level = 1; // 记录层数

  while (queue.length) {
    let isToLeft = level % 2 == 1; // 判断正序还是倒序输出
    const length = queue.length; // 当前层有多少节点
    const levelList = []; // 保存当前层的输出结果

    // 使用for循环取出本层的所有节点
    for (let i = 0; i < length; i++) {
      const curNode = queue.shift();
      // 根据isToLeft，判断是正序还是倒序，使用push还是unshift
      isToLeft ? levelList.push(curNode.val) : levelList.unshift(curNode.val);

      // 层序遍历的节点依然按照层序遍历的顺序放入队列
      if (curNode.left) {
        queue.push(curNode.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }

    // 保存当前层的输出结果
    ans.push(levelList);
    level++; // 层数+1
  }
  return ans;
};
