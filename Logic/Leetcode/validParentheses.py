def isValid(s):
    openBracket = ["(", "[", "{"]
    closeBracket = [")", "]", "}"]
    stack = []
        
    for bracket in s:
        if bracket in openBracket:
            stack.append(bracket)

        if bracket in closeBracket:
            if len(stack) == 0:
                return False
            
            top = stack[-1]
            if bracket == closeBracket[0] and top == openBracket[0]:
                stack.pop()
            elif bracket == closeBracket[1] and top == openBracket[1]:
                stack.pop()
            elif bracket == closeBracket[2] and top == openBracket[2]:
                stack.pop()
            else:
                return False

    if len(stack) == 0:
        return True
    return False

# s = "(])"
# s = "()"
s = "({{{{}}}))"
print(isValid(s))