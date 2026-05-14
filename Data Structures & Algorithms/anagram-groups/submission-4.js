class Solution {
    /**
     * implementing both ideas
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs, method = 2) {
        // idea 1: sort (slower)

        if (method === 1) {
            const map = new Map();

            for (const str of strs) {
                const key = str.split("").sort().join("");
                map.set(key, [...(map.get(key) || []), str]);
            }

            return Array.from(map.values());
        }

        // idea 2: map alphabet-char count key -> str
        // the neetcode solution in js

        if (method === 2) {
            const hm = new Map();
            const baseCharCode = "a".charCodeAt(0);

            for (const str of strs) {
                const key = new Array(26).fill(0);

                for (const char of str.split("")) {
                    key[char.charCodeAt(0) - baseCharCode]++;
                }

                // .join is needed to make this comparable
                // as arrays compare by reference not values
                // must use spaces as a delimiter. two digit nums case issues
                const keyStr = key.join(' ')
                hm.set(keyStr, [...hm.get(keyStr) || [], str])
            }

            return Array.from(hm.values());
        }
    }
}
