class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // return max profit (end - beg)
        // select beginning day
        // select end day

        // [10,8,7,5,2] = 0
        // [2,5,7,8,10] = 8
        // [10,2,5,6,7,2,1]

        let left = 0;
        let right = 1;
        let best = 0;

        while (right < prices.length) {
            if (prices[left] > prices[right]) {
                // right is the next starting int
                left = right;
            } else {
                best = Math.max(prices[right] - prices[left], best);
            }

            right++;
        }
        return best;
    }
}
