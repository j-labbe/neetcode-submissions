class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const sFreq = new Map();
        const tFreq = new Map();

        // 1. populate both objs with char freq
        // 2. compare freqs
        for (const char of s.split('')) {
            if (sFreq.has(char)) {
                sFreq.set(char, sFreq.get(char) + 1);
            } else {
                sFreq.set(char, 1);
            }
        }

        for (const char of t.split('')) {
            if (!sFreq.has(char)) return false;
            if (!tFreq.has(char)) {
                tFreq.set(char, 1);
            } else {
                tFreq.set(char, tFreq.get(char) + 1);
            }
        }

        for (const char of sFreq.keys()) {
            if (tFreq.get(char) !== sFreq.get(char)) return false;
        }

        return true;
    }
}
