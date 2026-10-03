class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        operands = []
        for token in tokens:
            if token == '+':
                operands.append(int(operands.pop()) + int(operands.pop()))
            elif token == '-':
                a, b = operands.pop(), operands.pop()
                operands.append(int(b) - int(a))
            elif token == '*':
                operands.append(int(operands.pop()) * int(operands.pop()))
            elif token == '/':
                a, b = operands.pop(), operands.pop()
                operands.append(int(b) / int(a))
            else:
                operands.append(token)

        return int(operands.pop())