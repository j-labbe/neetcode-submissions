class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        # num : pos
        seen = {}

        for i, n in enumerate(nums):
            diff = target - n
            if diff in seen.keys():
                return [seen.get(diff), i]
            seen[n] = i