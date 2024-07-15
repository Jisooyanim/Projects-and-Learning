def longestCommonPrefix(strs):
    prefix = strs[0]

    #No need to check the first string since 
    #I used the the first word as basis for the prefix
    for word in strs[1:]:
        #If prefix not in word, it will return -1
        while word.find(prefix) != 0:
            #Remove last character from string
            prefix = prefix[:-1]

    return prefix

# strs = ["flower","flow", "flight"]
strs = ["racing","racecar","car"]
print(longestCommonPrefix(strs)) #"fl"
