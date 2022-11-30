const items = [
      { name: "bike", price: 100},
      { name: "tv", price: 200},
      { name: "album", price: 10},
      { name: "book", price: 5},
      { name: "phone", price: 500},
      { name: "computer", price: 1000},

];
  
var i = 0;
var sum=0;
while (i<6) {
      if (items[i].price < 10)
      { i++; } 
      else {
            sum=sum + items[i].price;
            i++;   
      }
      
}
console.log('the total price for the products under 10 is ${sum}');