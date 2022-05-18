/**
 * 思路：
 * 将节点依次入队，首先第一层入队，然后遍历第一层节点，遍历过程中，第二层入队
 * 总之，遍历之前拿到当前队列长度，即当前层的节点个数，每次循环只取出当前遍历层的节点。
 */

var levelOrder = function(root) {
  //二叉树的层序遍历，res保存结果，queue模拟队列
  let res=[],queue=[];
  queue.push(root);
  if(root===null){ // 传入空树，直接返回空数组
      return res;
  }
  // 队列不为空时，遍历
  while(queue.length!==0){
      // 记录当前层级节点数
      let length=queue.length;
      //存放每一层的节点的值
      let curLevel=[];
      // 当前层有多少节点，就遍历从队列取出多少个节点，并且如果有左右子节点，都分别入队
      for(let i=0;i<length;i++){
          let node=queue.shift();
          curLevel.push(node.val);
          // 存放当前层下一层的节点
          node.left&&queue.push(node.left);
          node.right&&queue.push(node.right);
      }
      //把每一层的结果放到结果数组
      res.push(curLevel);
  }
  return res;
};