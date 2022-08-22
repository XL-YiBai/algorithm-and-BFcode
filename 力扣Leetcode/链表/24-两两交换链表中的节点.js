/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) {
    return head;
  }
  let pHead = new ListNode(0, head);
  let p = pHead;
  while (p.next && p.next.next) {
    let p1 = p.next;
    let p2 = p.next.next;
    // 假设是 1->2->3->4  p是1 p1为2，p2为3，交换2和3
    p1.next = p2.next; // 1->2->4  3->4
    p2.next = p1; // 3->2->4  1->2
    p.next = p2; // 1->3->2->4
    p = p1;
  }
  return pHead.next;
};
