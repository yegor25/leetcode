var findMin = function(nums) {
    const sort = nums.sort( (a,b) => a>b ? 1 : -1)
    return sort[0]
 };