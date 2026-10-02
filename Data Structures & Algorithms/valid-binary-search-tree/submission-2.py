# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        
        def dfs(node, lower, upper):
            if not node:
                return True

            if lower < node.val < upper:
                # valid; check subtrees
                l_validity = dfs(node.left, lower=lower, upper=node.val)
                r_validity = dfs(node.right, lower=node.val, upper=upper)

            return lower < node.val < upper and (l_validity and r_validity)
            

        return dfs(root, float('-inf'), float('inf'))
            
        


        

