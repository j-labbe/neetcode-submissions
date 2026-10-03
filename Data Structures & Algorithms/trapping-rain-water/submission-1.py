class Solution:
    def trap(self, height: List[int]) -> int:
        total = 0
        l, r = 0, len(height) - 1
        l_max, r_max = 0, 0
        while l < r:
            if height[l] < height[r]:
                l_max = max(height[l], l_max)
                total += l_max - height[l]
                l += 1
            else:
                r_max = max(height[r], r_max)
                total += r_max - height[r]
                r -= 1

        return total