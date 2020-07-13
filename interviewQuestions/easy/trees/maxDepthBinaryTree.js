/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root => {
    if (!root) {
        return 0;
    }
    let depth = 0,
        length = 0,
        node = 0;
    const queue = [root];
    while (queue.length !== 0) {
        length = queue.length;
        for (let i = 0; i < length; i++) {
            node = queue.shift();
            if (node.right) {
                queue.push(node.right);
            }
            if (node.left) {
                queue.push(node.left);
            }
        }
        depth++;
    }
    return depth;
};