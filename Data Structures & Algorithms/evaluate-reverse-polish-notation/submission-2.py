class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        operands = []
        for token in tokens:
            if token == '+':
                prev1 = operands.pop()
                prev2 = operands.pop()
                operands.append(int(prev1) + int(prev2))
            elif token == '-':
                prev1 = operands.pop()
                prev2 = operands.pop()
                operands.append(int(prev2) - int(prev1))
            elif token == '*':
                prev1 = operands.pop()
                prev2 = operands.pop()
                operands.append(int(prev2) * int(prev1))
            elif token == '/':
                prev1 = operands.pop()
                prev2 = operands.pop()
                operands.append(int(prev2) / int(prev1))
            else:
                operands.append(token)

        return int(operands.pop())