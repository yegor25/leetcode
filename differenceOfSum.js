var differenceOfSum = function(nums) {
    let sumOfElement = []
    let sumOfArray = nums.reduce( (acc,el) => acc + el)
     nums.map( el => el.toString().length >= 2 ? sumOfElement.push(...el.toString().split("").map( el => Number(el))) : sumOfElement.push(el)) 
     return (sumOfArray - sumOfElement.reduce( (acc,el) => acc + el))
};