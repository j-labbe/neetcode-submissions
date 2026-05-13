class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let best = 0;

        while (left < right) {
            const area = (right - left) * Math.min(heights[left], heights[right]);
            if (area > best){
                best = area;
            }

            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return best;
    }
}
