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
            console.log('key: ', key);
            if (map.has(key)) {
                const currentValue = map.get(key);
                const newValue = [...currentValue, str];
                map.set(key, newValue);
            } else {
                map.set(key, [str]);
            }
        });

        let arr = [];
        for (const [key, value] of map) {
            arr.push([...value]);
        }

        return arr;



    }
}
