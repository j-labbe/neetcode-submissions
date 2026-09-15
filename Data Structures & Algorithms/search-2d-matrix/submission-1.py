class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        
        for row in matrix:
            if row[0] > target:
                return False
            if row[-1] < target:
                continue
            
            lower = 0
            upper = len(row) - 1
            
            while lower <= upper:
                mid = lower + (upper - lower) // 2
                if row[mid] == target:
                    return True
                elif row[mid] < target:
                    lower = mid + 1
                else:
                    upper = mid - 1
            
        return False