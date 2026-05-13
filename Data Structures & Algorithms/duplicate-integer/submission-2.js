class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const m = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (m.has(nums[i])) {
                return true;
            }
            m.add(nums[i]);
        }
        return false;
    }
}
