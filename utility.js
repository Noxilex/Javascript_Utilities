/**
 * 2D coordinate class
 */
class Point {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

/**
 * Returns mouse position based on canvas & mouse event
 * @param {Canvas} canvas 
 * @param {Event} e 
 */
function getMousePos(canvas, e) {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    return new Point(x, y);
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

/**
 * Returns a random color hsl(0-360)
 */
function randomColor(){
  return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`
}

/**
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