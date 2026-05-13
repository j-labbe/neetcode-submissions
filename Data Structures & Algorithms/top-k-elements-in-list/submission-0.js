class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /**
         * possible solutions include:
         * mutating array
         * count + hash map
         * 
         * prefer readonly inputs
         */

        const frequencyMap = new Map();

        nums.forEach(n => {
            frequencyMap.set(n, [n, (frequencyMap.get(n) || [0, 0])[1] + 1]);
        });

        const arr = Array.from(frequencyMap.values())
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(a => a[0]);

        return arr;

        /**
         * {
         *     1: 1,
         * ...
         *     1: 1,
         *     2: 1,
         * ...
         *     1: 1,
         *     2: 2
         * ...
         * }
         * 
         * 
         */



    }
}
