/**
 * 思路1: 使用队列层序遍历，每一次把一层的都入队。
 * 然后依次遍历该层节点，并同时把下一层入队，
 * 当遍历到该层最后一个节点时，这就是最右边的节点，把节点的值 push 到 ans 中即可
 */

var rightSideView = function (root) {
  if (!root) {
    return []
  }
  const q = [root]
  const ans = []
  while (q.length) {
    // 第一次循环时只有头节点，即第一层节点，第二次循环时队列中都是第二层节点
    let len = q.length // 当前层有多少个节点
    while (len--) {
      // 把同一层节点依次出队，并把下一层节点入队，这里可以保证每次出队的节点都是同一层
      const n = q.shift()

      // 如果 len 为 0 了，说明此时遍历的就是当前层的最后一个节点
      if (len === 0) ans.push(n.val)
      // 入队下一层
      if (n.left) q.push(n.left)
      if (n.right) q.push(n.right)
    }
  }
  return ans
}
