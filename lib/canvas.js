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