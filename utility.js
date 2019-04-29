class Point {
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  }

function getMousePos(canvas, e) {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    return new Point(x, y);
}

function contains(array, item){
    for(var i = 0; i < array.length; i++){
        if(array[i].equals(item)){
        return true;
        }
    }
    return false;
}

function randomColor(){
  return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`
}

/**
 * This can end up in an infinite array if a 
 * child-object references itself
 * @param {Array} array 
 */
function copyOfArray(array){
    return JSON.parse(JSON.stringify(array))    
}