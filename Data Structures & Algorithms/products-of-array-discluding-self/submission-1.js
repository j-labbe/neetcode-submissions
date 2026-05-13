class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // exclude nums[i] from product
        let result = Array.from(nums, n => 1);
        
        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            result[i] *= prefix;
            prefix *= nums[i];
        }

        let postfix = 1;
        for (let j = nums.length - 1; j >= 0; j--) {
            result[j] *= postfix;
            postfix *= nums[j];
        }

        return result;
    }
}
