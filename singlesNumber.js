var singleNumber = function(nums) {
    let res = nums.reduce( (acc,el) => {
        acc[el] = ( acc[el] || 0) + 1
        return acc
    }, {})
    for(let key in res) {
        if(res[key] === 1) {
            return key
        }
    }
};