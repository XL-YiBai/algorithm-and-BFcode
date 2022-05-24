/**
 * 思路：如果root不存在，那么是对称的
 * 定义一个递归函数isMirror，传入左右两个节点，
 * 1. 如果没有左右子树说明是对称的
 * 2. 如果左右子树都存在，并且左右子树根节点值相同，且递归判断左子树的左边和右子树右边对称，，以及递归半段左子树右边和右子树左边对称，，那么整体是对称的
 * 3. 否则是不对称的，返回false
 */

var isSymmetric = function(root) {
  if (!root) return true
  const isMirror = (l, r) => {
      if (!l && !r) return true
      if (l && r && l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left)){
          return true
      }
      return false;
  }
  return isMirror(root.left, root.right)
};