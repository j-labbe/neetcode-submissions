# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        left = True
        right = True

        if not p and not q:
            return True
        elif p and not q:
            return False
        elif not p and q:
            return False

        if p.left and q.left:
            left = self.isSameTree(p.left, q.left)
        elif (not p.left and q.left) or (p.left and not q.left):
            left = False

        if p.right and q.right:
            right = self.isSameTree(p.right, q.right)
        elif (not p.right and q.right) or (p.right and not q.right):
            right = False

        return p.val == q.val and left and right
