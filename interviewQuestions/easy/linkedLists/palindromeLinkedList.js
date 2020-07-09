/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = head => {
    if (!head || !head.next) {
        return true;
    }
    
    let length = 1,
        tail = head;
    
    while (tail.next) {
        tail.next.prev = tail;
        tail = tail.next;
        length++;
    }
    
    let half = Math.floor(length / 2);
    
    for (let i = 0; i < half; i++) {
        if (head.val !== tail.val) {
            return false;
        }
        head = head.next;
        tail = tail.prev;
    }
    
    return true;
};