var lengthOfLastWord = function(s) {
    const string = s.replace(/\s+/g, ' ').trim().split(" ").at(-1).length
  return string
};