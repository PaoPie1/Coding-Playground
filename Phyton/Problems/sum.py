def twoSum(nums, target):
    i = 0
    x = 0
    sum_res = []

    for i in range(len(nums)):

        for x in range(i + 1, len(nums)):

            if nums[i] + nums[x] == target:

                sum_res.append(i)
                sum_res.append(x)
                return sum_res

    pass


print(twoSum([2, 7, 11, 15], 9))  # should print [0, 1]
print(twoSum([3, 2, 4], 6))  # should print [1, 2]
print(twoSum([3, 3], 6))  # should print [0, 1]
