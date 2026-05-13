class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for (let i = 0; i < nums.length; i++) { // [0,1,2,3]
            if (!seen.get(nums[i])) seen.set(nums[i], [i]);
            let need = target - nums[i];
            if (seen.has(need) && !seen.get(need).includes(i)) {
                return [i, ...seen.get(need).filter(j => i !== j)];
            }
        }
    }
}
