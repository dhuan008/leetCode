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
 * @return {number[][]}
 */
const levelOrder = root => {
    if (!root) return [];

    let temp = [],
        res = [],
        data = null,
        node = null,
        level = null;
    temp.push([root, 0]);

    while (temp.length) {
        data = temp.shift();
        node = data[0];
        level = data[1];

        if (!res[level]) {
            res[level] = [node.val];
        }
        else {
            res[level].push(node.val);
        }
        if (node.left) {
            temp.push([node.left, level + 1]);
        }
        if (node.right) {
            temp.push([node.right, level + 1]);
        }
    }
    return res;
};