class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map();
        strs.forEach(str => {
            const key = str
                .split('')
                .sort()
                .join('');
                
            if (map.has(key)) {
                const currentValue = map.get(key);
                const newValue = [...currentValue, str];
                map.set(key, newValue);
            } else {
                map.set(key, [str]);
            }
        });

        return Array.from(map.values());



    }
}
