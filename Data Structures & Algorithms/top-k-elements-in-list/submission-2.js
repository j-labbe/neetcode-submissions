class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @param {string} method - "linear" or "sort"
     * @return {number[]}
     */
    topKFrequent(nums, k, method = 'sort') {

        switch (method) {
            case "sort":
                const freq = {};

                for (const num of nums) {
                    freq[num] = (freq[num] || 0) + 1;
                }

                // build array - { k, v }
                const arr = Object.keys(freq).map(key => ({ k: Number(key), v: freq[key] }));
                // sort order
                // O(nlogn)
                arr.sort((a, b) => b.v - a.v);
                // get elems
                const elems = arr.slice(0, k);
                // return expected value
                return elems.map(e => e.k);
        

            case "linear":
                // [0, [elems ct 1], [elems ct 2]]
                let frequency = {};
                for (const num of nums) {
                    frequency[num] = (frequency[num] || 0) + 1;
                }

                let helper = Array.from(Array(nums.length + 1), () => []);

                // {num: frequency}
                for (const num of Object.keys(frequency)) {
                    helper[frequency[num]].push(Number(num));
                }

                let output = [];
                for (let i = helper.length - 1; i >= 0; i--) {
                    for (let j = 0; j < helper[i].length; j++) {
                        if (output.length === k) return output;
                        output.push(helper[i][j]);
                    }
                }

                return output;
        }

    }
}