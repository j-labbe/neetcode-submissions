class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        // TLE while iterating over nums - can use set instead
        const numsArr = Array.from(numsSet);
        let longestSequence = 0;

        for (let i = 0; i < numsArr.length; i++) {

            if (!numsSet.has(numsArr[i] - 1)) {
                let length = 0;

                while (numsSet.has(numsArr[i] + length)) {
                    length += 1
                }
                longestSequence = Math.max(longestSequence, length);
            }
        }

        return longestSequence;
    }
}
