class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const colMap = new Map();
        const rowMap = new Map();
        // 0: [Set([1,2,4,9,8]), etc.
        const boxMap = new Map();
        
        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            let seen = new Set();

            for (let j = 0; j < row.length; j++) {
                const char = row[j];
                if (char === ".") continue;
                if (seen.has(char)) return false;
                seen.add(char);

                // cols
                const colsSeen = colMap.get(j) || new Set();
                if (colsSeen.has(char)) return false;
                colsSeen.add(char);
                colMap.set(j, colsSeen);

                // set rows
                rowMap.set(i, seen);

                const currentBox = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;
                const updatedSet = boxMap.get(currentBox) || new Set();
                if (updatedSet.has(char)) return false;
                updatedSet.add(char);
                boxMap.set(currentBox, updatedSet);
            }
        }
        return true;
    }
}
