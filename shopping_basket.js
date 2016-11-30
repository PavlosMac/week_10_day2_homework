var item = require('./item');
var fp = require('lodash/fp');

var shopping_basket = {
    items: [],
    addItem: function(item){
      this.items.push(item);
    },
    total: 0,
    totalItems: function(){
      return this.items.length;
    },
    basketTotal: function(){
      for(var x of this.items){
        this.total += x.price;
      }
    },
    removeItem: function(item){
        var index = this.items.indexOf(item);
        if (index !== -1 ){
          this.items.splice(index,1);
        }
      },
    checkForDiscount: function(){
      if(this.total >= 20){
        this.total -= (this.total * 0.1);
      }
    }


};


module.exports = shopping_basket;

// function removeFromArray(array, value) {
//     var idx = array.indexOf(value);
//     if (idx !== -1) {
//         array.splice(idx, 1);
//     }
//     return array;
// }
