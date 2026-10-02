class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l = 0
        r = len(numbers) - 1

        while l < r:
            seek = target - numbers[r]
            if seek < numbers[l]:
                r -= 1
            elif seek > numbers[l]:
                l += 1
            else:
                return [l + 1, r + 1]

