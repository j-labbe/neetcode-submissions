class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        const seen = new Set(nums);
        let result = 0;
        
        for (const num of seen) {
            if (!seen.has(num - 1)) {
                let count = 1;
                let currentNum = num;
                while (seen.has(currentNum + 1)) {
                    currentNum++;
                    count++;
                }

                result = Math.max(count, result);
            }
        }
        return result;
    }
}
