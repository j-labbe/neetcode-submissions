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
        
        let indicies = [];

        for (let i = 0; i < numbers.length; i++) {
            
            // if (numbers[i] === target) continue;

            const num = numbers[i];
            let right = i;

            while (right < numbers.length) {
                if (num + numbers[right] === target) {
                    return [i + 1, right + 1];
                }
                right++;
            }
        }
    }
}
