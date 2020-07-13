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
 * @return {boolean}
 */
const isMirror = (t1, t2) => {
    if (t1 === null && t2 === null) {
        return true;
    }
    if (t1 === null || t2 === null) {
        return false;
    }
    return t1.val === t2.val
        && isMirror(t1.left, t2.right)
        && isMirror(t1.right, t2.left);
};

const isSymmetric = root => {
    return isMirror(root, root);
};


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
 * @return {boolean}
 */
const isSymmetric = root => {
    if (!root) {
        return true;
    }
    let q1 = [root.left],
        q2 = [root.right];
    while (q1.length > 0 && q2.length > 0) {
        let node1 = q1.shift();
        let node2 = q2.shift();
        if (!node1 && !node2) continue;
        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }
        q1.push(node1.left);
        q2.push(node2.right);
        q1.push(node1.right);
        q2.push(node2.left);
    }
    return true;
};