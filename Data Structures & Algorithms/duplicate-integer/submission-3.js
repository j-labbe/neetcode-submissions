class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const n = new Set();
        for (const num of nums) {
            if (n.has(num)) {
                return true;
            } else {
                n.add(num)
            }
        }
        return false;
    }
}
