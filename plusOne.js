var plusOne = function(digits) {
    const int = digits.toString().split(",").join("")
    if (int.length < 15) {
      const incr = Number(int) + 1
    
    const arrIncr = incr.toString().split("").map( el => Number(el))
    return (arrIncr)
    } else {
      const incr = BigInt(int) + BigInt(1) 
  
    const arrIncr = incr.toString().split("").map( el =>  Number(el))
    return (arrIncr)
    }
};