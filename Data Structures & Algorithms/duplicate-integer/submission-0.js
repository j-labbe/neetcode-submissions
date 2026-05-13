class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) return true;
            seen.set(nums[i], true);
        }
        return false;
    }
}
