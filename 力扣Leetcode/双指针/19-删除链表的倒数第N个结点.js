/**
 * 思路：定义一个快慢指针，先让快指针移动n步，之后快慢指针一起移动，这样他们永远保持n的距离，
 * 当快指针到最后一个节点时，慢指针的后一个就是要删除的节点。
 * 
 * 如果快指针移动n步之后已经指向null，说明要删除头节点，直接返回head.next就行。
 */

var removeNthFromEnd = function(head, n) {
  let fast = head;
  let slow = head;
  // 快指针先跑n步
  for (let i=0; i<n; i++) {
      fast = fast.next;
  }
  // 如果fast已经指向null，说明要删除头节点
  if (!fast) {
      return head.next;
  }
  // 之后快指针和慢指针同时增加，他们之间距离永远是n，当快指针到最后的时候，慢指针就是要删除的前一个节点
  while (fast.next) {
      fast = fast.next;
      slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};