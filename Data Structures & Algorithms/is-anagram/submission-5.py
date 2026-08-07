class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        m = {}
        n = {}

        for char in s:
            m[char] = m.get(char, 0) + 1

        for char in t:
            # if finding a char not in m then they are not anagrams
            if char not in m.keys():
                return False
            n[char] = n.get(char, 0) + 1

        # compare dicts - keys should match just need to check counts
        for char in m.keys():

            if n.get(char) != m.get(char):
                return False

        return True