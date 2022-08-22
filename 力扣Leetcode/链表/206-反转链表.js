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
var reverseList = function (head) {
  let p1 = null;
  let p2 = head;
  while (p2) {
    let temp = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = temp;
  }
  return p1;
};
