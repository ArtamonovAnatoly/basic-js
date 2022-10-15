const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr){
   let count=0
  for (i=0; i <arr.length; i++){
    for(k=0; k <arr[i].length; k++){
     
     if(arr[i][k]=== '^^') {count+=1}
      console.log(count)
      
    }
  }
    return count
  }

module.exports = {
  countCats
};
