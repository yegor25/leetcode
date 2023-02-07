var getCommon = function(nums1, nums2) {
    const res = nums1.filter( el => nums2.some( (v) => v === el))
    if( res.length === 0) {
        return -1
    }
    return res[0]
 };