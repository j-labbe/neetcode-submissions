class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // nums - sorted non-decreasing order
        // return two 1-indexed nums
        // add up to target and idx1 < idx2 and idx1 !== idx2
        // alwaus one valid solution
        // O(1) additional space
        // len of nums >= 2

        // normal two sum would take diff (target - num)
        
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const lnum = numbers[left];
            const rnum = numbers[right];
            const sum = lnum + rnum;

            if (sum === target) {
                return [left + 1, right + 1];
            }

            if (sum > target) right--;
            else left++;

        }

        
    }
}
