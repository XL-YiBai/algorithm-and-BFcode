/**
    双指针法，要删除倒数第n个，则定义快慢指针p1、p2，
    思路：因为最终要删除节点距离末尾的间距是能计算出来的，所以让p1和p2保持间距，p2到末尾时，p1就是要删除的节点前一个
    p2先走n步，保证p1和p2的间隔达到n，之后p1和p2一起移动。
    这样当p2为最后一个节点时，p1为要删除节点的前一个节点，直接操作p1删除对应节点即可。
 */
var removeNthFromEnd = function (head, n) {
  let pHead = new ListNode(0, head); // 定义一个虚拟头节点
  let p1 = pHead;
  let p2 = pHead;
  let count = 0; // 记录p2先走了多少步
  while (p2.next) {
    if (count < n) {
      // p2先走n步，拉开p1和p2的间距
      p2 = p2.next;
      count++;
    } else {
      // 达到间距之后，p1和p2一起走
      p1 = p1.next;
      p2 = p2.next;
    }
  }
  // 此时p1就是要删除节点的前一个节点，直接删除它下一个即可
  p1.next = p1.next.next;
  return pHead.next;
};
