/**
 * Returns a random color hsl(0-360)
 */
function randomColor(){
  return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`
}