class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return btoa(JSON.stringify(strs)).toString();
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str);
        const parts = JSON.parse(atob(str));
        console.log(parts);
        return parts;
        
    }
}
