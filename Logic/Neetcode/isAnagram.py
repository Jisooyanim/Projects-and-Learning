from collections import defaultdict, Counter

def isAnagram(s: str, t: str) -> bool:
    d1 = defaultdict(list)
    d2 = defaultdict(list)
    
    d1 = Counter(s)
    d2 = Counter(t)

    if d1 == d2:
        return True
    
    return False

s = "xx"
t = "x"
print(isAnagram(s, t))