/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let size = strs.length;
     
         /* if size is 0, return empty string */
         if (size == 0)
             return "";
     
         if (size == 1)
             return strs[0];
     
         /* sort the array of strings */
         strs.sort();
     
         /* find the minimum length from first and last string */
         let end = Math.min(strs[0].length, strs[size-1].length);
     
         /* find the common prefix between the first and
            last string */
         let i = 0;
         while (i < end && strs[0][i] == strs[size-1][i] )
             i++;
     
         let pre = strs[0].substring(0, i);
         return pre;
 };