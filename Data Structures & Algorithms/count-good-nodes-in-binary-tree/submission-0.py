# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:

        def dfs(node, prevMax) -> int:
            count = 0
            if not node:
                return count
            if node.val >= prevMax:
                count += 1

            newMax = max(prevMax, node.val)

            left_good_nodes = dfs(node.left, newMax)
            right_good_nodes = dfs(node.right, newMax)

            return count + left_good_nodes + right_good_nodes

        return dfs(root, root.val)
        



            

