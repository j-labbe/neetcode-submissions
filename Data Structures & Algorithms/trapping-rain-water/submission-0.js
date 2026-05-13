class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = [];
        let rightMax = [];
        let sum = 0;

        let currentMax = 0;
        for (let i = 0; i < height.length; i++) {
            currentMax = Math.max(currentMax, height[i]);
            leftMax.push(currentMax);
        }

        currentMax = 0;
        for (let i = height.length - 1; i >= 0; i--) {
            currentMax = Math.max(currentMax, height[i]);
            rightMax.unshift(currentMax);
        }

        for (let i = 0; i < height.length; i++) {
            sum += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return sum;
    }
}
