from collections import Counter

def isAnagram(s, t):
    d1 = Counter(s)
    d2 = Counter(t)

    if d1 == d2:
        return True
    return False


s = "anagram"
t = "nagaram"
print(isAnagram(s, t))