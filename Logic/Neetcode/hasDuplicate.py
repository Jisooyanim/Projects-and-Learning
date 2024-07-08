def hasDuplicate(nums) -> bool:
    numSet = set(nums)

    if len(nums) != len(numSet):
        return True
    else:
        return False



nums = [1, 2, 3, 3]
print(hasDuplicate(nums))