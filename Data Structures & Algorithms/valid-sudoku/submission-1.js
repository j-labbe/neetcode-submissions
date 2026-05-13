class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const squares = new Map();

        const getOrCreateHashSet = (hashmap, key) => {
            if (hashmap.has(key)) {
                return hashmap.get(key);
            } else {
                hashmap.set(key, new Set());
                return hashmap.get(key);
            }
        }

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const num = board[r][c];
                const squareKey = `${Math.trunc(r / 3)},${Math.trunc(c / 3)}`;

                if (num === '.') continue;

                if (
                    rows.get(r)?.has(num)
                    || cols.get(c)?.has(num)
                    || squares.get(squareKey)?.has(num)
                ) {
                    // duplicate found

                    return false;
                } else {
                    // add to set / create new set at num
                    const rowHashSet = getOrCreateHashSet(rows, r);
                    const colHashSet = getOrCreateHashSet(cols, c);
                    const squareHashSet = getOrCreateHashSet(squares, squareKey);

                    rowHashSet.add(num);
                    colHashSet.add(num);
                    squareHashSet.add(num);
                }
            }
        }
        return true;
    }
}
