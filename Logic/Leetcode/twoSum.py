def twoSum(nums, target):
    dict = {}

    for i, num in enumerate(nums):
        diff = target - num

        if diff in dict:
            return [dict[diff], i]

        dict[num] = i

    return []


nums = [2,7,11,15]
# nums = [3,2,4]
print(twoSum(nums, 9))
# print(twoSum(nums, 6))