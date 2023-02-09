var findMaxConsecutiveOnes = function(nums) {
    let maxvalue=0, count=0;
       for(let i=0;i<nums.length;i++){
           if(nums[i] === 1){
               count++;
               maxvalue=Math.max(maxvalue,count);
           }
           else
               count=0;
       }
       return maxvalue;
};