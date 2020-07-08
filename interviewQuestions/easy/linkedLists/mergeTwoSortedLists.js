/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    let l3 = new ListNode(null);
    let head = l3;
    while (l1 || l2) {
        if (!l1 || (l2 && l2.val <= l1.val)) {
            l3.val = l2.val;
            l2 = l2.next;
        }
        else if (!l2 || (l1 && l1.val <= l2.val)) {
            l3.val = l1.val;
            l1 = l1.next;
        }
        if (l1 !== null || l2 !== null) {
            l3.next = new ListNode();
            l3 = l3.next;
        }
    }
    return head;
};