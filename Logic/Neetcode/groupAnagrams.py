from collections import defaultdict

def groupAnagrams(strs):
    dict = defaultdict(list)
    res = []

    for str in strs:
        sortedStrs = tuple(sorted(str))
        dict[sortedStrs].append(str)
    
    for value in dict.values():
        res.append(value)

    return res

strs = ["act","pots","tops","cat","stop","hat"]
print(groupAnagrams(strs))