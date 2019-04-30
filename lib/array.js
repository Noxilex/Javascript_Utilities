/**
 * Copies the array & makes a clone of itself 
 * (doesn't share the same reference as original array)
 * @param {Array} array 
 */
function copyOfArray(array){
    return [...array];   
}

/**
 * Turns a 2D array into a 1D array
 * ex: flattenArray([[1,2],[3,4]]) -> [1,2,3,4]
 * @param {Array} array 
 */
function flattenArray(array){
    return array.reduce((acc, item, index) => {
        const flatten = acc.concat(item);
        return flatten;
      });
}

/**
 * Returns true if item is contained in the array
 * item needs to implements the equals() methods in order
 * for the function to work properly
 * @param {Array} array 
 * @param {Object} item 
 */
function contains(array, item){
    for(var i = 0; i < array.length; i++){
        if(array[i].equals(item)){
        return true;
        }
    }
    return false;
}