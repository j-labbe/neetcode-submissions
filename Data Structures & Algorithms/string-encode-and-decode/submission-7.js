class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return JSON.stringify(strs).toString();
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const parts = JSON.parse(str);
        return parts;
    }
}
