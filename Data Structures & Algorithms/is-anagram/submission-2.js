class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const seen = new Map();
        s
            .split('')
            .map(c => seen.set(
                c,
                !seen.get(c) ? 1 : seen.get(c) + 1
            ));

        const test = new Map();
        t
            .split('')
            .map(c => test.set(
                c,
                !test.get(c) ? 1 : test.get(c) + 1
            ));

        for (const [key, value] of test) {
            if (!seen.get(key) || seen.get(key) !== value) return false;
        }
        for (const [key, value] of seen) {
            if (!test.get(key) || test.get(key) !== value) return false;
        }
        return true;
    }
}
