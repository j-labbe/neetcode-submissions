class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1

        while l < r:
            while l < r and not self.isAlpha(s[l].lower()):
                l += 1
            while r > l and not self.isAlpha(s[r].lower()):
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1

        return True

    def isAlpha(self, s):
        return s in set('abcdefghijklmnopqrstuvwxyz0123456789')