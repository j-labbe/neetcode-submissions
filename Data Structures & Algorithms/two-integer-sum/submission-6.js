class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const diff = target - num;
            if (seen.has(diff)) {
                return [seen.get(diff), i];
            }
            seen.set(num, i);
        }
    }
}
