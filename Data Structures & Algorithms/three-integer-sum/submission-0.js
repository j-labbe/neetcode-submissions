class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        // a + b + c = 0
        // break into a + (two sum: b + c)

        nums.sort((a, b) => a - b);
        let triplets = [];

        for (let i = 0; i < nums.length; i++) {
            const a = nums[i];

            if (i > 0 && a === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const threeSum = a + nums[left] + nums[right];

                if (threeSum > 0) {
                    right--;
                } else if (threeSum < 0) {
                    left++;
                } else {
                    triplets.push([a, nums[left], nums[right]]);
                    left++;
                    while (nums[left] === nums[left - 1] && left < right) {
                        left++;
                    }
                }
            }

        }

        return triplets;
    }
}
