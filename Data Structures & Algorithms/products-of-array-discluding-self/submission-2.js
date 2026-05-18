class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const left = new Array(n);
        const right = new Array(n);
        const output = new Array(n);

        // left product of nums
        left[0] = 1;
        for (let i = 1; i < n; i++) {
            left[i] = left[i - 1] * nums[i - 1];
        }

        // right product of nums
        right[n - 1] = 1;
        for (let i = n - 2; i >= 0; i--) {
            right[i] = right[i + 1] * nums[i + 1];
        }

        // output[i] = left[i] * right[i]
        for (let i = 0; i < n; i++) {
            output[i] = left[i] * right[i];
        }

        return output;
    }
}
