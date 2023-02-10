var separateDigits = function(nums) {
    let res = []
nums.map( el => el.toString().length >= 2 ? res.push(...el.toString().split("").map( el => Number(el))) : res.push(el)) 
return res   
};