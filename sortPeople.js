var sortPeople = function(names, heights) {
    const size = names.length
    let i = 0
    const obj = []
    while(i < size) {
      //obj[names[i]] = heights[i]
      obj.push({name: names[i], height: heights[i]})
      i++
    }
    const sort = obj.sort( (a,b) => a.height < b.height ? 1 : -1)
    const sortingNames = sort.map( el => el.name)
    
    
    return (sortingNames)
};