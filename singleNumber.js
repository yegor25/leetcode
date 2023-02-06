var singleNumber = function(nums) {
    const result = nums.reduce( function(el,acc){
     el[acc] = (el[acc] || 0) + 1
     return el
   }, {} 
   )
   for (let key in result) {
     if(result[key] === 1){
       return (key)
     }
   }
};