class Solution:
    def isValid(self, s: str) -> bool:
        stack = collections.deque()
        res = False

        for char in s:
            if char in ['(', '[', '{']:
                stack.append(char)
            else:
                if stack:
                    c = stack.pop()
                    print(char, c)
                    if char == ')' and c == '(':
                        res = True
                    elif char == ']' and c == '[':
                        res = True
                    elif char == '}' and c == '{':
                        res = True
                    else:
                        return False
                else:
                    return False
        return res and not stack

