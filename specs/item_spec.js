var item = require('../item');
var assert = require('assert');



describe('Item', function(){
    it('can have a description', function(){
      assert.equal('chocolate', item.description);
    });

    it('can have a price', function(){
      assert.equal(49.99, item.price);
    });


});
