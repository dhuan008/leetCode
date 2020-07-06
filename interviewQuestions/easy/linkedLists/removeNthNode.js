/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    let temp = head,
        current = head;
    for (let i = 0; i < n; i++) {
        temp = temp.next;
    }
    while (temp && temp.next) {
        temp = temp.next;
        current = current.next;
    }
    if (!temp) {
        head = head.next;
    }
    else {
        current.next = current.next.next;
    }
    return head;
};