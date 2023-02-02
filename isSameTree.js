var isSameTree = function(p, q) {
    const jsonArray1 = JSON.stringify(p).toString()
    const jsonArray2 = JSON.stringify(q).toString()
    if( jsonArray1 === jsonArray2){
      return true
    } else{
      return false
    }
};