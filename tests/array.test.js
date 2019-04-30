var assert = require('assert');
var array = require('../lib/array.js');


describe('array.js', function() {
  describe('flattenArray()', function() {
    it('should return empty array if provided arrays are empty', function() {
      assert.equal(array.flattenArray([[],[]]), []);
    });

    it('should return a flat array if provided with 2D arrays', function(){
        let tab = array.flattenArray([1,2],[3,4]);
        assert.equal(tab, [1,2,3,4]);
        assert.equal(tab.length, 4);
    })
  });

  describe('copyArray()', function() {
    let tab = [1,2,3,4];
    let tabCopy = array.copyOfArray(tab);

    it('should have a different pointer than the original array', function() {
        assert.notStrictEqual(tabCopy, tab);
    });

    it('should have the same size as the original array', function(){
        assert.equal(tabCopy.length, tab.length)
    })

    it('should have the same values as the original array', function() {

        for (let i = 0; i < tab.length; i++) {
            tab[i] === tabCopy[i];            
        }
        
        assert.notStrictEqual(tabCopy, tab);
    });
  });
});
