class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedStr = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, '');
        console.log('Checking str', cleanedStr);

        let r = cleanedStr.length - 1;

        for (let i = 0; i < cleanedStr.length; i++) {
            if (cleanedStr[i] !== cleanedStr[r]) return false;
            r--;
        }

        return true;
    }
}
