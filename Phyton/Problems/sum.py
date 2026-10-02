def twoSum(nums, target):
    seen = {}  # the notebook: number -> index

    for i in range(len(nums)):
        need = target - nums[i]  # what number do I need?
        if need in seen:  # have I already seen it?
            return [seen[need], i]  # its index, and my index
        seen[nums[i]] = i  # write the current number in the notebook


result = twoSum([2, 7, 11], 9)
print(result)
# nums = [2, 7, 11], target = 9


# def twoSum(nums, target):
#     x = 0
#     y = 0

#     for x in range(len(nums)):
#         for y in range(x + 1, len(nums)):
#             if nums[x] + nums[y] == target:
#                 return [x, y]
#     pass


# assert twoSum([9, 2, 1, 3], 4) == [2, 3]
# assert twoSum([2, 7, 11, 15], 9) == [0, 1]
# assert twoSum([3, 2, 4], 6) == [1, 2]
# assert twoSum([3, 3], 6) == [0, 1]
# print("All tests passed!")
