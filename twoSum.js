var twoSum = function(numbers, target) {
    let l = 0
    let r = numbers.length - 1
  
   while (l < r){
     let tot = numbers[l] + numbers[r]
  
    if (tot == target) {
      return [l + 1, r + 1]
    }
    else if(tot > target) {
       r -= 1
    } else {
      l += 1
    }
     
   }
 };