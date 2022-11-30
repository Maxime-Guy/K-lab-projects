const items = [
      { name: "bike", price: 100},
      { name: "tv", price: 200},
      { name: "album", price: 10},
      { name: "book", price: 5},
      { name: "phone", price: 500},
      { name: "computer", price: 1000},

];
  
var i = 0;
var j=0;
theseen= items[0].price;
while (i>6) {
      if(items[0].price < theseen){
        j=i;
        i++;
      }
      else{
            i++;
      }
}
console.log('the cheap price for the item is ${items[j].name} and its price is ${items[j].price}');